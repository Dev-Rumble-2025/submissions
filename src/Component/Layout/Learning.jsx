import React from "react";
import {
  BookOpen,
  Cpu,
  Code,
  BarChart2,
  Users,
  Award,
} from "lucide-react";

const learningFeatures = [
  {
    icon: BookOpen,
    title: "AI & Machine Learning",
    description: "Learn AI fundamentals with hands-on projects and exercises.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "HTML, CSS, JavaScript, React, and interactive mini-projects.",
  },
  {
    icon: Cpu,
    title: "Data Science & Analytics",
    description: "Analyze datasets, visualize results, and extract insights.",
  },
  {
    icon: Users,
    title: "Campus Collaboration",
    description: "Work on group projects, hackathons, and peer challenges.",
  },
  {
    icon: Award,
    title: "Competitive Exam Prep",
    description: "Mock tests and analytics for school, college, and professional exams.",
  },
  {
    icon: BarChart2,
    title: "Smart Study Tools",
    description: "AI quizzes, flashcards, and progress tracking for effective learning.",
  },
];

const Learning = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#003347] mb-4">
          Explore SmartLearn
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg sm:text-xl">
          Your all-in-one platform for AI-powered learning, collaboration, and skill-building.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {learningFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-[#003347] rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-4 transition-colors group-hover:bg-white">
                <Icon className="w-8 h-8 text-white group-hover:text-[#003347] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <button className="bg-white text-[#003347] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base">
                Start Learning
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Learning;
