# Hướng dẫn Setup Remove.bg API

## Bước 1: Đăng ký tài khoản

1. Truy cập: https://www.remove.bg/users/sign_up
2. Đăng ký tài khoản (có thể dùng Google/Facebook)
3. Xác nhận email

## Bước 2: Lấy API Key

1. Đăng nhập vào https://www.remove.bg/
2. Vào Dashboard: https://www.remove.bg/dashboard#api-key
3. Copy API key (dạng: `xxxxxxxxxxxxxxxxxxxxxx`)

## Bước 3: Thêm vào .env

Mở file `server/.env` và thêm:

```env
REMOVE_BG_API_KEY=your_api_key_here
```

Ví dụ:
```env
REMOVE_BG_API_KEY=abc123def456ghi789jkl012mno345
```

## Bước 4: Restart Server

```bash
cd server
npm run dev
```

## Bước 5: Test API

### Test từ Frontend
1. Đăng nhập vào app
2. Vào trang "Xóa phông nền" (`/dashboard/remove-bg`)
3. Upload ảnh
4. Nhấn "Xóa phông nền"

### Test bằng curl
```bash
curl -X POST http://localhost:5000/api/remove-bg \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "baseImage": "data:image/png;base64,iVBORw0KGgo..."
  }'
```

### Kiểm tra credits còn lại (Admin only)
```bash
curl http://localhost:5000/api/remove-bg/credits \
  -H "Authorization: Bearer ADMIN_JWT_TOKEN"
```

## Giới hạn Free Plan

- **50 API calls/tháng** (reset vào ngày 1 hàng tháng)
- Kích thước ảnh: tối đa **12 megapixels**
- Format đầu ra: PNG với transparent background
- Không watermark

## Nâng cấp Plan (Nếu cần)

| Plan | Giá | Credits/tháng |
|------|-----|---------------|
| Free | $0 | 50 |
| Starter | $9 | 500 |
| Pro | $49 | 3,000 |
| Ultra | $199 | 15,000 |

## Troubleshooting

### Lỗi: "Remove.bg API key is not configured"
- Kiểm tra file `.env` đã có `REMOVE_BG_API_KEY`
- Restart server sau khi thêm

### Lỗi: "Invalid API key"
- API key sai hoặc đã bị revoke
- Lấy API key mới từ dashboard

### Lỗi: "Insufficient credits"
- Đã hết 50 credits miễn phí trong tháng
- Chờ đến tháng sau hoặc nâng cấp plan

### Lỗi: "Image too large"
- Ảnh vượt quá 12 megapixels
- Resize ảnh nhỏ hơn trước khi upload

## Alternative Solutions

Nếu không muốn dùng remove.bg, có thể dùng:

1. **Clipdrop API** - https://clipdrop.co/apis/remove-background
2. **PhotoRoom API** - https://www.photoroom.com/api
3. **Self-hosted rembg** - https://github.com/danielgatis/rembg (Python)

## API Documentation

Chi tiết: https://www.remove.bg/api
