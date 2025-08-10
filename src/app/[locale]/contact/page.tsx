"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "@/components/TranslationsProvider";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY || "";
const ENABLE_TURNSTILE = process.env.NEXT_PUBLIC_ENABLE_TURNSTILE === "true";

export default function Contact() {
  const t = useTranslations();
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ENABLE_TURNSTILE) {
      setTurnstileToken("bypass");
      return;
    }

    let rendered = false;
    const renderTurnstile = () => {
      if (rendered) return;
      if (window.turnstile && turnstileContainerRef.current) {
        turnstileContainerRef.current.innerHTML = "";
        window.turnstile.render(turnstileContainerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: setTurnstileToken,
          "error-callback": () => setTurnstileToken(null),
          "expired-callback": () => setTurnstileToken(null),
        });
        rendered = true;
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderTurnstile();
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setResult({ success: false, message: t("contact.requiredFields") });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setResult({ success: false, message: t("contact.invalidEmail") });
      return;
    }
    if (ENABLE_TURNSTILE && !turnstileToken) {
      setResult({ success: false, message: t("contact.captcha") });
      return;
    }

    setSending(true);
    setResult(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(() => {
        setResult({ success: true, message: t("contact.success") });
        form.reset();
        setTurnstileToken(ENABLE_TURNSTILE ? null : "bypass");
        if (ENABLE_TURNSTILE && window.turnstile && turnstileContainerRef.current) {
          window.turnstile.reset(turnstileContainerRef.current);
        }
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setResult({ success: false, message: t("contact.fail") });
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-main-dark break-words">
        {t("contact.title")}
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 w-full" noValidate>
        {/* Nombre */}
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="mb-2 font-semibold text-secondary">
            {t("contact.name")}
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder={t("contact.namePlaceholder")}
            className="w-full bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="mb-2 font-semibold text-secondary">
            {t("contact.email")}
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder={t("contact.emailPlaceholder")}
            className="w-full bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        {/* Asunto */}
        <div className="flex flex-col w-full">
          <label htmlFor="subject" className="mb-2 font-semibold text-secondary">
            {t("contact.subject")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder={t("contact.subjectPlaceholder")}
            className="w-full bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col w-full">
          <label htmlFor="message" className="mb-2 font-semibold text-secondary">
            {t("contact.message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t("contact.messagePlaceholder")}
            className="w-full bg-black/60 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 resize-none shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={sending}
            required
          />
        </div>

        <input type="hidden" name="cf_turnstile_token" value={turnstileToken || ""} />

        {ENABLE_TURNSTILE && (
          <div
            ref={turnstileContainerRef}
            style={{ width: "100%", height: 80 }}
            className="flex justify-center"
          />
        )}

        <button
          type="submit"
          disabled={sending}
          className="w-full sm:w-auto self-center bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? t("contact.sending") : t("contact.button")}
        </button>
      </form>

      {result && (
        <p
          className={`mt-4 text-center font-semibold ${
            result.success ? "text-green-400" : "text-red-500"
          }`}
        >
          {result.message}
        </p>
      )}

      {ENABLE_TURNSTILE && (
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      )}
    </section>
  );
}
