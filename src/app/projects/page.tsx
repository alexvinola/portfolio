"use client";

import ProjectCard from "@/components/ProjectCard";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my skills, projects, and professional journey. Built with Next.js (React) and Tailwind CSS. You can check the code on GitHub.",
    imageUrl: "/projects/portfolio.png",
    projectUrl: "https://github.com/alexvinola/portfolio",
  }
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-24 pb-12">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-6 text-center text-main-dark">
        Projects
      </h1>

      {/* Descripción introductoria */}
      <p className="max-w-3xl mx-auto mb-12 text-lg text-main-dark text-center">
        Although I don&apos;t have many projects yet, I never stop working to learn new technologies and explore innovative solutions.
        Below are some of my recent works, including this very portfolio, which links to my GitHub repository.
      </p>


      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(({ title, description, imageUrl, projectUrl }) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            imageUrl={imageUrl}
            projectUrl={projectUrl}
          />
        ))}
      </div>
    </section>
  );
}
