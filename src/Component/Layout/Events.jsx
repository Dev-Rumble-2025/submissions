import React from "react";
import { Calendar, Users, Award } from "lucide-react";

const eventsDetails = [
  {
    icon: Calendar,
    title: "Campus Workshops",
    description:
      "Participate in hands-on workshops covering topics from AI, coding, and smart learning strategies tailored for students.",
  },
  {
    icon: Users,
    title: "Collaborative Hackathons",
    description:
      "Join team-based challenges to solve real-world problems, enhance skills, and build connections with peers.",
  },
  {
    icon: Award,
    title: "Competitions & Recognition",
    description:
      "Take part in contests and earn awards for your achievements, showcasing your talent across the campus community.",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#003347] mb-4">
              Upcoming Campus Events
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Stay engaged with the latest workshops, hackathons, and collaborative events on campus.
            </p>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {eventsDetails.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-[#003347] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full mb-5"
                  style={{ backgroundColor: "rgba(117, 230, 218, 0.2)" }}
                >
                  {React.createElement(item.icon, {
                    className: "w-8 h-8",
                    style: { color: "#75E6DA" },
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
