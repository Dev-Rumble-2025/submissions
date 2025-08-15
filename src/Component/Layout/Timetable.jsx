import React from "react";

const Timetable = () => {
  // Sample static timetable data
  const timetable = [
    {
      day: "Monday",
      slots: [
        { time: "08:00 - 09:00", subject: "Mathematics" },
        { time: "09:00 - 10:00", subject: "Physics" },
        { time: "10:15 - 11:15", subject: "English" },
        { time: "11:30 - 12:30", subject: "Computer Science" },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { time: "08:00 - 09:00", subject: "Biology" },
        { time: "09:00 - 10:00", subject: "Chemistry" },
        { time: "10:15 - 11:15", subject: "History" },
        { time: "11:30 - 12:30", subject: "Art" },
      ],
    },
    {
      day: "Wednesday",
      slots: [
        { time: "08:00 - 09:00", subject: "Mathematics" },
        { time: "09:00 - 10:00", subject: "Physics" },
        { time: "10:15 - 11:15", subject: "English" },
        { time: "11:30 - 12:30", subject: "Computer Science" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { time: "08:00 - 09:00", subject: "Biology" },
        { time: "09:00 - 10:00", subject: "Chemistry" },
        { time: "10:15 - 11:15", subject: "History" },
        { time: "11:30 - 12:30", subject: "Physical Education" },
      ],
    },
    {
      day: "Friday",
      slots: [
        { time: "08:00 - 09:00", subject: "Mathematics" },
        { time: "09:00 - 10:00", subject: "Physics" },
        { time: "10:15 - 11:15", subject: "English" },
        { time: "11:30 - 12:30", subject: "Computer Science" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Weekly Timetable
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-[#003347] text-white">
            <tr>
              <th className="p-4 text-left">Day / Time</th>
              <th className="p-4 text-left">08:00 - 09:00</th>
              <th className="p-4 text-left">09:00 - 10:00</th>
              <th className="p-4 text-left">10:15 - 11:15</th>
              <th className="p-4 text-left">11:30 - 12:30</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((day) => (
              <tr key={day.day} className="bg-white border-b last:border-b-0 hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-900">{day.day}</td>
                {day.slots.map((slot, idx) => (
                  <td key={idx} className="p-4 text-gray-700">
                    {slot.subject}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;