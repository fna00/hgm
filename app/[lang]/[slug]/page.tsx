"use client";

import React from "react";
import { usePathname } from "next/navigation";
import enContent from "@/shared/en/content.json";
import trContent from "@/shared/tr/content.json";
import LanguagePicker from "@/components/Header/LanguagePicker";
import Menu from "@/components/Header/Menu";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const content = {
  en: enContent,
  tr: trContent,
};

const supportedLanguages = ["en", "tr"] as const;
type Language = (typeof supportedLanguages)[number];
type PageKeys = keyof typeof enContent;

export default function Page() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] as Language;
  const slug = (pathSegments[1] as PageKeys) || "home";

  const language: Language = supportedLanguages.includes(lang) ? lang : "en";
  const pageContent = content[language][slug];

  return (
    <div>
      <Hero />
      <Header />
      <div>
        <Menu lang={language} />
        <LanguagePicker currentLang={language} />
      </div>
    </div>
  );
}
