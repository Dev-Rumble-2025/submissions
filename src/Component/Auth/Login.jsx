import React, { useState } from "react";
import { toast } from "react-toastify";
import { X, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Login({ onClose, toggleModals, setIsAuthenticated }) {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseUrl + "/account/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access) {
          localStorage.setItem("token", data.access);
          localStorage.setItem("username", formData.username);
          setIsAuthenticated(true);
          toast.success("Login successful!");
          navigate("/dashboard");
          onClose();
        } else if (data.error) {
          toast.error(data.error);
        } else {
          toast.error("Unexpected response");
        }
      })
      .catch(() => toast.error("Login failed"));
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#75E6DA]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-[#75E6DA]/20 rounded-full blur-3xl"></div>
      </div>

      <div
        className="bg-white backdrop-blur-md rounded-xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={formData.username}
              required
              className="w-full bg-white border border-gray-200 rounded-md pl-12 pr-4 py-3 text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
              className="w-full bg-white border border-gray-200 rounded-md pl-12 pr-4 py-3 text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 bg-[#003347] hover:bg-[#002A3B] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-slate-600">
          Don't have an account?{" "}
          <button
            className="text-blue-600 font-semibold underline hover:text-blue-700 transition-colors duration-200"
            onClick={() => {
              toggleModals && toggleModals();
            }}
            type="button"
          >
            Sign Up
          </button>
        </p>

        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-slate-600 text-xl font-bold transition-colors duration-200"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <X />
        </button>
      </div>
    </div>
  );
}

export default Login;
