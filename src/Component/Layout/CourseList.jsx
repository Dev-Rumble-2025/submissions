import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(baseUrl + "/courses/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4 text-center">Loading courses...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6"> Courses</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-900 text-gray-100">
            <tr>
              <th className="px-6 py-3 text-left font-medium border-b border-gray-300">
                Title
              </th>
              <th className="px-6 py-3 text-left font-medium border-b border-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, idx) => (
              <tr key={course.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">{course.name}</td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <Link
                    to={`/courses/${course.id}/subjects`}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium"
                  >
                    Go To Module/Subject
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseList;