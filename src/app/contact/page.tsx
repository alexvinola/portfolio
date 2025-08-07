"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setResult(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setResult({ success: true, message: "Message sent! 🎉" });
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setResult({ success: false, message: "Failed to send message. Try again later." });
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 pt-25 pb-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-main-dark">Contact Me</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        {/* Nombre */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold text-secondary">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"  // IMPORTANTE: debe coincidir con la plantilla EmailJS
            placeholder="Your name"
            className="bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold text-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email" // IMPORTANTE: debe coincidir con la plantilla EmailJS
            placeholder="Your email"
            className="bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        {/* Asunto */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2 font-semibold text-secondary">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject" // IMPORTANTE: debe coincidir con la plantilla EmailJS
            placeholder="Subject"
            className="bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-semibold text-secondary">
            Message
          </label>
          <textarea
            id="message"
            name="message" // IMPORTANTE: debe coincidir con la plantilla EmailJS
            rows={5}
            placeholder="Write your message here"
            className="bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 resize-none shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          disabled={sending}
          className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Mensaje de resultado */}
      {result && (
        <p
          className={`mt-4 text-center font-semibold ${
            result.success ? "text-green-400" : "text-red-500"
          }`}
        >
          {result.message}
        </p>
      )}
    </section>
  );
}
