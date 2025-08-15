import React from "react";

const Courses = ({ courses, selectedCourse, onSelectCourse }) => {
  return (
    <div className="w-64 bg-[#003347] border-r border-[#0E5F77] p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-white">Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="mb-2">
            <button
              onClick={() => onSelectCourse(course)}
              className={`w-full text-left px-3 py-2 rounded-lg ${
                selectedCourse?.id === course.id
                  ? "bg-[#0EC5DA] text-[#003347]"
                  : "hover:bg-[#0E5F77] hover:text-white text-white"
              }`}
            >
              {course.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
