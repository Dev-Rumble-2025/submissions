To run this Note Bazar app:
npm install
pip install -r "requirements.txt"
python app.py



Deliver a visually breathtaking platform with flawless responsiveness, smooth animations, and a delightful user experience that works seamlessly across desktop, tablet, and mobile. It must feel premium, load fast, and wow users at first glance.

Core Features & Functionality
1. Note Management System

Upload notes (PDF/DOC) with: title, subject, description, price

Free notes → Instant download

Paid notes → Purchase via coins or Rs. 100 payment

User dashboard → Manage uploaded/purchased notes with analytics (views, downloads, earnings)

2. Discussion Forum

Users post questions/doubts with category tagging

Community answers with upvotes, ratings, and comments

Reward coins for helpful answers to encourage engagement

Real-time interactive collaboration (AJAX/JS updates without page reload)

3. User System

Secure registration/login with password hashing

Profile management → earnings, coin balance, purchase history

Coin-based economy integrated with real payment gateway (Rs. 100 = fixed coin pack)

Technical Stack

Backend: Flask + SQLAlchemy ORM

Database: SQLite (optimized schema)

Frontend: HTML5, CSS3, JavaScript (no frameworks, pure handcrafted code)

File Storage: Local with strong validation & security

Payment Integration: Rs. 100 fixed package purchase for coins

Database Schema

Users: id, username, email, password_hash, coins, created_at
Notes: id, title, subject, description, filename, price, uploader_id, downloads, created_at
Purchases: id, user_id, note_id, purchased_at
Forum_Questions: id, user_id, title, content, category, created_at
Forum_Answers: id, question_id, user_id, content, rating, created_at
Comments: id, target_type, target_id, user_id, content, created_at

UI/UX Requirements – This Must Leave Judges Speechless

Color Scheme: Professional, futuristic gradient-based palette (dark + light modes)

Design Language: Minimalistic, high-contrast, bold typography, elegant whitespace usage

Animations: Smooth hover effects, button micro-interactions, loading indicators, page transitions

Responsiveness: Perfect scaling for desktop, tablet, and mobile

Interactivity: Instant feedback on actions (likes, comments, purchases) via AJAX without reloads

Icons & Assets: Clean SVGs, modern iconography

Accessibility: Fully keyboard navigable, high contrast, readable fonts

Performance & Security

Fast loading with minimal blocking scripts

SQL queries optimized for speed

Secure file uploads (extension + MIME check, size limit)

Prevent XSS, CSRF, and SQL injection

Session-based authentication

Deliverables

Complete Flask Application with all functionality

HTML Templates with futuristic CSS styling and responsive layout

JavaScript for dynamic elements and AJAX-based updates

SQLite database with sample seed data

Fully working file upload/download system with security

Payment gateway integration for coins purchase

Forum system with rating and commenting

Clean folder structure + maintainable, well-documented code