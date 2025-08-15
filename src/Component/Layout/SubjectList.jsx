import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const SubjectList = () => {
  const { courseId } = useParams();
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${baseUrl}/courses/${courseId}/subjects/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch subjects");
        return res.json();
      })
      .then((data) => {
        setSubjects(data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [courseId]);

  if (loading) return <p className="p-4 text-center">Loading subjects...</p>;
  if (error) return <p className="p-4 text-center text-red-500">{error}</p>;
  if (subjects.length === 0)
    return <p className="p-4 text-center">No subjects found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Subjects</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 text-gray-900">
            <tr>
              <th className="px-6 py-3 text-left font-medium border-b border-gray-300">
                Subject
              </th>
              <th className="px-6 py-3 text-left font-medium border-b border-gray-300">
                Code
              </th>
              <th className="px-6 py-3 text-left font-medium border-b border-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, idx) => (
              <tr
                key={subject.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                  {subject.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-900">
                  {subject.code || "N/A"}
                </td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <Link
                    to={`/subjects/${subject.id}/pdf`}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 font-medium"
                  >
                    Open PDF
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

export default SubjectList;
