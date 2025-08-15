import React from "react";
import { FaRobot, FaBook, FaChalkboardTeacher, FaAward } from "react-icons/fa";

const whyChooseUsDetails = [
  {
    icon: FaRobot,
    title: "AI-Powered Learning",
    description:
      "Smart algorithms generate personalized quizzes and learning paths, adapting to your progress.",
  },
  {
    icon: FaBook,
    title: "Comprehensive Materials",
    description:
      "Access curated study resources, notes, and practice exercises across multiple subjects and exams.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Test & Course Coverage",
    description:
      "Prepare for school, college, competitive exams, and campus-level tests all in one platform.",
  },
  {
    icon: FaAward,
    title: "Track & Achieve",
    description:
      "Monitor performance, track progress, and earn recognitions for your achievements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#003347] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
            Everything you need for smart learning, AI-powered tests, and continuous skill improvement.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-[#0EC5DA]/40 rounded-full" />

          {whyChooseUsDetails.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex w-full justify-${isLeft ? "start" : "end"} items-center mb-16`}
              >
                {isLeft && (
                  <>
                    <div className="flex items-center space-x-6">
                      <div className="bg-[#0EC5DA] text-white p-5 rounded-full shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xs text-left">
                        <h3 className="text-xl font-bold text-[#003347] mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
                {!isLeft && (
                  <>
                    <div className="flex items-center space-x-6">
                      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xs text-right">
                        <h3 className="text-xl font-bold text-[#003347] mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                      <div className="bg-[#0EC5DA] text-white p-5 rounded-full shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
