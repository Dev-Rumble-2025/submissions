import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import StudentEnrollment from './pages/StudentEnrollment';
import ChatBox from './pages/ChatBox';
import VideoCall from './pages/VideoCall';
import Calendar from './pages/Calendar';
import Library from './pages/Library';
import Attendance from './pages/Attendance';
import EventPublisher from './pages/EventPublisher';
import Email from './pages/Email';
import CollegeMap from './pages/CollegeMap';
import Quiz from './pages/Quiz';
import IDCard from './pages/IDCard';

function App() {
  return (
    <UserProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/enrollment" element={<StudentEnrollment />} />
            <Route path="/chat" element={<ChatBox />} />
            <Route path="/video-call" element={<VideoCall />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/library" element={<Library />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/events" element={<EventPublisher />} />
            <Route path="/email" element={<Email />} />
            <Route path="/map" element={<CollegeMap />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/id-card" element={<IDCard />} />
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;