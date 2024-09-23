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

type PageKeys = keyof typeof enContent;

const isPageContent = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
): content is { title: string; content: string } => {
  return (
    content &&
    typeof content === "object" &&
    "title" in content &&
    "content" in content
  );
};

export default function Page() {
  const pathname = usePathname();
  const [lang = "en", slug = "home"] = pathname.split("/").filter(Boolean) as [
    string,
    PageKeys
  ];

  const language = lang === "tr" || lang === "en" ? lang : "en";
  const pageContent = content[language][slug];

  return (
    <div>
      <Hero />
      <Header />
      <div>
        <LanguagePicker currentLang={language} />
        <Menu lang={language} />
        {isPageContent(pageContent) ? (
          <div className="text-black">
            <h1>{pageContent.title}</h1>
            <p>{pageContent.content}</p>
          </div>
        ) : (
          <p>Page not found</p>
        )}
      </div>
    </div>
  );
}
