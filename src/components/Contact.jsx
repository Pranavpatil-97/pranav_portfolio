import { useState } from "react";
import { profile } from "../data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const input =
    "w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="section">
      <div className="wrap max-w-2xl">
        <h2 className="section-title text-center">
          Contact <span>Me</span>
        </h2>
        <p className="mt-4 text-center text-muted">
          Have a project or an opportunity in mind? Send me a message.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            name="name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={handleChange}
            className={input}
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            value={form.email}
            onChange={handleChange}
            className={input}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            required
            value={form.message}
            onChange={handleChange}
            className={input}
          />
          <button type="submit" className="btn w-full cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}