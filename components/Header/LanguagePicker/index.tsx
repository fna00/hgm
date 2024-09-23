"use client";

import { useRouter } from "next/navigation";
import React from "react";

const LanguagePicker = ({ currentLang }: { currentLang: string }) => {
  const router = useRouter();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    router.push(`/${selectedLanguage}`);
  };

  return (
    <div className="flex justify-end items-center text-black">
      <select
        onChange={handleLanguageChange}
        value={currentLang}
        className="p-2 bg-transparent text-white"
      >
        <option value="en" className="text-black">
          EN
        </option>
        <option value="tr" className="text-black">
          TR
        </option>
      </select>
    </div>
  );
};

export default LanguagePicker;
