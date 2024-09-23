import React from "react";
import Link from "next/link";
import enContent from "@/shared/en/content.json";
import trContent from "@/shared/tr/content.json";

const content = {
  en: enContent,
  tr: trContent,
};

type Language = keyof typeof content;

interface MenuProps {
  lang: Language;
  className?: string;
}

const Menu = ({ lang, className }: MenuProps) => {
  const menuItems = content.en.menu;
  return (
    <>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className={className}
          href={`/${lang}${
            item.toLowerCase() === "home" ? "" : `/${item.toLowerCase()}`
          }`}
        >
          {content[lang].menu[index]}
        </Link>
      ))}
    </>
  );
};

export default Menu;
