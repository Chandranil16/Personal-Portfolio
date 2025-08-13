import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelopeOpenText } from "react-icons/fa";

const WEB3FORMS_ACCESS_KEY = "6fc6e33d-199d-41d8-b097-3154205bf1c1"; // Replace with your Web3Forms access key

export default function ContactDialog() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("All fields are mandatory.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Email sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send email. Try again later.");
      }
    } catch {
      toast.error("Failed to send email. Try again later.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-4">
      <h2
        className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2
        bg-gradient-to-r from-violet-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
      >
        <span className="inline-block animate-spin-slow text-blue-700">
          <FaEnvelopeOpenText size={32} />
        </span>
          Contact Me
      </h2>
      <div className="bg-gradient-to-br from-violet-100/70 via-blue-100/60 to-white/80 dark:from-violet-200/20 dark:via-blue-200/20 dark:to-slate-200/20 rounded-3xl shadow-2xl p-8 w-full max-w-2xl mx-auto animate-fade-in">
        <p className="text-base text-gray-700 dark:text-gray-700 text-center max-w-lg mx-auto mb-8">
          Have any questions about projects, or just want to collaborate for work or any opportunities? Fill out the form
          below and I'll get back to you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              className="flex-1 px-4 py-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-violet-300 dark:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder:text-violet-500 dark:placeholder:text-violet-900 text-violet-700 dark:text-violet shadow-sm transition"
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              className="flex-1 px-4 py-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-violet-300 dark:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder:text-violet-700 dark:placeholder:text-violet-900 text-violet-900 dark:text-violet shadow-sm transition"
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <input
            className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-violet-300 dark:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder:text-violet-700 dark:placeholder:text-violet-900 text-violet-900 dark:text-violet shadow-sm transition"
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <textarea
            className="w-full px-4 py-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-violet-300 dark:border-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 placeholder:text-violet-700 dark:placeholder:text-violet-900 text-violet-900 dark:text-violet shadow-sm transition resize-none"
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-indigo-500 text-white font-extrabold text-lg shadow-lg transition-all duration-200 hover:scale-105 hover:from-violet-700 hover:via-blue-600 hover:to-indigo-700 active:scale-100"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <style>
        {`
          .animate-spin-slow {
            animation: spin 3s linear infinite;
            display: inline-flex;
            vertical-align: middle;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
}