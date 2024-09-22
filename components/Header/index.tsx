import BrandIcon from "@/icons/BrandIcon";
import Link from "next/link";
import React from "react";

const menuItems = ["Anasayfa", "Hakkimizda", "Projeler", "Kariyer"];
export default function Header() {
  return (
    <div className="relative px-5 bg-transparent text-white font-medium text-lg font-serif">
      <div className="grid grid-cols-3">
        <div>
          <BrandIcon />
        </div>
        <div className="flex justify-between items-center gap-10">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className="border-b-2"
              href={item.toLocaleLowerCase()}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex justify-end items-center">EN</div>
      </div>
    </div>
  );
}
