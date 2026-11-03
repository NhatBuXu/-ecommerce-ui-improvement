# StudyCorner – Phân tích và cải thiện giao diện website thương mại điện tử

**Bài tập cá nhân – Phát triển ứng dụng thương mại điện tử**

## 1. Tổng quan dự án

StudyCorner là website thương mại điện tử mô phỏng hoạt động kinh doanh các sản phẩm học tập và văn phòng phẩm. Website được xây dựng nhằm giới thiệu sản phẩm, cung cấp thông tin cơ bản và tạo giao diện trực quan, thân thiện với người dùng.

Dự án được thực hiện trong khuôn khổ bài tập cá nhân, tập trung thực hành HTML5 và CSS3, đồng thời cải thiện bố cục, giao diện và trải nghiệm người dùng.

## 2. Mục tiêu dự án

- Xây dựng cấu trúc website bằng HTML5 theo ngữ nghĩa.
- Sử dụng CSS3 để định dạng và cải thiện giao diện.
- Thực hành CSS Selector và Box Model.
- Ứng dụng Flexbox và CSS Grid trong bố trí nội dung.
- Bổ sung hiệu ứng Hover và Focus để tăng khả năng tương tác.
- Thiết kế giao diện tương thích với máy tính, máy tính bảng và điện thoại.

## 3. Công nghệ và công cụ sử dụng

| Công nghệ/Công cụ | Mục đích sử dụng |
|---|---|
| HTML5 | Xây dựng cấu trúc và nội dung website |
| CSS3 | Thiết kế và định dạng giao diện |
| Flexbox | Căn chỉnh các thành phần trên giao diện |
| CSS Grid | Bố trí danh sách sản phẩm |
| Media Queries | Điều chỉnh giao diện theo kích thước màn hình |
| GitHub | Quản lý mã nguồn và lưu trữ dự án |
| GitHub Codespaces | Môi trường lập trình trực tuyến |

## 4. Các thành phần chính của website

- **Header:** Hiển thị logo StudyCorner, menu điều hướng và khu vực giỏ hàng minh họa.
- **Hero Section:** Giới thiệu website với thông điệp và nút khám phá sản phẩm.
- **Product Section:** Hiển thị bốn sản phẩm nổi bật, bao gồm hình ảnh, danh mục, tên, mô tả và giá bán.
- **Footer:** Cung cấp thông tin giới thiệu cơ bản về StudyCorner.

## 5. Cấu trúc thư mục dự án

```text
-ecommerce-ui-improvement/
│
├── css/
│   └── style.css
│
├── images/
│   ├── product-1.jpg
│   ├── product-2.jpg
│   ├── product-3.jpg
│   └── product-4.jpg
│
├── index.html
├── README.md
└── AI_USAGE.md
```

## 6. Các kỹ thuật HTML5 và CSS3 được áp dụng

### 6.1. HTML5

Sử dụng các thẻ HTML5 có ý nghĩa ngữ nghĩa để tổ chức nội dung website:

- `header`: Khu vực đầu trang.
- `nav`: Khu vực điều hướng.
- `main`: Nội dung chính.
- `section`: Phân chia các khu vực nội dung.
- `article`: Tổ chức thông tin từng sản phẩm.
- `footer`: Khu vực cuối trang.

### 6.2. CSS3

- **CSS Selector:** Sử dụng bộ chọn phần tử, bộ chọn class, bộ chọn hậu duệ và pseudo-class.
- **Box Model:** Áp dụng margin, padding, border và content để kiểm soát kích thước, khoảng cách giữa các thành phần.
- **Flexbox:** Căn chỉnh logo, menu điều hướng, giá và liên kết chi tiết sản phẩm.
- **CSS Grid:** Bố trí danh sách sản phẩm theo dạng lưới, gồm bốn cột trên màn hình lớn và hai cột trên màn hình nhỏ.
- **Hover và Focus:** Bổ sung hiệu ứng khi di chuyển chuột và trạng thái nhận diện khi điều hướng bằng bàn phím.
- **Responsive Design:** Sử dụng Media Queries để điều chỉnh giao diện theo kích thước màn hình.

## 7. Kiểm thử giao diện Responsive

Website được kiểm tra trên ba kích thước màn hình:

| Thiết bị | Chiều rộng màn hình | Kết quả |
|---|---:|---|
| Desktop | 1366px | Đạt |
| Tablet | 768px | Đạt |
| Mobile | 400px | Đạt |

Các nội dung được kiểm tra gồm:

- Khả năng hiển thị của header và menu điều hướng.
- Khả năng hiển thị của banner và nội dung chính.
- Hình ảnh và thông tin sản phẩm.
- Bố cục sản phẩm trên các kích thước màn hình.
- Khả năng hiển thị và tương tác của các liên kết.

## 8. Hướng dẫn chạy dự án

**Bước 1:** Tải hoặc clone repository về máy tính.

**Bước 2:** Mở thư mục dự án bằng Visual Studio Code hoặc GitHub Codespaces.

**Bước 3:** Mở Terminal tại thư mục dự án và chạy lệnh:

```bash
python3 -m http.server 8000
```

**Bước 4:** Mở cổng 8000 trong mục Ports để truy cập website trên trình duyệt.

## 9. Repository GitHub

Đường dẫn mã nguồn:  
https://github.com/NhatBuXu/-ecommerce-ui-improvement

## 10. Kết luận

Thông qua dự án StudyCorner, người thực hiện đã vận dụng các kiến thức HTML5 và CSS3 vào việc xây dựng, tổ chức và cải thiện giao diện website thương mại điện tử. Dự án giúp củng cố kỹ năng sử dụng HTML ngữ nghĩa, CSS Selector, Box Model, Flexbox, CSS Grid và thiết kế giao diện Responsive.

Đồng thời, quá trình thực hiện giúp nâng cao khả năng kiểm tra, phát hiện và điều chỉnh các vấn đề về bố cục và trải nghiệm người dùng trên website.

## 11. Báo cáo kiểm thử và minh chứng

### 11.1. Kết quả kiểm thử

| STT | Nội dung kiểm thử | Kết quả |
|---|---|---|
| 1 | Khả năng truy cập website | Đạt |
| 2 | Hiển thị logo, menu và header | Đạt |
| 3 | Hiển thị banner và nội dung giới thiệu | Đạt |
| 4 | Hiển thị đầy đủ bốn ảnh sản phẩm | Đạt |
| 5 | Hiển thị giá và thông tin sản phẩm | Đạt |
| 6 | Hiệu ứng Hover và Focus | Đạt |
| 7 | Bố cục trên Desktop | Đạt |
| 8 | Bố cục trên Tablet | Đạt |
| 9 | Bố cục trên Mobile | Đạt |

### 11.2. Danh sách minh chứng

Các hình ảnh kiểm thử được lưu trong thư mục `evidence/`:

- `before.png`: Giao diện trước khi cải thiện.
- `after-desktop.png`: Giao diện sau cải thiện trên Desktop.
- `after-tablet.png`: Giao diện sau cải thiện trên Tablet.
- `after-mobile.png`: Giao diện sau cải thiện trên Mobile.
- `hover-focus.png`: Minh chứng hiệu ứng tương tác Hover và Focus.

### 11.3. Đánh giá kết quả

Sau quá trình cải thiện, website StudyCorner có cấu trúc HTML5 rõ ràng, bố cục được tổ chức bằng Flexbox và CSS Grid, đồng thời bổ sung các trạng thái tương tác và khả năng hiển thị trên nhiều kích thước màn hình.

Các kết quả kiểm thử cho thấy giao diện đáp ứng những tiêu chí đã đặt ra trong phạm vi bài tập.
