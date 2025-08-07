import React from "react";
import Image from "next/image";

interface SkillCardProps {
  iconSrc: string;
  altText: string;
}

export default function SkillCard({ iconSrc, altText }: SkillCardProps) {
  return (
    <div className="bg-black/60 bg-opacity-20 rounded-lg p-3 w-20 h-20 flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
      <Image
        src={iconSrc}
        alt={altText}
        className="max-w-full max-h-full"
        draggable={false}
        style={{ objectFit: "contain" }}
        width={48}  // ancho fijo en píxeles
        height={48} // alto fijo en píxeles
      />

    </div>
  );
}
