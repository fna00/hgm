// "use client";

// import AE from "@/icons/flag/AE";
// import { useRouter, usePathname } from "next/navigation";
// import React from "react";

// const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
//   const languages = ["en", "tr", "ar", "de"];
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleLanguageChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const selectedLanguage = event.target.value;
//     const newPathname = pathname.replace(
//       `/${currentLang}`,
//       `/${selectedLanguage}`
//     );
//     router.push(newPathname);
//   };

//   return (
//     <div className="flex justify-end items-center text-black">
//       <select
//         onChange={handleLanguageChange}
//         value={currentLang}
//         className="p-2 bg-transparent text-white"
//       >
//         {languages.map((lang) => (
//           <option key={lang} value={lang} className="text-black">
//             <div>
//               <div>{lang.toUpperCase()}</div>
//             </div>
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default LanguagePicker;

"use client";

import AR from "@/icons/flag/AR";
import DE from "@/icons/flag/DE";
import EN from "@/icons/flag/EN";
import TR from "@/icons/flag/TR";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";

const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  const languages = [
    { code: "en", name: "English", icon: <EN /> },
    { code: "tr", name: "Turkish", icon: <TR /> },
    { code: "ar", name: "Arabic", icon: <AR /> },
    { code: "de", name: "German", icon: <DE /> },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (selectedLanguage: string) => {
    const newPathname = pathname.replace(
      `/${currentLang}`,
      `/${selectedLanguage}`
    );
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative flex justify-end items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 bg-transparent text-white"
      >
        {languages.find((lang) => lang.code === currentLang)?.icon}
        <span className="ml-2">
          {languages
            .find((lang) => lang.code === currentLang)
            ?.code.toUpperCase()}
        </span>
      </button>
      {isOpen && (
        <div className="absolute top-full w-20 bg-white border border-gray-300 rounded shadow-lg">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            >
              {lang.icon}
              <span className="ml-2 text-black">
                {lang.code.toLocaleUpperCase()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
