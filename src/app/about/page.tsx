import SkillCard from "@/components/SkillCard";
import { ProfessionalJourney, professionalHistory } from "@/components/JourneyItem"; // Ajusta ruta según dónde pongas ProfessionalJourney

export default function AboutMe() {
  // Aquí defines las skills con iconos y nombres
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
        About Me
      </h2>

      <p className="text-lg text-main-dark mb-6">
        🧑‍💻 I&apos;m a Full Stack Developer with experience in C#, TypeScript, and SQL, mainly working with Angular and .NET. I use tools like Git and GitLab for version control and project deployment, and I&apos;m well-versed in agile methodologies such as Scrum, using Jira to manage tasks and sprints effectively.
      </p>

      <p className="text-lg text-main-dark mb-6">
        💡 I&apos;m passionate about problem-solving, building meaningful features, and constantly learning new technologies to grow as a developer. I thrive in collaborative environments where teamwork and communication drive progress.
      </p>

      <p className="text-lg text-main-dark mb-6">
        ⛺ Outside of work, I enjoy spending time in nature, photography, and video games — activities that help me recharge and bring creativity into my work.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-secondary">
        Professional <span className="text-primary">Skillset</span>
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map(({ iconSrc, altText }) => (
          <SkillCard key={altText} iconSrc={iconSrc} altText={altText} />
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-6 mt-6 text-secondary">
        <span className="text-primary">Tools</span> I use
      </h3>
      <div className="flex flex-wrap gap-4 justify-center">
        {tools.map(({ iconSrc, altText }) => (
          <SkillCard key={altText} iconSrc={iconSrc} altText={altText} />
        ))}
      </div>

      {/* Línea de tiempo profesional */}
      <h3 className="text-3xl font-bold mt-12 mb-6 text-center text-secondary">
        Professional <span className="text-primary">Journey</span>
      </h3>
      <ProfessionalJourney journey={professionalHistory} />
    </section>
  );
}
