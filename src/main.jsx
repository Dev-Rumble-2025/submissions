import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./Pages/HomePage";
import Signup from "./Component/Auth/Signup.jsx";
import Login from "./Component/Auth/Login.jsx";
import FeaturePage from "./Pages/FeaturePage.jsx";
import Auth from "./Auth.jsx";
import Dashboard from "./Component/Layout/Dashboard.jsx";
import ExamInput from "./Component/Layout/ExamInput.jsx";
import Quiz from "./Component/Layout/Quiz.jsx";
import Tutorial from "./Component/Layout/Tutorial.jsx";
import Profile from "./Component/Layout/Profile.jsx";
import Courses from "./Component/Layout/Courses.jsx";
import Results from "./Component/Layout/Results.jsx";
import Support from "./Component/Layout/Support.jsx";
import Settings from "./Component/Layout/Settings.jsx";

import LearningPage from "./Pages/LearningPage.jsx";
import EventsPage from "./Pages/EventsPage.jsx";
import Notice from "./Component/Layout/Notice.jsx";
import Timetable from "./Component/Layout/Timetable.jsx";
import Tasks from "./Component/Layout/Tasks.jsx";
import SubjectList from "./Component/Layout/SubjectList.jsx";
import PdfViewer from "./Component/Layout/PdfViewer.jsx";
import CourseList from "./Component/Layout/CourseList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "events", element: <EventsPage /> },
      { path: "features", element: <FeaturePage /> },
      { path: "learning", element: <LearningPage /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },

      {
        path: "",
        element: <Auth />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "exam", element: <ExamInput /> },
          { path: "quiz", element: <Quiz /> },
          { path: "tutorial", element: <Tutorial /> },
          { path: "profile", element: <Profile /> },
          { path: "courses", element: <CourseList /> },
          { path: "courses/:courseId/subjects", element: <SubjectList /> },
          { path: "subjects/:subjectId/pdfs", element: <PdfViewer /> },
          { path: "results", element: <Results /> },
          { path: "support", element: <Support /> },
          { path: "settings", element: <Settings /> },
          { path: "timetable", element: <Timetable /> },
          { path: "notice", element: <Notice /> },
          { path: "tasks", element: <Tasks /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
