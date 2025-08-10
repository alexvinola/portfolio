"use client";

import SkillCard from "@/components/SkillCard";
import { ProfessionalJourney } from "@/components/JourneyItem"; // Ajusta ruta si es necesario
import { useTranslations } from "@/components/TranslationsProvider";

export default function AboutMe() {
  const t = useTranslations();

  const skills = [
    { iconSrc: "/skills/react.png", altText: "React" },
    { iconSrc: "/skills/sql.png", altText: "SQL" },
    { iconSrc: "/skills/docker.png", altText: "Docker" },
    { iconSrc: "/skills/portainer.png", altText: "Portainer" },
    { iconSrc: "/skills/dotnet.png", altText: ".NET" },
    { iconSrc: "/skills/angular.png", altText: "Angular" },
    { iconSrc: "/skills/scrum.png", altText: "Scrum" },
  ];

  const tools = [
    { iconSrc: "/tools/gitlab.png", altText: "Gitlab" },
    { iconSrc: "/tools/jira.png", altText: "JIRA" },
    { iconSrc: "/tools/slack.png", altText: "Slack" },
    { iconSrc: "/tools/visualstudio.png", altText: "Visual" },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      <h2 className="text-4xl font-bold mb-6 text-center text-main-dark">
        {t("about.title")}
      </h2>

      <p className="text-lg text-main-dark mb-6">{t("about.desc1")}</p>
      <p className="text-lg text-main-dark mb-6">{t("about.desc2")}</p>
      <p className="text-lg text-main-dark mb-6">{t("about.desc3")}</p>

      <h3 className="text-2xl font-semibold mb-6 text-secondary text-center">
        {t("about.skills")}
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map(({ iconSrc, altText }) => (
          <SkillCard key={altText} iconSrc={iconSrc} altText={altText} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6 mt-6 text-secondary text-center">
        <span className="text-secondary">{t("about.tools")}</span>
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {tools.map(({ iconSrc, altText }) => (
          <SkillCard key={altText} iconSrc={iconSrc} altText={altText} />
        ))}
      </div>

      {/* Línea de tiempo profesional */}
      <h3 className="text-3xl font-bold mt-12 mb-6 text-center text-secondary">
        {t("about.journey")}
      </h3>
      <ProfessionalJourney />
    </section>
  );
}
