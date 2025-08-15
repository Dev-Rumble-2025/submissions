import React from "react";
import { FaUsers, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import { Award } from "lucide-react";

const StatsSection = () => {

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003347] mb-4">
            Empowering Campus Learning
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Join our vibrant campus community where students collaborate, learn,
            and achieve together using smart learning tools.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Active Students */}
          <div className="text-center p-6 sm:p-8 bg-[#003347] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{ backgroundColor: "rgba(14, 95, 119, 0.2)" }}
            >
              <FaUsers className="text-2xl sm:text-3xl text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-200 font-semibold text-sm sm:text-base mb-1">
              Active Students
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              Collaborating and learning every day across campuses
            </div>
          </div>

          {/* Platform Engagement */}
          <div className="text-center p-6 sm:p-8 bg-[#003347] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{ backgroundColor: "rgba(14, 95, 119, 0.2)" }}
            >
              <FaLaptopCode className="text-2xl sm:text-3xl text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-200 font-semibold text-sm sm:text-base mb-1">
              Platform Engagement
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              Students actively participating in learning and collaboration
            </div>
          </div>

          {/* Learning Modules */}
          <div className="text-center p-6 sm:p-8 bg-[#003347] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{ backgroundColor: "rgba(14, 95, 119, 0.2)" }}
            >
              <FaChalkboardTeacher className="text-2xl sm:text-3xl text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-200 font-semibold text-sm sm:text-base mb-1">
              Learning Modules
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              Smart, adaptive courses curated for campus students
            </div>
          </div>

          {/* Campus Support */}
          <div className="text-center p-6 sm:p-8 bg-[#003347] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors"
              style={{ backgroundColor: "rgba(14, 95, 119, 0.2)" }}
            >
              <Award className="text-2xl sm:text-3xl text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-200 font-semibold text-sm sm:text-base mb-1">
              Campus Support
            </div>
            <div className="text-gray-300 text-xs sm:text-sm">
              Instant AI-powered help for students and educators
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
