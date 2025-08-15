import React, { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedIds, setExpandedIds] = useState([]); // store expanded notice IDs

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(baseUrl + "/notice/list", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch notices");
        }
        return res.json();
      })
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((nid) => nid !== id) : [...prev, id]
    );
  };

  if (loading)
    return <p className="p-4 text-center text-gray-500">Loading notices...</p>;
  if (error)
    return <p className="p-4 text-center text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white rounded-xl shadow border border-blue-100">
      <h2 className="text-3xl font-bold mb-4 text-slate-900 text-center">
        Notices
      </h2>
      {notices.length === 0 ? (
        <p className="text-gray-500">No notices available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notices.map((notice) => {
            const isExpanded = expandedIds.includes(notice.id);
            const text = notice.description;
            const preview =
              text.length > 100 && !isExpanded
                ? text.slice(0, 100) + "..."
                : text;

            return (
              <li
                key={notice.id}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow flex flex-col justify-between"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-1">
                  {notice.title}
                </h3>
                <p className="text-gray-700 mb-2">{preview}</p>
                {text.length > 100 && (
                  <button
                    onClick={() => toggleExpand(notice.id)}
                    className="text-blue-600 hover:underline text-sm w-fit"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
                <div className="text-xs text-blue-600 mt-auto">
                  Posted on{" "}
                  {new Date(notice.created_at).toLocaleDateString()}
                  {notice.created_by && (
                    <span> | By: {notice.created_by}</span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Notice;