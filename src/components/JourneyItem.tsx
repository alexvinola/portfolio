import React from "react";

interface JourneyItem {
  startYear: number;
  endYear?: number; // puede ser indefinido si es empleo actual
  title: string;
  company?: string;
  description?: string;
}

interface ProfessionalJourneyProps {
  journey: JourneyItem[];
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

const ProfessionalJourney: React.FC<ProfessionalJourneyProps> = ({ journey }) => {
  // Ordenar de más reciente a más antiguo
  const sortedJourney = [...journey].sort((a, b) => b.startYear - a.startYear);

  return (
    <div className="relative flex flex-col items-center py-6">
      {/* Línea vertical central con color timeline y opacidad suavizada */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-timeline opacity-80 -translate-x-1/2 rounded" />

      <div className="flex flex-col gap-12 w-full max-w-xl">
        {sortedJourney.map(({ startYear, endYear, title, company, description }, idx) => (
          <div key={idx} className="relative flex items-start gap-6">
            {/* Punto central en la línea */}
            <div className="z-10 flex-shrink-0 w-5 h-5 rounded-full bg-timeline border-2 border-white opacity-100 mt-1 -translate-x-1/2 left-1/2 absolute" />

            {/* Contenido del bloque alineado a la izquierda */}
            <div className="ml-4 pl-8 border-l-4 border-timeline border-opacity-50 relative">
              <div className="font-semibold text-lg text-timeline mb-1">
                {endYear ? `${startYear} - ${endYear}` : `${startYear} - Present`}
              </div>
              <div className="text-xl font-bold mb-1 text-secondary">
                {title}
              </div>
              {company && (
                <div className="text-sm italic mb-2 text-secondary">
                  {company}
                </div>
              )}
              {description && (
                <div className="text-sm text-main-dark/85">
                  {description}
                </div>
              )}
            </div>

            {/* Flecha hacia abajo, con color timeline y opacidad suavizada */}
            {idx < sortedJourney.length - 1 && (
              <div className="absolute left-1/2 top-full flex justify-center w-full -translate-x-1/2">
                <ArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Array de experiencia profesional en el mismo archivo:
const professionalHistory: JourneyItem[] = [
  {
    startYear: 2025,
    title: "Full Stack Software Engineer",
    company: "Sportium (hiberus)",
    description:
      "Part of the SPORTIUM development team, specializing in live event listening systems, .NET microservices for web functionalities, and frontend with Angular. Focused on scalability, performance, and real-time capabilities for sports betting platforms.",
  },
  {
    startYear: 2023,
    endYear: 2024,
    title: "Software Developer",
    company: "Integra Tecnología",
    description:
      "Development of mobile and web applications using .NET MAUI, .NET MVC, Angular, and Azure Functions. Experience with backend using .NET 7 and dynamic frontend development with Angular, including deployment to the App Store and Play Store.",
  },
  {
    startYear: 2023,
    endYear: 2023,
    title: "Software Development Intern",
    company: "Integra Tecnología",
    description:
      "Internship developing a business web application for activity management using Angular, Bootstrap, PrimeNG, and .NET. Implemented file export, SMTP emails, and token management.",
  },
];

// Exporta ambos para tu About
export { ProfessionalJourney, professionalHistory };
