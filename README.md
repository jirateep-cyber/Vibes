# Buddy Review Full-Stack

Production-ready starter for Buddy Review Creator Vibes, Campaign Hub, Buddy Profile, blog, dashboard, admin, contact form, JWT auth, Express REST API, Prisma, PostgreSQL, and Docker.

## Local Setup

```bash
cp .env.example .env
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

Frontend: http://localhost:3000  
Backend: http://localhost:4000/api/health

## Docker

```bash
docker compose up --build
```

## Demo Login

Admin: `admin@buddyreview.com` / `password123`  
Creator: `creator@buddyreview.com` / `password123`
