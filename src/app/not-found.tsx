"use client";
import Lottie from "lottie-react";
import notFoundAnimation from "@/animations/404.json"; // Usa la ruta correspondiente

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] pt-12 text-center">
      <div className="w-full max-w-2xl mb-8">
        <Lottie animationData={notFoundAnimation} loop autoplay className="w-full h-auto" />
      </div>
      {/* <a
        href="/"
        className="mt-2 inline-block px-6 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-hover transition"
      >
        Volver a inicio
      </a> */}
    </div>
  );
}
