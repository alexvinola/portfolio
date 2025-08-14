"use client";

import { useEffect } from "react";

export default function CookiebotScript() {
  useEffect(() => {
    const cbid = process.env.NEXT_PUBLIC_COOKIEBOT_ID;
    if (!cbid) return; // si no está definida, no hacemos nada

    const script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.setAttribute("data-cbid", cbid);
    script.setAttribute("data-blockingmode", "auto");
    script.type = "text/javascript";

    document.head.appendChild(script);
  }, []);

  return null;
}
