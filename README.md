# T VARTHA - Full Stack News Posting Platform

## Tech Stack

- Frontend: React + TypeScript + Axios + React Router
- Backend: Node.js + Express + TypeScript
- Database: MongoDB + Mongoose
- Image Upload: Cloudinary via `multer-storage-cloudinary`

## Project Structure

```
news/
├── client/
└── server/
```

## 1) Backend Setup

```bash
cd server
npm install
```

### Backend `.env`

Create/update `server/.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Run Backend

```bash
npm run dev
```

API base: `http://localhost:5000/api`

## 2) Frontend Setup

```bash
cd ../client
npm install
```

### Run Frontend

```bash
npm run dev
```

Frontend runs on Vite default: `http://localhost:5173`

## 3) API Endpoints

### `POST /api/news`

- Content-Type: `multipart/form-data`
- Fields:
  - `title` (text)
  - `description` (text)
  - `image` (file)

Image is uploaded to Cloudinary folder `tvartha_news`, and saved in MongoDB as `imageUrl` using:

```ts
const news = await News.create({
  title,
  description,
  imageUrl
});
```

### `GET /api/news`

Returns all news sorted by latest first:

```ts
News.find().sort({ createdAt: -1 })
```

## 4) Cloudinary Setup Steps

1. Create account at Cloudinary.
2. Open dashboard and copy:
   - Cloud name
   - API key
   - API secret
3. Paste them in `server/.env`.
4. Ensure backend is restarted after updating env values.

## 5) MongoDB Setup Steps

1. Create MongoDB Atlas cluster (or local MongoDB).
2. Create database user.
3. Add network access IP.
4. Get connection string and set `MONGO_URI` in `server/.env`.
5. Restart backend.

## 6) Production Notes

- Uses strict TypeScript configuration in backend and frontend.
- Uses centralized Express error middleware.
- Uses CORS-enabled API.
- Uses Mongoose timestamps (`createdAt`, `updatedAt`) automatically.

## 7) Frontend Routing (React Router)

- Routes available:
  - `/` → Home
  - `/about` → About
  - `/contact` → Contact Us
  - `/privacy` → Privacy Policy
  - `/terms` → Terms and Conditions
- These routes are handled on the client side using `BrowserRouter` and nested layout routes.

## 8) Deployment Routing Note (Important)

For production hosting, configure your server/platform to rewrite all frontend routes to `index.html`.
This is required so direct access and refresh on paths like `/terms` or `/privacy` loads the app correctly.

Examples:

- Nginx: use `try_files $uri /index.html;`
- Netlify: add `_redirects` rule `/* /index.html 200`
- Vercel: add rewrite rule to map all routes to `/index.html`
