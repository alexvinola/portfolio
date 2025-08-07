import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800"
    >
      <Image
        src={imageUrl}
        alt={`Imagen del proyecto ${title}`}
        className="w-full h-48 object-cover"
        width={500}        // Ajusta según el tamaño real que quieras mostrar
        height={192}       // Manteniendo la proporción de h-48 (48 * 4 = 192)
        priority={false}   // Cambia a true si quieres que la imagen cargue rápido en inicial
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </a>
  );
}
