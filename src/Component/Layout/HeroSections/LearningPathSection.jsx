import React from "react";
import { FaUsers, FaChartLine, FaLightbulb } from "react-icons/fa";
import { Target } from "lucide-react";
import Button from "../../UI/Button";

const LearningPathSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Explore Your Learning Paths
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Whether you’re starting out or aiming for advanced skills, follow a
            path that fits your campus journey and collaborative goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Collaborative Learning */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Collaborative Learning
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Start by connecting with peers, sharing ideas, and
                  participating in guided projects and group activities.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => console.log("Navigate to join")}
                >
                  <FaUsers className="inline mr-2 text-slate-900" />
                  Join Community
                </Button>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaLightbulb className="text-2xl sm:text-3xl text-slate-900" />
              </div>
            </div>
          </div>

          {/* Skill Mastery & Challenges */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Skill Mastery & Challenges
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Advance your skills with complex projects, campus
                  competitions, and earn recognition for your achievements.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => console.log("Navigate to challenge")}
                >
                  <Target className="inline mr-2 text-slate-900" />
                  Take Challenge
                </Button>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaChartLine className="text-2xl sm:text-3xl text-slate-900" />
              </div>
            </div>
          </div>

          {/* Independent Learning (Added third card) */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Independent Learning
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Learn at your own pace with curated resources, AI-assisted
                  quizzes, and instant feedback to track your growth.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => console.log("Navigate to learn")}
                >
                  <FaLightbulb className="inline mr-2 text-slate-900" />
                  Start Learning
                </Button>
              </div>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-purple-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaLightbulb className="text-2xl sm:text-3xl text-slate-900" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;
