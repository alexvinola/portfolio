import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-8 gap-16 sm:p-10">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HeroSection></HeroSection>
      </main>
    </div>
  );
}
