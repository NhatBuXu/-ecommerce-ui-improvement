const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const dataDirectory = path.join(__dirname, "data");
const dataFile = path.join(dataDirectory, "tasks.json");
const statuses = ["Pending", "In Progress", "Completed"];
const priorities = ["Low", "Medium", "High"];

fs.mkdirSync(dataDirectory, { recursive: true });
if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, "[]", "utf8");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function readTasks() {
    const tasks = JSON.parse(fs.readFileSync(dataFile, "utf8"));
    if (!Array.isArray(tasks)) throw new Error("Task data must be a JSON array.");
    return tasks;
}

function saveTasks(tasks) {
    fs.writeFileSync(dataFile, JSON.stringify(tasks, null, 2), "utf8");
}

function validateTask(input, partial = false) {
    const errors = [];
    const task = {};
    if (!partial || Object.hasOwn(input, "title")) {
        if (typeof input.title !== "string" || !input.title.trim()) errors.push("Title is required.");
        else task.title = input.title.trim();
    }
    if (!partial || Object.hasOwn(input, "description")) {
        if (input.description !== undefined && typeof input.description !== "string") errors.push("Description must be text.");
        else task.description = input.description || "";
    }
    if (!partial || Object.hasOwn(input, "date")) {
        if (typeof input.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(input.date) || Number.isNaN(Date.parse(`${input.date}T00:00:00`))) errors.push("A valid task date is required.");
        else task.date = input.date;
    }
    if (!partial || Object.hasOwn(input, "priority")) {
        const priority = input.priority || "Medium";
        if (!priorities.includes(priority)) errors.push("Priority must be Low, Medium, or High.");
        else task.priority = priority;
    }
    if (!partial || Object.hasOwn(input, "status")) {
        const status = input.status || "Pending";
        if (!statuses.includes(status)) errors.push("Status must be Pending, In Progress, or Completed.");
        else task.status = status;
    }
    return { task, errors };
}

app.get("/api/tasks", (req, res, next) => {
    try { res.json(readTasks()); } catch (error) { next(error); }
});

app.post("/api/tasks", (req, res, next) => {
    const { task, errors } = validateTask(req.body || {});
    if (errors.length) return res.status(400).json({ message: errors.join(" ") });
    try {
        const tasks = readTasks();
        const newTask = { id: Date.now(), ...task };
        tasks.push(newTask);
        saveTasks(tasks);
        res.status(201).json(newTask);
    } catch (error) { next(error); }
});

app.put("/api/tasks/:id", (req, res, next) => {
    const id = Number(req.params.id);
    if (!Number.isSafeInteger(id)) return res.status(400).json({ message: "Invalid task ID." });
    const { task, errors } = validateTask(req.body || {}, true);
    if (errors.length) return res.status(400).json({ message: errors.join(" ") });
    try {
        const tasks = readTasks();
        const index = tasks.findIndex(item => item.id === id);
        if (index < 0) return res.status(404).json({ message: "Task not found." });
        tasks[index] = { ...tasks[index], ...task, id };
        saveTasks(tasks);
        res.json(tasks[index]);
    } catch (error) { next(error); }
});

app.delete("/api/tasks/:id", (req, res, next) => {
    const id = Number(req.params.id);
    if (!Number.isSafeInteger(id)) return res.status(400).json({ message: "Invalid task ID." });
    try {
        const tasks = readTasks();
        const updated = tasks.filter(item => item.id !== id);
        if (updated.length === tasks.length) return res.status(404).json({ message: "Task not found." });
        saveTasks(updated);
        res.json({ message: "Task deleted successfully." });
    } catch (error) { next(error); }
});

app.get("/api/statistics", (req, res, next) => {
    try {
        const tasks = readTasks();
        const completed = tasks.filter(task => task.status === "Completed").length;
        res.json({ total: tasks.length, completed, pending: tasks.filter(task => task.status === "Pending").length, inProgress: tasks.filter(task => task.status === "In Progress").length, completionRate: tasks.length ? Math.round(completed / tasks.length * 100) : 0 });
    } catch (error) { next(error); }
});

app.use((error, req, res, next) => {
    console.error(error);
    if (error instanceof SyntaxError && error.status === 400) return res.status(400).json({ message: "Invalid JSON request body." });
    res.status(500).json({ message: "Unable to read or save task data. Check data/tasks.json and file permissions." });
});

if (require.main === module) app.listen(PORT, () => console.log(`TODO App running at http://localhost:${PORT}`));
module.exports = app;
