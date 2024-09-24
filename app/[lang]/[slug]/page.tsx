"use client";

import React from "react";
import { usePathname } from "next/navigation";
import LanguagePicker from "@/components/Header/LanguagePicker";
import Menu from "@/components/Header/Menu";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Page() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lang = pathSegments[0];

  return (
    <div>
      <Hero />
      <Header />
      <div>
        <Menu lang={lang} />
        <LanguagePicker currentLang={lang} />
      </div>
    </div>
  );
}
