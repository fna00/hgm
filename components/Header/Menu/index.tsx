"use client";

import React from "react";
import Link from "next/link";
import { useFetchPageContent } from "@/hooks/useFectchPageContent";

interface MenuProps {
  lang: string;
  className?: string;
}

export default function Menu({ lang, className }: MenuProps) {
  const { data, isLoading, isError } = useFetchPageContent(lang);
  const navigateKeys = ["home", "about", "career", "project", "contact"];

  const menuItems = data?.menu || [];

  if (isLoading) return <p>Loading menu...</p>;
  if (isError) return <p>Could not load content</p>;

  return (
    <>
      {menuItems.map((item: string, index: number) => {
        const key = navigateKeys[index];
        if (!key) return null;

        return (
          <Link key={index} className={className} href={`/${lang}${`/${key}`}`}>
            {item}
          </Link>
        );
      })}
    </>
  );
}
