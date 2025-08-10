import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RrssIcons from "@/components/RrssIcons";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Viñola",
  description: "Developed by Alex Viñola",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {  
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          font-sans
          relative min-h-screen overflow-x-hidden
        `}
      >
        {/* Imagen decorativa solo visible en tablets y escritorio */}
        <Image
          src="/metaverse.png"
          alt="Decoración derecha"
          className="
            fixed top-1/2 right-0 z-0
            pointer-events-none select-none
            w-[40vw] max-w-2xl
            -translate-y-1/2 mr-8
            hidden md:block
          "
          style={{ opacity: 0.8 }}
          fill={false}
          width={800}  // Ajusta según el tamaño real o deseado
          height={600} // Ajusta según el tamaño real o deseado
          priority={true} // si quieres que se cargue rápido al inicio
        />

        {/* Contenedor principal corregido para scroll y sin margen lateral en móvil */}
        <div className="relative z-10 flex min-h-screen flex-col justify-start w-full ml-0 md:ml-4 md:pr-[36vw] py-6 pb-16 transition-all">
          <Navbar />
          <main>{children}</main>
        </div>

        {/* Footer fijo */}
        <footer
          className="
            w-full fixed bottom-0 left-0 z-50 py-4
            flex flex-col sm:flex-row gap-2 sm:gap-6
            items-center justify-center text-sm
            border-t border-panel
            bg-transparent
            backdrop-blur-md
          "
          style={{
            backgroundColor: "transparent",
          }}
        >
          <p className="text-foreground">© 2025 Alejandro Viñola Robles</p>
          <RrssIcons
            githubUrl="https://github.com/alexvinola"
            linkedinUrl="https://linkedin.com/in/alejandrovinola"
            size={20}
          />
        </footer>

      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""}  />
    </html>
  );
}
