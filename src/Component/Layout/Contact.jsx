import React, { useState } from "react";
import { toast } from "react-toastify";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-16 px-4">
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-2xl"
        style={{ backgroundColor: "#002A3B" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Contact SmartLearn
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#002A3B] text-white focus:outline-none focus:ring-2 focus:ring-[#0E5F77]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#002A3B] text-white focus:outline-none focus:ring-2 focus:ring-[#0E5F77]"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#002A3B] text-white focus:outline-none focus:ring-2 focus:ring-[#0E5F77] resize-none"
            required
          />
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#0E5F77] hover:bg-[#075F66] text-white px-4 py-3 rounded-lg font-semibold transition-colors text-base"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
