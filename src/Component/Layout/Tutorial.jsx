import React from "react";

const Tutorial = () => {
  const courses = [
    {
      courseName: "Python",
      subject: "Programming",
      tutor: "Mr. Hari Bahadur",
      schedule: "Mon & Wed 10:00 AM - 11:30 AM",
    },
    {
      courseName: "Mathematics",
      subject: "Algebra & Calculus",
      tutor: "Mrs. Sita Shrestha",
      schedule: "Tue & Thu 08:00 AM - 09:30 AM",
    },
    {
      courseName: "Physics",
      subject: "Mechanics",
      tutor: "Mr. Ramesh Thapa",
      schedule: "Mon, Wed, Fri 01:00 PM - 02:00 PM",
    },
    {
      courseName: "English",
      subject: "Grammar & Literature",
      tutor: "Ms. Anjali Gurung",
      schedule: "Tue & Thu 11:00 AM - 12:30 PM",
    },
    {
      courseName: "Biology",
      subject: "Human Anatomy",
      tutor: "Dr. Binod Karki",
      schedule: "Wed & Fri 09:00 AM - 10:30 AM",
    },
    {
      courseName: "Nepali",
      subject: "Literature & Writing",
      tutor: "Mrs. Kamala Rana",
      schedule: "Mon & Thu 02:00 PM - 03:30 PM",
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-[#003347] mb-8 text-center">
        Tutorials & Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-[#002A3B] shadow-lg rounded-xl p-6 border border-[#0E5F77] hover:shadow-2xl transition-all duration-300 text-white"
          >
            <h2 className="text-xl font-bold mb-2">{course.courseName}</h2>
            <p className="mb-1">
              <span className="font-semibold">Subject:</span> {course.subject}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Tutor:</span> {course.tutor}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Schedule:</span> {course.schedule}
            </p>
            <button className="mt-3 w-30 bg-[#0EC5DA] text-[#003347] font-semibold py-2 rounded-2xl hover:bg-[#0DAFCC] transition-colors">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
