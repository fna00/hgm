// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import React from "react";
// import ReactFlagsSelect from "react-flags-select";

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
//             {lang.toUpperCase()}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default LanguagePicker;

"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  const languages = ["US", "TR", "AR", "DE"];
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(currentLang.toUpperCase());

  const handleLanguageChange = (code: string) => {
    const selectedLanguage = code.toLowerCase();
    const newPathname = pathname.replace(
      `/${currentLang}`,
      `/${selectedLanguage}`
    );
    router.push(newPathname);
    setSelected(code);
  };

  return (
    <div className="flex justify-end items-center text-white">
      <ReactFlagsSelect
        countries={languages}
        customLabels={{
          US: "EN",
          TR: "TR",
          AR: "AR",
          DE: "DE",
        }}
        selected={selected}
        onSelect={handleLanguageChange}
        className="p-2 bg-transparent text-black"
      />
    </div>
  );
};

export default LanguagePicker;
