"use client";
import Lottie from "lottie-react";
import animationData from "@/animations/loader.json";
import animationData1 from "@/animations/loading.json";
import morty from "@/animations/morty.json";

export default function Loading() {
  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40 backdrop-blur-sm
      "
      style={{
        // Por si quieres ajustar un blur más fuerte:
        // backdropFilter: "blur(8px)"
      }}
    >
      <Lottie
        animationData={morty} // O usa animationData
        loop
        autoplay
        className="w-32 h-32 md:w-40 md:h-40"
        style={{
          outline: "none",
          // Puedes añadir filtro drop-shadow si quieres más punch:
          // filter: "drop-shadow(0 0 12px #29d6da88)",
        }}
      />
    </div>
  );
}
