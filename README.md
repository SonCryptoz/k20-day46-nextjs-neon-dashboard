# Next.js Neon Dashboard (`k20-day46-nextjs-neon-dashboard`)

Ứng dụng Dashboard quản lý hóa đơn và khách hàng sử dụng Next.js App Router và Neon Postgres.

## 1. Cài đặt

Clone repository và cài đặt các gói phụ thuộc bằng `pnpm`:

```bash
git clone <url-repo-cua-ban>
cd k20-day46-nextjs-neon-dashboard
pnpm install
```

## 2. Cấu hình Database Neon

1. Tạo một database mới trên Neon Postgres (hoặc qua Vercel Postgres) dành riêng cho bài tập này.
2. Mở **SQL Editor** của Neon, sao chép và chạy toàn bộ nội dung trong file `db.sql` ở thư mục gốc của repo để khởi tạo bảng `customers` (4 dòng) và `invoices` (12 dòng).
3. Tạo file `.env.local` ở thư mục gốc của dự án và khai báo chuỗi kết nối `DATABASE_URL` (không dùng tiền tố `NEXT_PUBLIC_`):

```env
DATABASE_URL="postgresql://<user>:<password>@<host>/<dbname>?sslmode=require"
```

> **Lưu ý:** File `.env.local` đã được loại trừ trong `.gitignore`, tuyệt đối không đưa `DATABASE_URL` lên GitHub.

## 3. Chạy ứng dụng

Khởi chạy server phát triển ở chế độ development:

```bash
pnpm dev
```

Mở trình duyệt và truy cập địa chỉ `http://localhost:3000`.

## 4. Các URL cần mở để kiểm tra

- `http://localhost:3000` — Trang chủ giới thiệu ứng dụng.
- `http://localhost:3000/dashboard` — Trang tổng quan hiển thị 5 hóa đơn mới nhất (ID 12, 11, 10, 9, 8).
- `http://localhost:3000/dashboard/invoices` — Trang danh sách hóa đơn hỗ trợ tìm kiếm theo tên khách hàng (`?search=...`) và phân trang 5 hóa đơn/trang (`?page=...`).
- `http://localhost:3000/dashboard/invoices?search=Minh&page=2` — Kiểm tra đồng bộ ô tìm kiếm và trang hiện tại trực tiếp từ URL.
- `http://localhost:3000/dashboard/customers` — Trang danh sách khách hàng sắp xếp theo ID (`Minh`, `Hoa`, `Phúc`, `Lan`).
