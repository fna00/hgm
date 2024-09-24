// "use client";

// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";

// const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
//   const [languages, setLanguages] = useState<string[]>([
//     "en",
//     "tr",
//     "ar",
//     "de",
//   ]); // Default languages as fallback
//   const router = useRouter();

//   useEffect(() => {
//     const fetchLanguages = async () => {
//       const res = await fetch("/api/languages"); // Yeni API rotasını kullan
//       const data = await res.json();
//       setLanguages(data.languages);
//     };

//     fetchLanguages();
//   }, []);

//   const handleLanguageChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const selectedLanguage = event.target.value;
//     router.push(`/${selectedLanguage}`);
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
import React, { useEffect, useState } from "react";

const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  const [languages, setLanguages] = useState<string[]>([
    "en",
    "tr",
    "ar",
    "de",
  ]); // Default languages as fallback
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchLanguages = async () => {
      const res = await fetch("/api/languages"); // Yeni API rotasını kullan
      const data = await res.json();
      setLanguages(data.languages);
    };

    fetchLanguages();
  }, []);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    const newPathname = pathname.replace(
      `/${currentLang}`,
      `/${selectedLanguage}`
    );
    router.push(newPathname);
  };

  return (
    <div className="flex justify-end items-center text-black">
      <select
        onChange={handleLanguageChange}
        value={currentLang}
        className="p-2 bg-transparent text-white"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang} className="text-black">
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguagePicker;
