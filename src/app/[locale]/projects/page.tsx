"use client";

import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "@/components/TranslationsProvider";

type Project = {
  titleKey: string;
  descriptionKey: string;
  imageUrl: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    titleKey: "projects.cards.0.title",            // Clave en el JSON para el título
    descriptionKey: "projects.cards.0.description",// Clave en el JSON para la descripción
    imageUrl: "/projects/portfolio.png",
    projectUrl: "https://github.com/alexvinola/portfolio",
  }
  // Puedes añadir más objetos aquí con index 1, 2, etc., en los JSON
];

export default function Projects() {
  const t = useTranslations();

  return (
    <section className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-6 text-center text-main-dark">
        {t("projects.title")}
      </h1>

      {/* Descripción introductoria */}
      <p className="max-w-3xl mx-auto mb-12 text-lg text-main-dark text-center">
        {t("projects.intro")}
      </p>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(({ titleKey, descriptionKey, imageUrl, projectUrl }) => (
          <ProjectCard
            key={titleKey}
            title={t(titleKey)}
            description={t(descriptionKey)}
            imageUrl={imageUrl}
            projectUrl={projectUrl}
          />
        ))}
      </div>
    </section>
  );
}
