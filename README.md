# Learn-z 🚀

Learn-z is a next-generation, Gen-Z-focused learning platform that combines **fun, interactivity, and personalization** to make education more engaging and effective. Built in just **12 hours** of intense collaboration, this project showcases what can be achieved with strong teamwork and dedication.

---

## 🌟 Features

- 🎯 **Interactive Lessons** – Short, engaging modules designed for modern learners.  
- 🤖 **AI-Powered Learning Paths** – Personalized recommendations for each student’s journey.  
- 🚀 **Future-Ready Skills** – From coding to creative thinking, preparing students for tomorrow.  
- 💬 **Real-Time Communication** – Chat, connect, and collaborate with peers and mentors.  
- 📚 **Course Management** – Easily browse and enroll in subjects of your choice.  

---  

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion  
- **Backend**: Django / Node.js (depending on deployment)  
- **Database**: PostgreSQL / SQLite  
- **Other Tools**: Axios, Lucide Icons, Remark, Prism, Chart.js  

---

## 📸 Screenshots

> *(Add screenshots of your landing page, dashboard, and chat UI here)*

---

## 📂 Project Structure
Team-MalangCode/
│
├── Learn_z_backend/        # Django backend folder
│   ├── manage.py            # Django root manage file
│   ├── requirements.txt     # Python dependencies
│   ├── Learn_z_backend/     # Main Django project folder (settings, urls, wsgi, asgi)
│   ├── app1/                # Example Django app(s)
│   ├── app2/
│   └── ...
│
└── Learn_z_frontend/       # Next.js frontend folder
    ├── package.json         # Node dependencies
    ├── README.md            # Frontend readme
    ├── public/              # Static files
    ├── pages/               # Next.js pages
    ├── components/          # Reusable components
    ├── styles/              # CSS/Tailwind files
    └── ...

🚀 Getting Started
1️⃣ Backend Setup (Django)

Navigate to the backend folder:

cd Learn_z_backend


Create and activate a virtual environment:

python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate


Install dependencies:

pip install -r requirements.txt


Apply migrations:

python manage.py migrate


Start the backend server:

python manage.py runserver


✅ Backend will be available at: http://127.0.0.1:8000/

2️⃣ Frontend Setup (Next.js)

Open a new terminal (keep backend running)
Navigate to the frontend folder:

cd Learn_z_frontend


Install dependencies:

npm install


Start the frontend development server:

npm run dev


✅ Frontend will be available at: http://localhost:3000/

📝 Notes

Ensure backend is running before starting the frontend to avoid API errors.

If ports are already in use:

Backend: python manage.py runserver 8001

Frontend: npm run dev -- -p 3001

Configure API URLs in .env.local inside Learn_z_frontend to match backend.

👥 Team MalangCode

1. Mohammad Rahish Shekh

2. Sudin Bhattarai

3. Sangam Singh Dhami

4. Bibek Adhikari

📜 Declaration

We, Team MalangCode, hereby declare that this project is the result of our original work.
It was developed with dedication and teamwork within a short but intense period of 12 hours.
We faced challenges but overcame them through collaboration, creativity, and persistence. 💪