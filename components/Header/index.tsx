"use client";

import BrandIcon from "@/icons/BrandIcon";
import React from "react";
import LanguagePicker from "./LanguagePicker";
import Menu from "./Menu";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] || "en";

  const language = lang === "tr" || lang === "en" ? lang : "en";

  return (
    <div className="relative px-5 bg-transparent text-white font-medium text-lg font-serif">
      <div className="grid grid-cols-3">
        <a className="flex items-center gap-2" href="/">
          <BrandIcon />
        </a>
        <Menu lang={language} />
        <LanguagePicker currentLang={lang} />
      </div>
    </div>
  );
}
