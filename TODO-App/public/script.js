const form = document.getElementById("taskForm");
const list = document.getElementById("taskList");
const notice = document.getElementById("notice");
let tasks = [];
let editingId = null;

function localDateString(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function showNotice(message, error = false) {
  notice.textContent = message;
  notice.classList.toggle("error", error);
  notice.classList.remove("hidden");
  window.clearTimeout(showNotice.timer);
  showNotice.timer = window.setTimeout(() => notice.classList.add("hidden"), 3500);
}
async function api(url, options) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Có lỗi xảy ra.");
  return data;
}
async function loadTasks() {
  try {
    tasks = await api("/api/tasks");
    renderTasks();
    await loadStatistics();
  } catch (error) { showNotice(error.message, true); }
}
function renderTasks() {
  const today = localDateString();
  document.getElementById("todayLabel").textContent = new Date().toLocaleDateString("vi-VN");
  const query = document.getElementById("search").value.trim().toLocaleLowerCase("vi");
  const status = document.getElementById("filter").value;
  const found = tasks.filter(task => task.date === today && (status === "All" || task.status === status) && (`${task.title} ${task.description}`.toLocaleLowerCase("vi").includes(query)));
  list.replaceChildren();
  if (!found.length) {
    const empty = document.createElement("p"); empty.className = "empty";
    empty.textContent = query || status !== "All" ? "Không tìm thấy task phù hợp hôm nay." : "Hôm nay chưa có task nào.";
    list.append(empty); return;
  }
  found.forEach(task => {
    const card = document.createElement("article"); card.className = "task";
    const head = document.createElement("div"); head.className = "task-head";
    const title = document.createElement("h3"); title.textContent = task.title;
    const badge = document.createElement("span"); badge.className = "badge"; badge.textContent = task.status;
    head.append(title, badge);
    const desc = document.createElement("p"); desc.textContent = task.description || "Không có mô tả.";
    const meta = document.createElement("div"); meta.className = "meta"; meta.textContent = `Ngày: ${task.date} · Ưu tiên: ${task.priority}`;
    const actions = document.createElement("div"); actions.className = "task-actions";
    const edit = document.createElement("button"); edit.className = "secondary"; edit.textContent = "Sửa"; edit.addEventListener("click", () => startEdit(task));
    const remove = document.createElement("button"); remove.className = "danger"; remove.textContent = "Xóa"; remove.addEventListener("click", () => deleteTask(task));
    actions.append(edit, remove); card.append(head, desc, meta, actions); list.append(card);
  });
}
function startEdit(task) {
  editingId = task.id;
  document.getElementById("title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("date").value = task.date;
  document.getElementById("priority").value = task.priority;
  document.getElementById("status").value = task.status;
  document.getElementById("formHeading").textContent = "Sửa công việc";
  document.getElementById("submitButton").textContent = "Lưu thay đổi";
  document.getElementById("cancelEdit").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function resetForm() {
  form.reset(); editingId = null;
  document.getElementById("formHeading").textContent = "Thêm công việc";
  document.getElementById("submitButton").textContent = "Thêm task";
  document.getElementById("cancelEdit").classList.add("hidden");
}
form.addEventListener("submit", async event => {
  event.preventDefault();
  const payload = { title: document.getElementById("title").value, description: document.getElementById("description").value, date: document.getElementById("date").value, priority: document.getElementById("priority").value, status: document.getElementById("status").value };
  try {
    await api(editingId ? `/api/tasks/${editingId}` : "/api/tasks", { method: editingId ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    showNotice(editingId ? "Đã cập nhật task." : "Đã thêm task."); resetForm(); await loadTasks();
  } catch (error) { showNotice(error.message, true); }
});
async function deleteTask(task) {
  if (!window.confirm(`Xóa task “${task.title}”?`)) return;
  try { await api(`/api/tasks/${task.id}`, { method: "DELETE" }); showNotice("Đã xóa task."); await loadTasks(); }
  catch (error) { showNotice(error.message, true); }
}
async function loadStatistics() {
  const stats = await api("/api/statistics");
  for (const key of ["total", "completed", "pending", "inProgress"]) document.getElementById(key).textContent = stats[key];
  document.getElementById("completionRate").textContent = `${stats.completionRate}%`;
}
document.getElementById("cancelEdit").addEventListener("click", resetForm);
document.getElementById("search").addEventListener("input", renderTasks);
document.getElementById("filter").addEventListener("change", renderTasks);
document.querySelectorAll("[data-page]").forEach(button => button.addEventListener("click", () => {
  const isTasks = button.dataset.page === "tasks";
  document.getElementById("tasksPage").classList.toggle("hidden", !isTasks);
  document.getElementById("statisticsPage").classList.toggle("hidden", isTasks);
  document.querySelectorAll("[data-page]").forEach(item => item.classList.toggle("active", item === button));
  if (!isTasks) loadStatistics().catch(error => showNotice(error.message, true));
}));
document.getElementById("date").value = localDateString();
loadTasks();
