# ⚡ AI SaaS Platform with Subscriptions – PERN Stack

A full-featured AI SaaS Application built using the PERN stack (PostgreSQL, Express, React, Node.js) that offers AI-powered utilities such as article and image generation, background removal, resume analysis, and more – with user authentication, subscription billing, and Cloudinary image processing.

---

## 🚀 Live Features

- **✅ User Authentication & Profiles** – via [Clerk.dev](https://clerk.dev)
- **💳 Premium Subscription Billing** – access premium AI tools only with a subscription
- **🌐 Serverless PostgreSQL** – using [Neon.tech](https://neon.tech)
- **☁️ Image Storage & Processing** – with [Cloudinary](https://cloudinary.com)

---

## 🧠 Built-in AI Tools

| Feature                  | Description                                                                                   |
|--------------------------|-----------------------------------------------------------------------------------------------|
| ✍️ Article Generator     | Generate rich articles based on topic + desired length                                        |
| 📝 Blog Title Generator  | Suggest catchy blog titles using provided keyword & category                                  |
| 🎨 Image Generator       | Generate realistic or creative images from a text prompt using ClipDrop API                   |
| 🧼 Background Remover    | Upload an image to get a transparent background version via Cloudinary AI                     |
| 🧽 Image Object Remover  | Upload an image and specify an object to remove using Cloudinary AI effects                   |
| 📄 Resume Analyzer       | Upload your resume (PDF) and receive detailed AI feedback and suggestions                     |

---

## 🛠️ Tech Stack

- **Frontend:** React.js + TailwindCSS
- **Backend:** Express.js + Node.js
- **Database:** PostgreSQL (hosted on Neon)
- **Auth:** Clerk.dev
- **File Uploads:** Multer
- **Cloud Storage:** Cloudinary
- **AI APIs:** Gemini (Google), ClipDrop
- **Deployment:** Vercel / Render / Railway

---

## 🧰 Project Setup

### 🔐 Prerequisites

- Node.js >= 18
- PostgreSQL (used Neon.tech for serverless DB)
- Clerk account (for auth)
- Cloudinary account (for image hosting)
- API Keys:
    - `GEMINI_API_KEY` (Google AI)
    - `CLIPDROP_API_KEY`
    - `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
    - `CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`

---

### 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/ai-saas-pern.git

cd ai-saas-pern

# Backend
cd server
npm install
cp .env.example .env
# Add your credentials to .env

# Frontend
cd ../client
npm install
```

---

### 🔧 Environment Variables

Sample `.env` for the backend:

```env
DATABASE_URL=your_postgresql_url
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 🚦 Run the App Locally

```bash
# In one terminal
cd server
nodemon index.js

# In another terminal
cd client
npm run dev
```

- Frontend will run on: [http://localhost:5173](http://localhost:5173)
- Backend API will run on: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Screens / Demos

- 🧠 Article & Blog Generator UI
- 🎨 Upload and preview AI-generated images
- ✂️ One-click background or object removal
- 📄 Upload and analyze resumes

_Add your screenshots or demo video links here (optional)_

---

## 📤 Deployment

- **Frontend:** Vercel
- **Backend:** Vercel
- **PostgreSQL:** Neon.tech

---

## 📁 Folder Structure Overview

```bash
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── configs/
│   ├── middleware/
│   └── index.js
│
├── client/
│   ├── components/
│   ├── pages/
│   └── App.jsx
```

---

## 💡 Future Enhancements

- Add usage analytics dashboard
- Provide multiple image style options
- Add blog publishing and share features
- Resume score + job suggestions

---

## 📜 License

MIT License © 2025 Arsh