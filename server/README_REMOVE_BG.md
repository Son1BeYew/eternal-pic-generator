# Remove Background API

## Tổng quan
API xóa phông nền sử dụng dịch vụ **remove.bg** - một API chuyên nghiệp cho việc xóa background tự động.

## Cấu hình

### 1. Đăng ký API Key
1. Truy cập: https://www.remove.bg/api
2. Đăng ký tài khoản miễn phí
3. Lấy API key từ dashboard
4. Free plan: 50 API calls/tháng

### 2. Thêm vào .env
```env
REMOVE_BG_API_KEY=your_api_key_here
```

## API Endpoints

### POST /api/remove-bg
Xóa phông nền từ ảnh

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "baseImage": "data:image/png;base64,iVBORw0KGgoAAAANS..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "user": "user_id",
    "prompt": "Background removed",
    "style": "realistic",
    "imageUrl": "https://storage.googleapis.com/...",
    "status": "completed",
    "createdAt": "2025-12-30T...",
    "updatedAt": "2025-12-30T..."
  }
}
```

### GET /api/remove-bg/credits
Kiểm tra số credits còn lại (Admin only)

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "credits": 45,
    "api_key": 50
  }
}
```

## Flow hoạt động

1. **Client upload ảnh** → Convert sang base64
2. **Server nhận request** → `removeBackground()`
3. **Gọi remove.bg API** với base64 image
4. **Nhận kết quả** (PNG với transparent background)
5. **Upload lên Firebase Storage** → Lấy public URL
6. **Lưu vào MongoDB** (Scene model)
7. **Trả về response** với imageUrl

## Lưu ý

### Giới hạn Free Plan
- 50 API calls/tháng
- Kích thước ảnh: tối đa 12 megapixels
- Format đầu ra: PNG với transparent background

### Nâng cấp Plan
- Starter: $9/tháng - 500 credits
- Pro: $49/tháng - 3000 credits
- Ultra: $199/tháng - 15000 credits

### Error Handling
- API key không hợp lệ → 403 Forbidden
- Hết credits → 402 Payment Required
- Ảnh quá lớn → 400 Bad Request
- Server error → 500 Internal Server Error

## Tech Stack
- **API Service**: remove.bg
- **Storage**: Firebase Storage
- **Database**: MongoDB (Scene model)
- **Backend**: Node.js + Express

## Alternative (Nếu không dùng remove.bg)
Có thể dùng các service khác:
- **Clipdrop API** - https://clipdrop.co/apis
- **PhotoRoom API** - https://www.photoroom.com/api
- **Slazzer API** - https://www.slazzer.com/api
- **Background Removal AI** (self-hosted) - https://github.com/danielgatis/rembg
