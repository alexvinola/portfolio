// src/components/RrssIcons.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

type RrssIconsProps = {
  githubUrl: string;
  linkedinUrl: string;
  size?: number;
};

export default function RrssIcons({
  githubUrl,
  linkedinUrl,
  size = 24,
}: RrssIconsProps) {
  return (
    <div className="flex gap-4 items-center">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className=" p-2 rounded transition shadow-none hover:shadow-lg"
        aria-label="GitHub"
      >
        <FaGithub size={size} className="text-grey dark:text-grey" />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded transition shadow-none hover:shadow-lg"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={size} className="text-grey dark:text-grey" />
      </a>
    </div>
  );
}
