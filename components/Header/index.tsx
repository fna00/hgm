import BrandIcon from "@/icons/BrandIcon";
import React from "react";

export default function Header() {
  return (
    <div className="relative px-5 bg-transparent text-white font-bold text-lg font-serif">
      <div className="flex justify-between">
        <div>
          <BrandIcon />
        </div>
        <div className="flex justify-between items-center gap-10">
          <div>Anasayfa</div>
          <div>Hakkımızda</div>
          <div>Projeler</div>
          <div>Kariyer</div>
          <div>
            <div>Language Picker</div>
          </div>
        </div>
      </div>
    </div>
  );
}
