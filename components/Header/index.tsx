"use client";

import BrandIcon from "@/icons/BrandIcon";
import React, { useEffect, useState } from "react";
import LanguagePicker from "./LanguagePicker";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import SideNav from "./SideNav";
import HamburgerIcon from "@/icons/HamburgerIcon";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] || "en";

  const [clicked, setClicked] = useState<boolean>(false);

  const language =
    lang === "tr" || lang === "en" || lang == "ar" || lang == "de"
      ? lang
      : "en";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sideNavElement = document.getElementById("side-nav");
      if (sideNavElement && !sideNavElement.contains(event.target as Node)) {
        setClicked(false);
      }
    };

    if (clicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clicked]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="relative px-5 bg-transparent text-white font-medium text-lg font-serif">
        <div className="hidden lg:flex justify-between items-center z-50">
          <a className="items-center gap-2" href="/" id="brandIcon">
            <BrandIcon className={"h-20 w-40"} fill="white" />
          </a>

          <LanguagePicker currentLang={lang} />
        </div>
        <div className="lg:absolute lg:flex hidden top-6 left-1/2 transform -translate-x-1/2 px-4">
          <Menu
            lang={language}
            className={"flex justify-center px-4 items-center"}
          />
        </div>
      </div>
      <div className="relative container mx-auto lg:hidden flex justify-between items-center">
        <>
          {clicked ? (
            <div id="side-nav">
              <SideNav language={lang} onClose={() => setClicked(false)} />
            </div>
          ) : (
            <div
              className={clsx(
                "relative flex items-center justify-between w-full p-4"
              )}
            >
              <button onClick={() => setClicked(!clicked)} className="h-9 w-9">
                <HamburgerIcon />
              </button>
              <a
                className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2"
                href="/"
              >
                <BrandIcon className={"h-20 w-40"} fill="white" />
              </a>
              <LanguagePicker currentLang={lang} />
            </div>
          )}
        </>
      </div>
    </div>
  );
}
