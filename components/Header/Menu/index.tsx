import React from "react";
import Link from "next/link";
import enContent from "@/shared/en/content.json";
import trContent from "@/shared/tr/content.json";

const content = {
  en: enContent,
  tr: trContent,
};

type Language = keyof typeof content;

const Menu = ({ lang }: { lang: Language }) => {
  const menuItems = content.en.menu;

  return (
    <div className="flex justify-between items-center gap-10">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className="border-b-2 hover:scale-110 transition-all duration-300"
          href={`/${lang}${
            item.toLowerCase() === "home" ? "" : `/${item.toLowerCase()}`
          }`}
        >
          {content[lang].menu[index]}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
