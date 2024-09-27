"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  const languages = ["en", "tr", "ar", "de"];
  const router = useRouter();
  const pathname = usePathname();

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
