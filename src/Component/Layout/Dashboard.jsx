import React from "react";
import { BookOpen, Clock, BarChart2, Star, Gift } from "lucide-react";

const Dashboard = () => {
  const user = localStorage.getItem("username") || "Student";

  const upcomingTasks = [
    { title: "Math Assignment 3", due: "2025-08-20" },
    { title: "Physics Quiz", due: "2025-08-21" },
    { title: "AI Project Submission", due: "2025-08-25" },
  ];

  const recentAchievements = [
    { title: "Completed Calculus Module", points: 50 },
    { title: "Scored 95% in History Quiz", points: 20 },
    { title: "Finished Python Tutorial", points: 30 },
  ];

  const stats = [
    { label: "Courses Completed", value: 5, icon: <BookOpen className="w-8 h-8 text-[#0EC5DA]" /> },
    { label: "Average Score", value: "88%", icon: <BarChart2 className="w-8 h-8 text-[#0EC5DA]" /> },
    { label: "Ongoing Tasks", value: 3, icon: <Clock className="w-8 h-8 text-[#0EC5DA]" /> },
    { label: "Badges Earned", value: 7, icon: <Star className="w-8 h-8 text-[#0EC5DA]" /> },
  ];

  return (
    <main className="w-full min-h-screen bg-white p-6 lg:p-12 text-[#003347]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, {user}!
        </h1>
        <p className="max-w-2xl mx-auto">
          Check your progress, upcoming tasks, and achievements all in one place.
        </p>
        <div className="w-24 h-1 bg-[#0EC5DA] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="bg-[#002A3B] rounded-xl p-6 flex flex-col items-center justify-center border border-[#0E5F77] text-white"
          >
            <div className="p-3 rounded-full bg-[#0E5F77] mb-4">{icon}</div>
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className="mt-1">{label}</p>
          </div>
        ))}
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Tasks</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingTasks.map((task, idx) => (
            <li key={idx} className="bg-[#002A3B] border border-[#0E5F77] rounded-xl p-5 shadow text-white">
              <h3 className="font-semibold mb-1">{task.title}</h3>
              <p className="text-gray-300 text-sm">
                Due: {new Date(task.due).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Achievements</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentAchievements.map((ach, idx) => (
            <li
              key={idx}
              className="bg-[#002A3B] border border-[#0E5F77] rounded-xl p-5 shadow flex items-center justify-between text-white"
            >
              <div>
                <h3 className="font-semibold">{ach.title}</h3>
                <p className="text-gray-300 text-sm">{ach.points} points</p>
              </div>
              <Gift className="w-6 h-6 text-[#0EC5DA]" />
            </li>
          ))}
        </ul>
      </section>

     
    </main>
  );
};

export default Dashboard;
