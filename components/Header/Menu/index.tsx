"use client";

import React from "react";
import Link from "next/link";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import ar from "../../../shared/ar/content.json";
import de from "../../../shared/de/content.json";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: "300",
});

interface MenuProps {
  lang: string;
  className?: string;
}

export default function Menu({ lang, className }: MenuProps) {
  const navigateKeys = [
    "home",
    "about",
    "corporate",
    "career",
    "project",
    "contact",
  ];

  const menuItems =
    lang === "en"
      ? en.menu
      : lang === "tr"
      ? tr.menu
      : lang === "ar"
      ? ar.menu
      : de.menu;

  return (
    <>
      {menuItems.map((item: string, index: number) => {
        const key = navigateKeys[index];
        if (!key) return null;

        return (
          <Link key={index} className={className} href={`/${lang}${`/${key}`}`}>
            <p
              className={`lg:border-b-2 hover:pb-3 hover:scale-125 transition-all duration-300 ${lato.className}`}
            >
              {item}
            </p>
          </Link>
        );
      })}
    </>
  );
}
