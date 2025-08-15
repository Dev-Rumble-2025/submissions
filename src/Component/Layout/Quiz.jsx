import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { toast } from "react-toastify";
import Latex from "react-latex-next";

function Quiz() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const storedQuestions = localStorage.getItem("questions");
    if (storedQuestions) {
      setQuestions(JSON.parse(storedQuestions));
    } else {
      toast.error("No quiz data found.");
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (e) => {
    setAnswers({ ...answers, [currentIndex]: e.target.value });
  };

  const handleSubmit = () => {
    let score = 0;
    const details = [];

    questions.forEach((q, i) => {
      let correct_answer = "";
      if (q.answer === 1) correct_answer = "A";
      else if (q.answer === 2) correct_answer = "B";
      else if (q.answer === 3) correct_answer = "C";
      else if (q.answer === 4) correct_answer = "D";

      const user_answer = answers[i] || null;

      if (user_answer === correct_answer) score++;

      details.push({
        question: q.question,
        options: q.options.split("@@@").map((opt) => opt.trim()),
        answer: correct_answer,
        user_answer: user_answer,
      });
    });

    const topic = localStorage.getItem("topic");
    const baseUrl = import.meta.env.VITE_API_BASE_URL;


    fetch(baseUrl + "/exam/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        score: score,
        total_questions: questions.length,
        topic: topic,
        details: details,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save result");
        return res.json();
      })
      .then(() => {
        toast.success(`You scored ${score} out of ${questions.length}`);
        navigate("/results");
      })
      .catch((err) => {
        toast.error("Error saving result: " + err.message);
      });
  };

  if (!questions.length) return null;

  const question = questions[currentIndex];
  const options = question.options.split("@@@").map((opt) => opt.trim());

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl p-4 mb-6 border border-slate-200 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <FileText className="w-4 h-4 text-slate-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Question {currentIndex + 1} of {questions.length}
                </h1>
                <p className="text-slate-600 text-sm">Stay focused and take your time</p>
              </div>
            </div>
            
            <div className="bg-slate-100 rounded-lg px-4 py-2 border border-slate-200">
              <div className="text-center">
                <div className={`text-xl font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-green-600'}`}>
                  {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                </div>
                <p className="text-slate-600 text-xs">Time Left</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-200">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4 leading-relaxed">
              <Latex>{question.question}</Latex>
            </h2>
          </div>

          <div className="space-y-3 mb-6">
            {["A", "B", "C", "D"].map((opt, i) => (
              <label
                key={opt}
                className={`flex items-center gap-3 cursor-pointer rounded-lg border p-4 transition-all duration-200 hover:scale-[1.01]
                  ${
                    answers[currentIndex] === opt
                      ? "bg-blue-400 text-slate-900 border-blue-400 shadow-lg"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-blue-400"
                  }`}
              >
                <input
                  type="radio"
                  name={`q-${currentIndex}`}
                  value={opt}
                  checked={answers[currentIndex] === opt}
                  onChange={handleAnswer}
                  className="sr-only"
                />
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  answers[currentIndex] === opt
                    ? "border-slate-900 bg-slate-900"
                    : "border-slate-400"
                }`}>
                  {answers[currentIndex] === opt && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  )}
                </div>
                <span className="flex-1">
                  <span className="font-semibold mr-2">{opt}.</span>
                  <Latex>{options[i]}</Latex>
                </span>
              </label>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <button
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              disabled={currentIndex === 0}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
                ${
                  currentIndex === 0
                    ? "text-slate-400 border border-slate-300 cursor-not-allowed"
                    : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 hover:scale-105"
                }`}
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentIndex((prev) => prev + 1)}
                disabled={currentIndex === questions.length - 1}
                className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
                  ${
                    currentIndex === questions.length - 1
                      ? "text-slate-400 border border-slate-300 cursor-not-allowed"
                      : "bg-blue-400 hover:bg-blue-500 text-slate-900 hover:scale-105"
                  }`}
              >
                Next
                <ChevronRight size={18} />
              </button>

              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;