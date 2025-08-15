import React, { useEffect, useState } from "react";
import { BarChart3, BookOpen, Clock, Trophy, Target, TrendingUp, FileText } from "lucide-react";

const Results = () => {
  const [results, setResults] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const capitalizeTitle = (str) => {
    if (!str) return '';
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  const formatDate = (dateString) => {
    try {
      if (!dateString) return 'Date not available';
      
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return 'Invalid date';
      }
      
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error('Date formatting error:', error);
      return 'Date formatting error';
    }
  };

  // Helper function to get date from result object
  const getResultDate = (result) => {
    // Check multiple possible date field names
    const dateField = result.created_at || result.date || result.timestamp || result.createdAt;
    
    if (dateField) {
      return formatDate(dateField);
    }
    
    // If no date field found, return current date
    return formatDate(new Date().toISOString());
  };

  useEffect(() => {
    fetch(baseUrl+ "/exam/results", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch results");
        return res.json();
      })
      .then((data) => {
        console.log('Results data:', data); // Debug log
        if (data && data.length > 0) {
          console.log('First result object keys:', Object.keys(data[0])); // Debug log
          console.log('First result sample:', data[0]); // Debug log
        }
        setResults(data);
      })
      .catch((err) => console.error(err));
  }, [baseUrl]);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const alphabet = ["A", "B", "C", "D"];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            My Exam Results
          </h1>
          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Track your progress and review your performance across all completed exams
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6">
          {results.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-lg">
              <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">No Results Yet</h3>
              <p className="text-slate-600 text-lg mb-6">Take your first exam to see your results here</p>
              <button className="bg-blue-400 hover:bg-blue-500 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your First Exam
              </button>
            </div>
          ) : (
            results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg"
              >
                {/* Result Header */}
                <div className="p-6 border-b border-slate-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {capitalizeTitle(result.topic)}
                          </h3>
                          <p className="text-slate-600 text-xs">
                            {getResultDate(result)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Score Display */}
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                          {result.score}/{result.total_questions}
                        </div>
                        <p className="text-slate-600 text-xs">Score</p>
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-2xl lg:text-3xl font-bold ${
                          Math.round((result.score / result.total_questions) * 100) >= 80 
                            ? 'text-green-600' 
                            : Math.round((result.score / result.total_questions) * 100) >= 60 
                            ? 'text-yellow-600' 
                            : 'text-red-600'
                        }`}>
                          {Math.round((result.score / result.total_questions) * 100)}%
                        </div>
                        <p className="text-slate-600 text-xs">Percentage</p>
                      </div>

                      <button
                        onClick={() => toggleDetails(index)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm shadow-lg ${
                          openIndex === index
                            ? 'bg-red-500 hover:bg-red-600 text-white'
                            : 'bg-blue-400 hover:bg-blue-500 text-slate-900'
                        }`}
                      >
                        {openIndex === index ? "Hide Details" : "View Details"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Detailed Questions View */}
                {openIndex === index && (
                  <div className="p-6 bg-slate-50">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Question-wise Analysis
                    </h4>
                    
                    <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                      {result.details && result.details.length > 0 ? (
                        result.details.map((q, i) => {
                          const correctIndex = alphabet.indexOf(q.answer || "");
                          const userIndex = alphabet.indexOf(q.user_answer || "");

                          return (
                            <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-lg">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs flex-shrink-0">
                                  {i + 1}
                                </div>
                                <p className="font-medium text-slate-900 leading-relaxed text-sm">
                                  {q.question}
                                </p>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                                {q.options.map((opt, idx) => {
                                  const letter = alphabet[idx];
                                  const isCorrect = idx === correctIndex;
                                  const isUserAnswer = idx === userIndex;

                                  return (
                                    <div
                                      key={idx}
                                      className={`p-3 rounded-lg border transition-all duration-300 ${
                                        isCorrect
                                          ? "bg-green-100 border-green-400 text-green-800"
                                          : isUserAnswer && !isCorrect
                                          ? "bg-red-100 border-red-400 text-red-800"
                                          : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                                      }`}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm">
                                          <span className="font-bold">{letter}.</span> {opt}
                                        </span>
                                        {isCorrect && (
                                          <span className="text-green-600 text-xl">✓</span>
                                        )}
                                        {isUserAnswer && !isCorrect && (
                                          <span className="text-red-600 text-xl">✗</span>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                  <span className="text-slate-600">Your Answer:</span>
                                  <span className={`font-semibold ${
                                    userIndex === correctIndex ? 'text-green-600' : 'text-red-600'
                                  }`}>
                                    {q.user_answer || "Not Answered"}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                  <span className="text-slate-600">Correct Answer:</span>
                                  <span className="font-semibold text-green-600">{q.answer}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-slate-600 text-lg">No detailed analysis available for this exam.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;