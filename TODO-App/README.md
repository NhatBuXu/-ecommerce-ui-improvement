# TODO App

Ứng dụng quản lý công việc cá nhân đơn giản, chạy bằng Node.js và Express. Task được lưu trực tiếp trong file JSON, không sử dụng database.

## Mục tiêu

- Thực hành xây dựng ứng dụng web có frontend và backend Node.js.
- Thực hiện CRUD, tìm kiếm, lọc và thống kê task.
- Lưu dữ liệu bền vững bằng JSON.

## Chức năng

- Hiển thị task có ngày thực hiện là hôm nay theo ngày trên máy người dùng.
- Tìm task theo tiêu đề hoặc mô tả; lọc theo Pending, In Progress hoặc Completed.
- Thêm, sửa đầy đủ thông tin và xóa task.
- Trang thống kê gồm tổng số task, số lượng từng trạng thái và tỷ lệ hoàn thành.
- Hiển thị thông báo thao tác thành công, lỗi và danh sách rỗng.

## Công nghệ

- Node.js
- Express
- HTML, CSS, JavaScript thuần
- JSON file storage

## Cấu trúc thư mục

```text
todo-app/
├── data/
│   └── tasks.json       # Dữ liệu task
├── public/
│   ├── index.html       # Giao diện
│   └── script.js        # Tương tác frontend
├── routes/              # Dành cho mở rộng; hiện chưa sử dụng
├── server.js            # Express server và API
├── package.json
├── package-lock.json
└── README.md
```

## Lưu trữ dữ liệu

Task được đọc và ghi vào `data/tasks.json`. Server tự tạo thư mục/file này nếu chưa có. Dữ liệu tồn tại sau khi tải lại trang hoặc khởi động lại server. Sao lưu file JSON nếu cần giữ dữ liệu.

Mỗi task có dạng:

```json
{
  "id": 1732500000000,
  "title": "Hoàn thành bài tập",
  "description": "Mô tả công việc",
  "date": "2026-11-25",
  "priority": "Medium",
  "status": "Pending"
}
```

## API chính

| Method | Endpoint | Mô tả |
|---|---|---|
| GET | `/api/tasks` | Lấy tất cả task |
| POST | `/api/tasks` | Tạo task; cần `title`, `date`, tùy chọn `description`, `priority`, `status` |
| PUT | `/api/tasks/:id` | Cập nhật một phần hoặc toàn bộ trường task |
| DELETE | `/api/tasks/:id` | Xóa task |
| GET | `/api/statistics` | Lấy tổng số, số lượng theo trạng thái và completion rate |

Giá trị hợp lệ: `priority` là `Low`, `Medium`, `High`; `status` là `Pending`, `In Progress`, `Completed`. API trả HTTP 400 cho dữ liệu không hợp lệ và 404 khi không tìm thấy task.

## Cài đặt và chạy

Yêu cầu Node.js 18 trở lên và npm.

```bash
cd todo-app
npm install
npm start
```

Mở [http://localhost:3000](http://localhost:3000). Có thể đổi cổng bằng biến môi trường `PORT`.

## Cách sử dụng

1. Trong mục **Công việc**, điền tiêu đề, ngày, mô tả, mức ưu tiên và trạng thái rồi chọn **Thêm task**.
2. Danh sách mặc định chỉ hiển thị task của hôm nay. Dùng ô tìm kiếm và bộ lọc trạng thái để thu hẹp kết quả.
3. Chọn **Sửa** trên task để tải thông tin vào form; lưu thay đổi hoặc hủy sửa.
4. Chọn **Xóa** và xác nhận để xóa task.
5. Chọn **Thống kê** để xem số liệu được tính từ dữ liệu JSON hiện tại.

## Lưu ý

- Không cần database hoặc dịch vụ bên ngoài.
- `data/tasks.json` phải là JSON hợp lệ và có quyền đọc/ghi.
- Không đưa `node_modules` lên GitHub; cài lại dependency bằng `npm install` từ `package.json` và lockfile.
