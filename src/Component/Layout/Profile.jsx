import React, { useEffect, useState } from "react";
import { User } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetch(baseUrl + "/account/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch profile");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setFormData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          username: data.username || "",
          email: data.email || "",
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!formData.first_name.trim()) {
      setError("First name is required.");
      return;
    }
    if (!formData.last_name.trim()) {
      setError("Last name is required.");
      return;
    }
    if (!formData.username.trim()) {
      setError("Username is required.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }

    setSaving(true);

    try {
      const res = await fetch(baseUrl + "/account/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(
          errData.detail || "Failed to update profile. Try again."
        );
      }

      const updatedUser = await res.json();
      setUser(updatedUser);
      setSuccessMsg("Profile updated successfully!");
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-center text-slate-600 text-lg">Loading profile...</p>
      </div>
    );

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-slate-900" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            My Profile
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Manage your personal information and account settings
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-xl border border-slate-200">
          {error && (
            <div className="mb-4 bg-red-50 text-red-800 p-3 rounded-lg border border-red-200 shadow-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                {error}
              </div>
            </div>
          )}
          {successMsg && (
            <div className="mb-4 bg-green-50 text-green-800 p-3 rounded-lg border border-green-200 shadow-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                {successMsg}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-semibold text-slate-700 text-sm" htmlFor="first_name">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-slate-700 text-sm" htmlFor="last_name">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 font-semibold text-slate-700 text-sm" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-slate-700 text-sm" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm"
            required
          />
        </div>

        <div className="flex justify-center pt-3">
          <button
            type="submit"
            disabled={saving}
            className={`px-6 py-3 rounded-lg bg-blue-400 hover:bg-blue-500 text-slate-900 font-semibold shadow-xl transition-all duration-300 transform hover:scale-105 text-sm ${
              saving ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {saving ? "Saving..." : "Update Profile"}
          </button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;