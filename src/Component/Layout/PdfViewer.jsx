import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const PdfViewer = () => {
  const { subjectId } = useParams();
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`${baseUrl}/subjects/${subjectId}/pdfs/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setPdfs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [subjectId]);

  if (loading) return <p className="p-4 text-center">Loading PDFs...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">PDFs</h1>
      <ul className="space-y-2">
        {pdfs.map((pdf) => (
          <li key={pdf.id}>
            <a
              href={pdf.file_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-green-100 rounded hover:bg-green-200"
            >
              {pdf.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfViewer;