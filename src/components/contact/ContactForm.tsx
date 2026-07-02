"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      toast.success("Message sent successfully!");

      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
        shadow-[0_0_50px_rgba(34,211,238,.06)]
        md:p-10
      "
    >
      <span
        className="
          inline-flex
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-4
          py-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-cyan-300
        "
      >
        Contact Form
      </span>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Send Me A Message
      </h2>

      <p className="mt-4 leading-8 text-slate-400">
        Have a question or an opportunity? Fill out the form below and I'll
        get back to you as soon as possible.
      </p>

      {/* Name */}
      <div className="mt-10">
        <label className="mb-2 block text-sm text-slate-300">
          Full Name
        </label>

        <input
          required
          type="text"
          name="name"
          placeholder="John Doe"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            px-5
            py-4
            text-white
            outline-none
            transition
            placeholder:text-slate-500
            focus:border-cyan-400
          "
        />
      </div>

      {/* Email */}
      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-300">
          Email Address
        </label>

        <input
          required
          type="email"
          name="email"
          placeholder="john@email.com"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            px-5
            py-4
            text-white
            outline-none
            transition
            placeholder:text-slate-500
            focus:border-cyan-400
          "
        />
      </div>

      {/* Subject */}
      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-300">
          Subject
        </label>

        <input
          required
          type="text"
          name="subject"
          placeholder="Job Opportunity"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            px-5
            py-4
            text-white
            outline-none
            transition
            placeholder:text-slate-500
            focus:border-cyan-400
          "
        />
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="mb-2 block text-sm text-slate-300">
          Message
        </label>

        <textarea
          required
          rows={6}
          name="message"
          placeholder="Write your message..."
          className="
            w-full
            resize-none
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            px-5
            py-4
            text-white
            outline-none
            transition
            placeholder:text-slate-500
            focus:border-cyan-400
          "
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="
          mt-8
          inline-flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-cyan-400
          px-6
          py-4
          font-semibold
          text-slate-950
          transition
          hover:bg-cyan-300
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            <SendHorizontal size={20} />
            Send Message
          </>
        )}
      </button>
    </motion.form>
  );
}