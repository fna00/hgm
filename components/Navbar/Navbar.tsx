"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { usePathname } from "next/navigation";
import HamburgerIcon from "@/icons/HamburgerIcon";
import clsx from "clsx";
//mport LanguagePicker from "../Header/LanguagePicker";
import Menu from "../Header/Menu";
import SideNav from "../Header/SideNav";

// import {RootState} from '@/app/store/store';
// import { toggleOpening } from "@/app/store/openingSlice";
// import {useDispatch, useSelector } from "react-redux";

export default function Header() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] || "en";

  const [clicked, setClicked] = useState<boolean>(false);

  const language =
  lang === "tr" || lang === "en" || lang === "de"
    ? lang
    : "en";

    // const dispatch = useDispatch();

    // const isOpen = useSelector((state: RootState) => state.opening.isOpen); 
  
    // const toggleSidebar = () => {
    //   dispatch(toggleOpening()); 
    // };
  


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
    <div className="    w-full z-50 bg-white">
        <div className="relative px-5 bg-transparent text-black font-medium text-lg font-serif">
            <div className="hidden lg:flex justify-between items-center z-50">
                <a className="items-center gap-2 p-2 w-24 h-20 overflow-hidden" href="/en/home" id="brandIcon">
                  <Image
                    width={250}
                    height={110}
                    alt="image"
                    src="/logo2.png"
                    className="pt-2"
                    />
                </a>
                
          {/* <LanguagePicker currentLang={lang} /> */}

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
                {/* <BrandIcon className={"h-20 w-40"} fill="white" /> */}
                <Image
                    width={100}
                    height={50}
                    alt="image"
                    src="/logo2.png"
                    />
                    </a>
              {/* <LanguagePicker currentLang={lang} /> */}
            </div>
            )}
        </>
        </div>
    </div>
  );
}
