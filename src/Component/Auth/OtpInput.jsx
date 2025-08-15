import React, { useState } from "react";
import { toast } from "react-toastify";

function OtpInput({ userId, onVerified, onCancel }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setOtp(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otp || otp.length < 4) {
      toast.error("Please enter a valid OTP");
      return;
    }

    setLoading(true);
// https://42scszck-8000.inc1.devtunnels.ms/account/verify-otp
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    fetch(baseUrl + "/account/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, otp }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.message) {
          toast.success(data.message);
          onVerified && onVerified();
        } else {
          toast.error(data.error || "Invalid OTP, please try again.");
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("Verification failed, please try again.");
      });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
          Verify Your Email
        </h2>
        <p className="text-center mb-4">
          Please enter the OTP sent to your email.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="otp"
            value={otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            maxLength={6}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] text-center text-xl tracking-widest"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-400 hover:bg-slate-900 text-white font-semibold py-3 rounded-md shadow transition-colors duration-300 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
          onClick={onCancel}
          aria-label="Close modal"
          type="button"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default OtpInput;