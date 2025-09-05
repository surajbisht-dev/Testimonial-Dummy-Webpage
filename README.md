🌟 React Testimonial Management System

Live Demo: https://testimonial-dummy-webpage-2.onrender.com

A simple Testimonial Management System built with React, Vite, Tailwind, and Express using a file-based database. Users can submit testimonials, view approved ones, and check full details. Admins can review submissions, approve/reject/delete testimonials, and manage the system.

🚀 Tech Stack

Frontend:

React + Vite + Tailwind → fast, responsive UI

React Router DOM → navigation

Axios → API calls

Reusable Components → Navbar, TestimonialCard

Utils → utils/api.js for centralized API handling

Backend:

Express.js server

File-based DB → db.json (no real database/ORM)

fs module → data persistence

API Routes:

Login (static admin/user auth)

Submit testimonial (POST → defaults to pending)

Fetch approved testimonials (GET)

Fetch testimonial by ID (GET /testimonial/:id)

Admin: Get all testimonials

Update testimonial (PUT/PATCH → approve/reject)

Delete testimonial (DELETE)

🔐 Authentication

One Login Page → shared by users & admin

Credentials → Name, Email, Password

Default Admin Credentials:

Name: admin

Email: admin@gmail.com

Password: admin123

Role-based redirect:

User → /home

Admin → /admin

👤 User Features

View approved testimonials on /home

Add testimonial via “+ Add Testimonial” → /submit form

Submitted testimonials default to Pending

View full details → /testimonial/:id

🛠️ Admin Features

Admin Dashboard → /admin lists all testimonials

Approve / Reject / Delete testimonials

Filter by status → Pending / Approved / Rejected

🧑‍💻 Dummy Users (Credentials)

Admin:

Name: admin

Email: admin@gmail.com

Password: admin123

User 1:

Name: user

Email: user@gmail.com

Password: user123

User 2:

Name: alice

Email: alice@gmail.com

Password: alice123

User 3:

Name: mary

Email: mary@gmail.com

Password: mary123

Live link - https://testimonial-dummy-webpage-2.onrender.com
