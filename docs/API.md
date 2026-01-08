# EternalPic API Documentation

Base URL: `http://localhost:5000/api` (Development)

## Table of Contents

- [Authentication](#authentication)
- [Users](#users)
- [Images](#images)
- [Enhancement](#enhancement)
- [Background Removal](#background-removal)
- [Graduation Photos](#graduation-photos)
- [Schools](#schools)
- [Hairstyle Prompts](#hairstyle-prompts)
- [Trending Images](#trending-images)
- [Error Handling](#error-handling)

## Authentication

All authenticated endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

### Register User

**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123",
  "fullName": "John Doe",
  "phone": "+84123456789",
  "address": "123 Main St, Hanoi",
  "dateOfBirth": "1990-01-01"
}
```

**Response:** `201 Created`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "phone": "+84123456789",
  "address": "123 Main St, Hanoi",
  "dateOfBirth": "1990-01-01",
  "role": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Required Fields:** `username`, `email`, `password`

---

### Login User

**POST** `/auth/login`

Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "phone": "+84123456789",
  "address": "123 Main St, Hanoi",
  "dateOfBirth": "1990-01-01",
  "role": "user",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response:** `400 Bad Request`
```json
{
  "message": "Invalid credentials"
}
```

---

### Get Current User

**GET** `/auth/me`

Get authenticated user information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "role": "user"
}
```

---

### Google OAuth

**GET** `/auth/google`

Initiate Google OAuth authentication flow.

**GET** `/auth/google/callback`

Google OAuth callback endpoint. Redirects to client with token.

---

### Facebook OAuth

**GET** `/auth/facebook`

Initiate Facebook OAuth authentication flow.

**GET** `/auth/facebook/callback`

Facebook OAuth callback endpoint. Redirects to client with token.

---

## Users

### Get All Users (Admin)

**GET** `/users`

Get list of all users (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

### Update User Profile

**PUT** `/users/profile`

Update authenticated user's profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "fullName": "John Smith",
  "phone": "+84987654321",
  "address": "456 New St, HCMC",
  "dateOfBirth": "1990-05-15"
}
```

**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Smith",
  "phone": "+84987654321",
  "address": "456 New St, HCMC",
  "dateOfBirth": "1990-05-15",
  "role": "user"
}
```

---

### Change Password

**PUT** `/users/change-password`

Change user password.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword456"
}
```

**Response:** `200 OK`
```json
{
  "message": "Password changed successfully"
}
```

**Error Response:** `400 Bad Request`
```json
{
  "message": "Current password is incorrect"
}
```

---

## Images

### Generate Image

**POST** `/images/generate`

Generate image from text prompt or create 360° panoramic image.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "prompt": "A beautiful sunset over mountains with vibrant colors",
  "style": "realistic",
  "outputType": "normal"
}
```

**Parameters:**
- `prompt` (string, required): Text description of the image
- `style` (string, optional): Image style - `realistic`, `anime`, `cartoon`, `painting` (default: `realistic`)
- `outputType` (string, optional): Output type - `normal` or `360` (default: `normal`)

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f1f77bcf86cd799439010",
    "prompt": "A beautiful sunset over mountains with vibrant colors",
    "style": "realistic",
    "imageUrl": "https://storage.googleapis.com/...",
    "status": "completed",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Edit Image

**POST** `/images/edit`

Edit existing image with AI using text prompt.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "baseImage": "data:image/png;base64,iVBORw0KGgoAAAANS...",
  "baseImageUrl": "https://storage.googleapis.com/...",
  "originalPrompt": "A sunset over mountains",
  "editPrompt": "Add more clouds in the sky and make it more dramatic"
}
```

**Parameters:**
- `baseImage` (string, optional): Base64 encoded image
- `baseImageUrl` (string, optional): URL of base image
- `originalPrompt` (string, optional): Original image description
- `editPrompt` (string, required): Description of desired changes

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "user": "507f1f77bcf86cd799439010",
    "prompt": "Edit: Add more clouds in the sky and make it more dramatic",
    "imageUrl": "https://storage.googleapis.com/...",
    "status": "completed"
  }
}
```

---

### Get User Scenes

**GET** `/images/scenes`

Get all scenes/images created by authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `page` (number, optional): Page number (default: 1)
- `limit` (number, optional): Items per page (default: 20)
- `favorite` (boolean, optional): Filter favorites only

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "prompt": "A beautiful sunset",
      "imageUrl": "https://storage.googleapis.com/...",
      "isFavorite": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45
  }
}
```

---

### Get Single Scene

**GET** `/images/scenes/:id`

Get details of a specific scene.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "user": "507f1f77bcf86cd799439010",
    "prompt": "A beautiful sunset over mountains",
    "style": "realistic",
    "imageUrl": "https://storage.googleapis.com/...",
    "isFavorite": false,
    "status": "completed",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Delete Scene

**DELETE** `/images/scenes/:id`

Delete a scene/image.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Scene deleted successfully"
}
```

---

### Toggle Favorite

**PUT** `/images/scenes/:id/favorite`

Toggle favorite status of an image.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "isFavorite": true
  }
}
```

---

### Get Trending Images

**GET** `/images/trending`

Get trending/popular images (public endpoint).

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "prompt": "Cyberpunk city at night",
      "imageUrl": "https://storage.googleapis.com/...",
      "views": 1250,
      "likes": 340
    }
  ]
}
```

---

## Enhancement

### Enhance Image

**POST** `/enhance`

Enhance image quality using AI.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "baseImage": "data:image/png;base64,iVBORw0KGgoAAAANS...",
  "enhanceLevel": "high",
  "prompt": "Enhance to 4K quality with ultra sharp details"
}
```

**Parameters:**
- `baseImage` (string, required): Base64 encoded image
- `enhanceLevel` (string, optional): Enhancement level - `low`, `medium`, `high` (default: `medium`)
- `prompt` (string, optional): Custom enhancement instructions

**Enhancement Levels:**
- `low`: Slight quality improvement, sharpen slightly
- `medium`: Significant quality improvement, enhanced colors, better contrast
- `high`: 4K quality, ultra sharp, professional photography quality

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439013",
    "user": "507f1f77bcf86cd799439010",
    "prompt": "Enhance to 4K quality...",
    "imageUrl": "https://storage.googleapis.com/...",
    "status": "completed"
  }
}
```

---

## Background Removal

### Remove Background

**POST** `/remove-bg`

Remove background from image automatically.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "imageUrl": "https://storage.googleapis.com/...",
  "imageBase64": "data:image/png;base64,iVBORw0KGgoAAAANS..."
}
```

**Parameters:**
- `imageUrl` (string, optional): URL of image to process
- `imageBase64` (string, optional): Base64 encoded image

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "resultUrl": "https://storage.googleapis.com/...",
    "creditsRemaining": 450
  }
}
```

---

### Get API Credits (Admin)

**GET** `/remove-bg/credits`

Get remaining Remove.bg API credits (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "credits": {
    "total": 500,
    "remaining": 450,
    "used": 50
  }
}
```

---

## Graduation Photos

### Generate Graduation Photo

**POST** `/graduation`

Generate professional graduation photo.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "schoolId": "507f1f77bcf86cd799439020",
  "portraitImage": "data:image/png;base64,iVBORw0KGgoAAAANS...",
  "gownImage": "data:image/png;base64,iVBORw0KGgoAAAANS..."
}
```

**Parameters:**
- `schoolId` (string, required): ID of the school
- `portraitImage` (string, required): Base64 encoded portrait photo
- `gownImage` (string, required): Base64 encoded graduation gown photo

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439014",
    "user": "507f1f77bcf86cd799439010",
    "imageUrl": "https://storage.googleapis.com/...",
    "schoolId": "507f1f77bcf86cd799439020",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## Schools

### Get All Schools

**GET** `/schools`

Get list of all active schools (public endpoint).

**Query Parameters:**
- `page` (number, optional): Page number (default: 1)
- `limit` (number, optional): Items per page (default: 20)

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439020",
      "name": "Đại học Bách Khoa Hà Nội",
      "code": "HUST",
      "logoUrl": "https://storage.googleapis.com/...",
      "isActive": true
    }
  ]
}
```

---

### Get Single School

**GET** `/schools/:id`

Get details of a specific school.

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439020",
    "name": "Đại học Bách Khoa Hà Nội",
    "code": "HUST",
    "logoUrl": "https://storage.googleapis.com/...",
    "description": "Leading technical university in Vietnam",
    "isActive": true
  }
}
```

---

### Create School (Admin)

**POST** `/schools`

Create a new school (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "name": "Đại học Quốc Gia Hà Nội",
  "code": "VNU",
  "logoUrl": "https://storage.googleapis.com/...",
  "description": "Vietnam National University, Hanoi",
  "isActive": true
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439021",
    "name": "Đại học Quốc Gia Hà Nội",
    "code": "VNU",
    "logoUrl": "https://storage.googleapis.com/...",
    "isActive": true
  }
}
```

---

### Update School (Admin)

**PUT** `/schools/:id`

Update school information (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "name": "Updated School Name",
  "description": "Updated description"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439020",
    "name": "Updated School Name",
    "description": "Updated description"
  }
}
```

---

### Delete School (Admin)

**DELETE** `/schools/:id`

Delete a school (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "School deleted successfully"
}
```

---

### Toggle School Status (Admin)

**PUT** `/schools/:id/toggle`

Toggle school active/inactive status (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439020",
    "isActive": false
  }
}
```

---

## Hairstyle Prompts

### Get All Hairstyle Prompts

**GET** `/prompts/hairstyle`

Get list of all active hairstyle prompts (public endpoint).

**Query Parameters:**
- `page` (number, optional): Page number (default: 1)
- `limit` (number, optional): Items per page (default: 20)

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439030",
      "name": "Long Wavy Hair",
      "prompt": "Long flowing wavy hair with natural highlights",
      "thumbnailUrl": "https://storage.googleapis.com/...",
      "category": "long",
      "isActive": true
    }
  ]
}
```

---

### Get Single Hairstyle Prompt

**GET** `/prompts/hairstyle/:id`

Get details of a specific hairstyle prompt.

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439030",
    "name": "Long Wavy Hair",
    "prompt": "Long flowing wavy hair with natural highlights",
    "thumbnailUrl": "https://storage.googleapis.com/...",
    "category": "long",
    "description": "Beautiful long wavy hairstyle",
    "isActive": true
  }
}
```

---

### Create Hairstyle Prompt (Admin)

**POST** `/prompts/hairstyle`

Create a new hairstyle prompt (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "name": "Short Bob Cut",
  "prompt": "Short bob haircut with straight bangs",
  "thumbnailUrl": "https://storage.googleapis.com/...",
  "category": "short",
  "description": "Classic short bob hairstyle",
  "isActive": true
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439031",
    "name": "Short Bob Cut",
    "prompt": "Short bob haircut with straight bangs",
    "thumbnailUrl": "https://storage.googleapis.com/...",
    "category": "short",
    "isActive": true
  }
}
```

---

### Update Hairstyle Prompt (Admin)

**PUT** `/prompts/hairstyle/:id`

Update hairstyle prompt (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "name": "Updated Hairstyle Name",
  "prompt": "Updated prompt description"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439030",
    "name": "Updated Hairstyle Name",
    "prompt": "Updated prompt description"
  }
}
```

---

### Delete Hairstyle Prompt (Admin)

**DELETE** `/prompts/hairstyle/:id`

Delete a hairstyle prompt (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Hairstyle prompt deleted successfully"
}
```

---

### Toggle Hairstyle Prompt Status (Admin)

**PUT** `/prompts/hairstyle/:id/toggle`

Toggle hairstyle prompt active/inactive status (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439030",
    "isActive": false
  }
}
```

---

## Trending Images

### Get Trending Images

**GET** `/trending-images`

Get list of trending images (public endpoint).

**Query Parameters:**
- `page` (number, optional): Page number (default: 1)
- `limit` (number, optional): Items per page (default: 20)
- `category` (string, optional): Filter by category

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439040",
      "title": "Cyberpunk Style",
      "prompt": "Cyberpunk style portrait with neon lights",
      "thumbnailUrl": "https://storage.googleapis.com/...",
      "category": "cyberpunk",
      "views": 1250,
      "usageCount": 340,
      "isActive": true
    }
  ]
}
```

---

### Get Trending Stats

**GET** `/trending-images/stats`

Get trending images statistics (public endpoint).

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "totalImages": 150,
    "totalViews": 45000,
    "totalUsage": 12000,
    "topCategories": [
      { "category": "cyberpunk", "count": 45 },
      { "category": "anime", "count": 38 }
    ]
  }
}
```

---

### Get Popular Trending

**GET** `/trending-images/popular`

Get most popular trending images (public endpoint).

**Query Parameters:**
- `limit` (number, optional): Number of items (default: 10)

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439040",
      "title": "Cyberpunk Style",
      "thumbnailUrl": "https://storage.googleapis.com/...",
      "usageCount": 340,
      "views": 1250
    }
  ]
}
```

---

### Get Single Trending Image

**GET** `/trending-images/:id`

Get details of a specific trending image.

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439040",
    "title": "Cyberpunk Style",
    "prompt": "Cyberpunk style portrait with neon lights and futuristic elements",
    "thumbnailUrl": "https://storage.googleapis.com/...",
    "category": "cyberpunk",
    "description": "Create stunning cyberpunk style portraits",
    "views": 1250,
    "usageCount": 340,
    "isActive": true
  }
}
```

---

### Generate Trending Image

**POST** `/trending-images/generate`

Generate image using a trending style.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "trendingImageId": "507f1f77bcf86cd799439040",
  "userImage": "data:image/png;base64,iVBORw0KGgoAAAANS..."
}
```

**Parameters:**
- `trendingImageId` (string, required): ID of trending image style
- `userImage` (string, required): Base64 encoded user photo

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439015",
    "user": "507f1f77bcf86cd799439010",
    "imageUrl": "https://storage.googleapis.com/...",
    "trendingImageId": "507f1f77bcf86cd799439040",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Get All Trending Images (Admin)

**GET** `/trending-images/admin/all`

Get all trending images including inactive ones (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439040",
      "title": "Cyberpunk Style",
      "isActive": true,
      "views": 1250,
      "usageCount": 340
    }
  ]
}
```

---

### Create Trending Image (Admin)

**POST** `/trending-images`

Create a new trending image (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "title": "Anime Style Portrait",
  "prompt": "Anime style portrait with vibrant colors",
  "thumbnailUrl": "https://storage.googleapis.com/...",
  "category": "anime",
  "description": "Beautiful anime style portraits",
  "isActive": true
}
```

**Response:** `201 Created`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439041",
    "title": "Anime Style Portrait",
    "prompt": "Anime style portrait with vibrant colors",
    "thumbnailUrl": "https://storage.googleapis.com/...",
    "category": "anime",
    "isActive": true
  }
}
```

---

### Update Trending Image (Admin)

**PUT** `/trending-images/:id`

Update trending image (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Request Body:**
```json
{
  "title": "Updated Title",
  "prompt": "Updated prompt"
}
```

**Response:** `200 OK`
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439040",
    "title": "Updated Title",
    "prompt": "Updated prompt"
  }
}
```

---

### Delete Trending Image (Admin)

**DELETE** `/trending-images/:id`

Delete a trending image (Admin only).

**Headers:**
```
Authorization: Bearer <admin_token>
```

**Response:** `200 OK`
```json
{
  "success": true,
  "message": "Trending image deleted successfully"
}
```

---

## Error Handling

All API endpoints follow a consistent error response format.

### Error Response Format

```json
{
  "success": false,
  "message": "Error message description"
}
```

### Common HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| `200` | OK - Request successful |
| `201` | Created - Resource created successfully |
| `400` | Bad Request - Invalid request data |
| `401` | Unauthorized - Authentication required or failed |
| `403` | Forbidden - Insufficient permissions |
| `404` | Not Found - Resource not found |
| `500` | Internal Server Error - Server error |
| `503` | Service Unavailable - Database connection failed |

### Common Error Messages

**Authentication Errors:**
```json
{
  "success": false,
  "message": "Not authorized, token failed"
}
```

**Validation Errors:**
```json
{
  "success": false,
  "message": "Please provide all required fields"
}
```

**Permission Errors:**
```json
{
  "success": false,
  "message": "Not authorized as admin"
}
```

**Database Errors:**
```json
{
  "success": false,
  "message": "Database is not connected. Please check MongoDB connection."
}
```

---

## Rate Limiting

Currently, there is no rate limiting implemented. It is recommended to implement rate limiting in production environments.

**Recommended Implementation:**
- 100 requests per 15 minutes per IP for public endpoints
- 1000 requests per 15 minutes for authenticated users
- 50 image generation requests per day for free tier users

---

## Authentication Flow

### JWT Token Authentication

1. User registers or logs in via `/api/auth/register` or `/api/auth/login`
2. Server returns JWT token in response
3. Client stores token (localStorage/sessionStorage)
4. Client includes token in Authorization header for protected endpoints:
   ```
   Authorization: Bearer <token>
   ```
5. Server validates token and authenticates user
6. Token expires after 30 days

### OAuth Flow (Google/Facebook)

1. Client redirects to `/api/auth/google` or `/api/auth/facebook`
2. User authenticates with OAuth provider
3. Provider redirects to callback URL
4. Server creates/finds user and generates JWT token
5. Server redirects to client with token in query parameter
6. Client extracts and stores token

---

## Best Practices

### Image Upload

- **Base64 Encoding**: Images should be base64 encoded with data URI format
  ```
  data:image/png;base64,iVBORw0KGgoAAAANS...
  ```
- **File Size**: Keep images under 10MB for optimal performance
- **Format**: Supported formats: PNG, JPEG, WebP
- **Resolution**: Recommended 512x512 to 1024x1024 for best results

### Prompt Writing

- Be specific and descriptive
- Include details about style, lighting, colors, composition
- Use clear, concise language
- Examples:
  - Good: "Portrait of a woman with long wavy brown hair, soft natural lighting, professional photography, realistic style"
  - Bad: "woman hair"

### Error Handling

Always check the `success` field in responses:

```javascript
const response = await fetch('/api/images/generate', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});

const result = await response.json();

if (result.success) {
  // Handle success
  console.log(result.data);
} else {
  // Handle error
  console.error(result.message);
}
```

---

## Pagination

Endpoints that return lists support pagination with query parameters:

**Query Parameters:**
- `page` (number): Page number, starting from 1 (default: 1)
- `limit` (number): Items per page (default: 20, max: 100)

**Response Format:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

---

## API Client Example

### JavaScript/TypeScript

```javascript
class EternalPicAPI {
  constructor(baseURL = 'http://localhost:5000/api') {
    this.baseURL = baseURL;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      headers,
    });

    return response.json();
  }

  // Auth
  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async login(email, password) {
    const result = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (result.token) {
      this.setToken(result.token);
    }
    
    return result;
  }

  // Images
  async generateImage(prompt, style = 'realistic', outputType = 'normal') {
    return this.request('/images/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt, style, outputType }),
    });
  }

  async getUserScenes(page = 1, limit = 20) {
    return this.request(`/images/scenes?page=${page}&limit=${limit}`);
  }

  // Enhancement
  async enhanceImage(baseImage, enhanceLevel = 'medium') {
    return this.request('/enhance', {
      method: 'POST',
      body: JSON.stringify({ baseImage, enhanceLevel }),
    });
  }
}

// Usage
const api = new EternalPicAPI();

// Login
const loginResult = await api.login('user@example.com', 'password');
console.log('Logged in:', loginResult);

// Generate image
const imageResult = await api.generateImage(
  'A beautiful sunset over mountains',
  'realistic'
);
console.log('Generated:', imageResult);
```

---

## Changelog

### Version 1.0.0 (Current)

**Features:**
- User authentication (local + OAuth)
- Image generation with multiple styles
- 360° panoramic image generation
- Image editing with AI
- Image enhancement
- Background removal
- Graduation photo generation
- School management
- Hairstyle prompt management
- Trending images system
- User profile management
- Admin dashboard

---

## Support

For API support and questions:
- GitHub Issues: [Create an issue](https://github.com/Son1BeYew/eternal-pic-generator/issues)
- Documentation: [README.md](../README.md)
- Security Issues: See [SECURITY.md](../SECURITY.md)

---

**Last Updated:** January 2025  
**API Version:** 1.0.0
