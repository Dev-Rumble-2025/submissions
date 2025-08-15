import React from "react";
import {
  BookOpenIcon,
  SparklesIcon,
  TrendingUpIcon,
  GraduationCap,
  ClockIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Collaborative Learning",
    description:
      "Connect with peers, share ideas, and solve problems together in real time.",
    icon: BookOpenIcon,
  },
  {
    title: "Smart Campus Assistant",
    description:
      "AI helps you discover relevant courses, projects, and resources tailored to your needs.",
    icon: SparklesIcon,
  },
  {
    title: "Progress & Analytics",
    description:
      "Track your learning journey and participation with detailed insights.",
    icon: TrendingUpIcon,
  },
  {
    title: "Wide Exam & Course Coverage",
    description:
      "Supports school, college, and professional courses in a single collaborative platform.",
    icon: GraduationCap,
  },
  {
    title: "Instant Notifications",
    description:
      "Receive real-time updates on assignments, events, and campus activities.",
    icon: ClockIcon,
  },
  {
    title: "Clean & Modern Interface",
    description:
      "User-friendly design focused on collaboration, clarity, and productivity.",
    icon: LayoutDashboardIcon,
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#003347] mb-4">
            Platform Features
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need for smart learning, collaboration, and campus
            engagement — all in one platform.
          </p>
        </div>

        <div className="relative">
          {/*  Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#003347]" />

          <div className="space-y-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center w-full ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  {/* Connector Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-[#003347] rounded-full shadow-lg z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 px-6 ${
                      isLeft ? "text-right md:pr-12" : "text-left md:pl-12"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-[#003347] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
