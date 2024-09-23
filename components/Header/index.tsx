"use client";

import BrandIcon from "@/icons/BrandIcon";
import React, { useState } from "react";
import LanguagePicker from "./LanguagePicker";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import SideNav from "./SideNav";
import HamburgerIcon from "@/icons/HamburgerIcon";

export default function Header() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] || "en";

  const [clicked, setClicked] = useState(false);
  console.log("clicked", clicked);

  const language = lang === "tr" || lang === "en" ? lang : "en";

  return (
    <div className="relative px-5 bg-transparent text-white font-medium text-lg font-serif">
      {/* lg ve üstü boyutlarda gösterilecek içerik */}
      <div className="hidden lg:grid lg:grid-cols-3">
        <a className="flex items-center gap-2" href="/">
          <BrandIcon />
        </a>
        <div className="hidden lg:flex justify-between items-center gap-10">
          <Menu
            lang={language}
            className={"border-b-2 hover:scale-110 transition-all duration-300"}
          />
        </div>

        <LanguagePicker currentLang={lang} />
      </div>
      {/* lg ve altı boyutlarda gösterilecek içerik */}
      <div className="lg:hidden flex justify-between items-center">
        <>
          {clicked ? (
            <SideNav language={lang} />
          ) : (
            <>
              <button onClick={() => setClicked(!clicked)} className="h-9 w-9">
                <HamburgerIcon />
              </button>
              <a className="flex items-center gap-2" href="/">
                <BrandIcon />
              </a>
              <LanguagePicker currentLang={lang} />
            </>
          )}
        </>
      </div>
    </div>
  );
}
