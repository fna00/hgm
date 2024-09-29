"use client";

// import BrandIcon from "@/icons/BrandIcon";
// import React, { useState } from "react";
// import LanguagePicker from "./LanguagePicker";
// import Menu from "./Menu";
// import { usePathname } from "next/navigation";
// import SideNav from "./SideNav";
// import HamburgerIcon from "@/icons/HamburgerIcon";

// export default function Header() {
//   const pathname = usePathname();
//   const pathSegments = pathname.split("/").filter(Boolean);
//   const lang = pathSegments[0] || "en";

//   const [clicked, setClicked] = useState<boolean>(false);

//   const language =
//     lang === "tr" || lang === "en" || lang == "ar" || lang == "de"
//       ? lang
//       : "en";

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 bg-customBlue">
//       <div className="relative px-5 bg-transparent text-white font-medium text-lg font-serif">
//         <div className="hidden lg:grid lg:grid-cols-3">
//           <a className="flex items-center gap-2" href="/">
//             <BrandIcon className={"h-20 w-40"} fill="white" />
//           </a>
//           <div className="hidden lg:flex justify-between items-center gap-10 flex-auto">
//             <Menu
//               lang={language}
//               className={
//                 "flex flex-grow justify-center items-center border-b-2 hover:scale-110 transition-all duration-300 whitespace-nowrap"
//               }
//             />
//           </div>
//           <LanguagePicker currentLang={lang} />
//         </div>
//       </div>
{
  /* <div className="relative container mx-auto px-4 lg:hidden flex justify-between items-center">
  <>
    {clicked ? (
            <SideNav language={lang} onClose={() => setClicked(false)} />
          ) : (
            <>
              <button onClick={() => setClicked(!clicked)} className="h-9 w-9">
                <HamburgerIcon />
              </button>
              <a className="flex items-center gap-2" href="/">
                <BrandIcon className={"h-20 w-40"} fill="white" />
              </a>
              <LanguagePicker currentLang={lang} />
            </>
          )}
        </>
      </div> */
}
//     </div>
//   );
// }

// import BrandIcon from "@/icons/BrandIcon";
// import React, { useState } from "react";
// import LanguagePicker from "./LanguagePicker";
// import Menu from "./Menu";
// import { usePathname } from "next/navigation";
// import SideNav from "./SideNav";
// import HamburgerIcon from "@/icons/HamburgerIcon";
// import clsx from "clsx";

// export default function Header() {
//   const pathname = usePathname();
//   const pathSegments = pathname.split("/").filter(Boolean);
//   const lang = pathSegments[0] || "en";

//   const [clicked, setClicked] = useState<boolean>(false);

//   const language =
//     lang === "tr" || lang === "en" || lang == "ar" || lang == "de"
//       ? lang
//       : "en";

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 bg-customBlue">
//       <div className="relative px-5 bg-transparent text-white font-medium text-lg font-serif">
//         <div className="hidden lg:flex justify-between items-center z-50">
//           <a className="items-center gap-2" href="/">
//             <BrandIcon className={"h-20 w-40"} fill="white" />
//           </a>
//           <LanguagePicker currentLang={lang} />
//         </div>
//         <div className="hidden lg:absolute top-6 left-0 right-0 lg:flex justify-center items-center gap-10 z-40">
//           <Menu
//             lang={language}
//             className={
//               "flex justify-center items-center border-b-2 hover:scale-110 transition-all duration-300"
//             }
//           />
//         </div>
//       </div>
//       <div className="relative container mx-auto lg:hidden flex justify-between items-center">
//         <>
//           {clicked ? (
//             <SideNav language={lang} onClose={() => setClicked(false)} />
//           ) : (
//             <div
//               className={clsx(
//                 "relative flex items-center justify-between w-full p-4"
//               )}
//             >
//               <button onClick={() => setClicked(!clicked)} className="h-9 w-9">
//                 <HamburgerIcon />
//               </button>
//               <a
//                 className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2"
//                 href="/"
//               >
//                 <BrandIcon className={"h-20 w-40"} fill="white" />
//               </a>
//               <LanguagePicker currentLang={lang} />
//             </div>
//           )}
//         </>
//       </div>
//     </div>
//   );
// }

import BrandIcon from "@/icons/BrandIcon";
import React, { useState } from "react";
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

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-customBlue">
      <div className="relative px-5 bg-transparent text-white font-medium text-lg font-serif">
        <div className="hidden lg:flex justify-between items-center z-50">
          <a className="items-center gap-2" href="/">
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
            <SideNav language={lang} onClose={() => setClicked(false)} />
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
