import React, { useState } from "react";
import { toast } from "react-toastify";
import { X, User, Mail, Lock } from "lucide-react";
import OtpVerification from "./OtpInput";

function Signup({ onClose, setIsAuthenticated, toggleModals }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [otpPending, setOtpPending] = useState(false);
  const [signupEmail, setSignupEmail] = useState("");
  const [userId, setUserId] = useState(null);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    const submitData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    fetch(baseUrl + "/account/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message && data.user_id) {
          toast.success(data.message);
          setSignupEmail(formData.email);
          setUserId(data.user_id);
          setOtpPending(true);
          toast.success(data.message);
          toast.info("Please verify your email with the OTP sent.");
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Signup failed. Try again.");
      });
  };

  // When OTP verified successfully:
  const handleOtpVerified = () => {
    setIsAuthenticated(true); // Mark user authenticated
    setOtpPending(false);
    onClose();
  };

  const handleOtpCancel = () => {
    setOtpPending(false);
  };

  if (otpPending) {
    return (
      <OtpVerification
        userId={userId}
        email={signupEmail}
        onVerified={handleOtpVerified}
        onCancel={handleOtpCancel}
      />
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div
        className="bg-white backdrop-blur-md rounded-2xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-x-4">
            <div className="relative w-1/2">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                value={formData.first_name}
                required
                className="w-full bg-white border border-gray-200 rounded-md pl-10 pr-4 py-3 text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative w-1/2">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.last_name}
                required
                className="w-full bg-white border border-gray-200 rounded-md pl-10 pr-4 py-3 text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

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
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
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

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={formData.confirm_password}
              required
              className="w-full bg-white border border-gray-200 rounded-md pl-12 pr-4 py-3 text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-32 bg-[#003347] hover:bg-[#002A3B] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-slate-600">
          Already have an account?{" "}
          <button
            className="text-blue-600 font-semibold underline hover:text-blue-700 transition-colors duration-200"
            onClick={() => {
              onClose();
              toggleModals && toggleModals();
            }}
            type="button"
          >
            Login
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

export default Signup;
