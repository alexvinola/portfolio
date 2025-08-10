"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import RrssIcons from "./RrssIcons";
import { useTranslations, useLocale } from "@/components/TranslationsProvider";

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [doneTyping, setDoneTyping] = useState(false);
  const fullText = t("hero.hiname");
  const name = t("hero.name");
  const nameStart = fullText.indexOf(name);



  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-0 text-center sm:text-left">
      <h1 className="text-4xl text-main-dark font-bold mb-4 min-h-[3.5rem]">
        {!doneTyping ? (
          <TypeAnimation
            sequence={["", 600, fullText, () => setDoneTyping(true)]}
            speed={20}
            cursor={true}
            repeat={0}
            omitDeletionAnimation={true}
            preRenderFirstString={true}
            wrapper="span"
            style={{ display: "inline-block" }}
          />
        ) : (
          <>
            {fullText.slice(0, nameStart)}
            <span className="text-main-dark">
              {fullText.slice(nameStart).trimStart()}
            </span>
            <span
              className="animate-blink text-main-dark ml-1 inline-flex items-center"
              style={{ fontWeight: 400 }}
            >
              |
            </span>
          </>
        )}
      </h1>

      {/* Texto sacado del diccionario */}
      <p className="text-lg text-main-dark mb-6">
        {t("hero.description")}
      </p>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
        <a
          href="/CVENGLISH.pdf"
          download
          className="bg-button-primary text-white px-6 py-3 rounded-lg shadow hover:bg-button-primary-hover transition text-center"
        >
          {t("hero.download")}
        </a>
        <a
          href={`/${locale}/projects`}
          className="bg-button-secondary text-white px-6 py-3 rounded-lg hover:bg-button-secondary-hover transition text-center"
        >
          {t("hero.projects")}
        </a>
      </div>

      <div className="flex justify-center sm:justify-start gap-4 mt-4">
        <RrssIcons
          githubUrl="https://github.com/alexvinola"
          linkedinUrl="https://linkedin.com/in/alejandrovinola"
          size={30}
        />
      </div>
    </section>
  );
}
