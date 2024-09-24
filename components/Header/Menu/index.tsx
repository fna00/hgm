// import React from "react";
// import Link from "next/link";
// import enContent from "@/shared/en/content.json";
// import trContent from "@/shared/tr/content.json";
// import { getContent } from "@/utils/getContent";

// const content = {
//   en: enContent,
//   tr: trContent,
// };

// type Language = keyof typeof content;

// interface MenuProps {
//   lang: Language;
//   className?: string;
// }

// const Menu = ({ lang, className }: MenuProps) => {
//   const content = getContent(lang); // İçeriği dinamik olarak yükle
//   const menuItems = content?.menu || [];

//   if (!menuItems.length) return <p>No menu available for this language</p>;

//   return (
//     <>
//       {menuItems.map((item: string, index: number) => (
//         <Link
//           key={index}
//           className={className}
//           href={`/${lang}${
//             item.toLowerCase() === "home" ? "" : `/${item.toLowerCase()}`
//           }`}
//         >
//           {item}
//         </Link>
//       ))}
//     </>
//   );
// };

// export default Menu;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getContent } from "@/utils/getContent";

interface MenuProps {
  lang: string;
  className?: string;
}

const Menu = ({ lang, className }: MenuProps) => {
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await getContent(lang); // Await the promise

        setMenuItems(content.menu || []); // Menü öğelerini ayarla
      } catch (error) {
        console.error(error);
        setError("Could not load content");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [lang]);
  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className={className}
          href={`/${lang}${
            item.toLowerCase() === "home" ? "" : `/${item.toLowerCase()}`
          }`}
        >
          {item}
        </Link>
      ))}
    </>
  );
};

export default Menu;
