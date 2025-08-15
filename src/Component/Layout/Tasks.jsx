import React, { useEffect, useState } from "react";
import { FileText, CheckCircle, UploadCloud } from "lucide-react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [files, setFiles] = useState({});
  const [submittingIds, setSubmittingIds] = useState([]);
  const [submittedTasks, setSubmittedTasks] = useState([]);
  const [expandedIds, setExpandedIds] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${baseUrl}tasks/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [token]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((nid) => nid !== id) : [...prev, id]
    );
  };

  const handleFileChange = (taskId, file) => {
    setFiles((prev) => ({ ...prev, [taskId]: file }));
  };

  const handleSubmit = (taskId) => {
    if (!files[taskId]) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("task", taskId);
    formData.append("submission_file", files[taskId]);

    setSubmittingIds((prev) => [...prev, taskId]);

    fetch(`${baseUrl}tasks/submit/`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to submit task");
        return res.json();
      })
      .then(() => {
        setSubmittingIds((prev) => prev.filter((id) => id !== taskId));
        setSubmittedTasks((prev) => [
          ...prev,
          {
            taskId,
            fileName: files[taskId].name,
            submittedAt: new Date(),
          },
        ]);
        alert("Task submitted successfully!");
      })
      .catch((err) => {
        alert("Error: " + err.message);
        setSubmittingIds((prev) => prev.filter((id) => id !== taskId));
      });
  };

  if (loading) return <p className="p-6 text-center text-gray-400">Loading tasks...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-[#003347] mb-10 text-center">
        Task Submissions
      </h1>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-lg">No tasks available.</p>
      ) : (
        tasks.map((task) => {
          const submitting = submittingIds.includes(task.id);
          const isExpanded = expandedIds.includes(task.id);
          const submissionInfo = submittedTasks.find((s) => s.taskId === task.id);

          return (
            <div
              key={task.id}
              className="w-full max-w-3xl bg-[#002A3B] rounded-2xl shadow-lg p-8 mb-8 border border-[#0EC5DA] hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-7 h-7 text-[#0EC5DA]" />
                <h2 className="text-2xl font-semibold text-white">{task.title || "Task"}</h2>
                <span
                  className={`ml-auto text-sm font-medium px-3 py-1 rounded-full ${
                    task.grade
                      ? "bg-green-100 text-green-800"
                      : submissionInfo
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {task.grade ? "Graded" : submissionInfo ? "Submitted" : "Pending"}
                </span>
              </div>

              <p className="text-gray-200 mb-4">{task.description || "No description available."}</p>

              {task.feedback && (
                <div
                  className="mb-4 p-4 bg-[#0EC5DA]/10 border border-[#0EC5DA] rounded-lg cursor-pointer"
                  onClick={() => toggleExpand(task.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white">Teacher Feedback</h3>
                    <span className="text-[#0EC5DA]">{isExpanded ? "−" : "+"}</span>
                  </div>
                  {isExpanded && <p className="text-gray-200 mt-2">{task.feedback}</p>}
                </div>
              )}

              {!submissionInfo && (
                <div className="mb-4">
                  <label className="block text-white font-medium mb-2">Upload Your Submission</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(task.id, e.target.files[0])}
                      className="flex-1 border border-[#0EC5DA] rounded-lg p-3 bg-[#003347] text-white focus:outline-none focus:ring-2 focus:ring-[#0EC5DA]"
                    />
                    <button
                      onClick={() => handleSubmit(task.id)}
                      disabled={submitting}
                      className={`px-5 py-3 rounded-xl font-semibold flex items-center gap-2 ${
                        submitting ? "bg-gray-400 cursor-not-allowed text-[#003347]" : "bg-[#0EC5DA] text-[#003347] hover:bg-[#0DAFCC]"
                      }`}
                    >
                      <UploadCloud className="w-5 h-5" />
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              )}

              {submissionInfo && (
                <div className="p-4 bg-[#0EC5DA]/10 border border-[#0EC5DA] rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#0EC5DA]" />
                  <div>
                    <p className="font-semibold text-[#0EC5DA]">File Submitted: {submissionInfo.fileName}</p>
                    <p className="text-gray-200 text-sm">
                      Submitted on: {submissionInfo.submittedAt.toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-between text-sm text-gray-200 mt-4">
                <div>Grade: {task.grade || "Not graded yet"}</div>
                {task.created_at && (
                  <div>Assigned on: {new Date(task.created_at).toLocaleDateString()}</div>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Tasks;
