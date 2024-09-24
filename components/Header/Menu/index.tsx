"use client";

import React from "react";
import Link from "next/link";
import { useFetchPageContent } from "@/hooks/useFectchPageContent";

interface MenuProps {
  lang: string;
  className?: string;
}

function Menu({ lang, className }: MenuProps) {
  const { data, isLoading, isError } = useFetchPageContent(lang);

  const menuItems = data?.menu || [];

  if (isLoading) return <p>Loading menu...</p>;
  if (isError) return <p>Could not load content</p>;

  return (
    <>
      {menuItems.map((item: string, index: number) => (
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
}

export default Menu;
