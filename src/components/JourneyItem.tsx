"use client";

import React from "react";
import { useTranslations } from "@/components/TranslationsProvider";

interface JourneyItem {
  startYear: number;
  endYear?: number;
  titleKey: string;       // clave de traducción para title
  companyKey?: string;    // clave de traducción para company
  descriptionKey?: string;// clave para description
}

const ArrowDown = () => (
  <svg
    className="w-6 h-6 flag-timeline opacity-80 mt-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-4-4m4 4l4-4" />
  </svg>
);

const journeyItems: JourneyItem[] = [
  {
    startYear: 2025,
    titleKey: "journey.items.0.title",
    companyKey: "journey.items.0.company",
    descriptionKey: "journey.items.0.description",
  },
  {
    startYear: 2023,
    endYear: 2024,
    titleKey: "journey.items.1.title",
    companyKey: "journey.items.1.company",
    descriptionKey: "journey.items.1.description",
  },
  {
    startYear: 2023,
    endYear: 2023,
    titleKey: "journey.items.2.title",
    companyKey: "journey.items.2.company",
    descriptionKey: "journey.items.2.description",
  },
];

const ProfessionalJourney: React.FC = () => {
  const t = useTranslations();

  const sortedJourney = [...journeyItems].sort((a, b) => b.startYear - a.startYear);

  return (
    <div>
      <div className="relative flex flex-col items-center py-6">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-timeline opacity-80 -translate-x-1/2 rounded" />
        
        <div className="flex flex-col gap-12 w-full max-w-xl">
          {sortedJourney.map(({ startYear, endYear, titleKey, companyKey, descriptionKey }, idx) => (
            <div key={idx} className="relative flex items-start gap-6">
              <div className="z-10 flex-shrink-0 w-5 h-5 rounded-full bg-timeline border-2 border-white mt-1 -translate-x-1/2 left-1/2 absolute" />
              
              <div className="ml-4 pl-8 border-l-4 border-timeline border-opacity-50 relative">
                <div className="font-semibold text-lg text-timeline mb-1">
                  {endYear ? `${startYear} - ${endYear}` : `${startYear} - ${t("journey.present")}`}
                </div>
                <div className="text-xl font-bold mb-1 text-secondary">
                  {t(titleKey)}
                </div>
                {companyKey && (
                  <div className="text-sm italic mb-2 text-secondary">
                    {t(companyKey)}
                  </div>
                )}
                {descriptionKey && (
                  <div className="text-sm text-main-dark/85">
                    {t(descriptionKey)}
                  </div>
                )}
              </div>

              {idx < sortedJourney.length - 1 && (
                <div className="absolute left-1/2 top-full flex justify-center w-full -translate-x-1/2">
                  <ArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProfessionalJourney };
