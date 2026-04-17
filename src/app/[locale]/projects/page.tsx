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
    titleKey: "projects.cards.0.title",
    descriptionKey: "projects.cards.0.description",
    imageUrl: "/projects/portfolio.png",
    projectUrl: "https://github.com/alexvinola/portfolio",
  },
  {
    titleKey: "projects.cards.2.title",
    descriptionKey: "projects.cards.2.description",
    imageUrl: "/projects/noumordevs.png",
    projectUrl: "https://noumordevs.alexvinola.com",
  },
  {
    titleKey: "projects.cards.1.title",
    descriptionKey: "projects.cards.1.description",
    imageUrl: "/projects/python-logo.png",
    projectUrl: "https://github.com/alexvinola/membership-python",
  }
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
