React Testimonial Management System
📌 Overview

A testimonial management system built with React, Vite, Tailwind, Express, and File-based DB.
Users can submit testimonials, view approved ones, and check full details.
Admins can log in, review submissions, approve/reject/delete testimonials, and manage the system.

🚀 Tech Stack
Frontend

⚡ React + Vite + Tailwind for fast, responsive UI

📍 React Router DOM for navigation

🌐 Axios for API calls

🧩 Reusable Components → Navbar, TestimonialCard

🛠️ utils/api.js → central API handling

Backend

🖥️ Express.js server

📂 db.json → dummy users & testimonials

🔄 fs module → file persistence (no ORM/DB used)

🔑 API Routes:

Login (static admin / user auth)

Submit testimonial (POST → defaults to pending)

Fetch approved testimonials (GET)

Fetch by ID (GET /testimonial/:id)

Admin: Get all testimonials

Update testimonial (PUT/PATCH → approve/reject)

Delete testimonial (DELETE)

🔐 Authentication

✅ One Login Page → shared by users & admin

✅ Credentials → Name, Email, Password

✅ Default Admin Creds → admin / admin@gmail.com / admin123

✅ Role-based Redirect

User → /home

Admin → /admin

👤 User Features

✅ View approved testimonials → /home shows only approved ones

✅ Add testimonial → “+ Add Testimonial” → /submit form

✅ Submit testimonial → defaults to Pending status

✅ View testimonial details → /testimonial/:id shows full info

🛠️ Admin Features

✅ Admin Dashboard → /admin lists all testimonials

✅ Approve / Reject / Delete → buttons update backend state

✅ View by status → Pending / Approved / Rejected testimonials visible


🧑‍💻 Dummy Users (Credentials)
🔑 Admin

Name: admin

Email: admin@gmail.com

Password: admin123

Role: admin

👤 User 1

Name: user

Email: user@gmail.com

Password: user123

Role: user

👤 User 2

Name: alice

Email: alice@gmail.com

Password: alice123

Role: user

👤 User 3

Name: mary

Email: mary@gmail.com

Password: mary123

Role: user
