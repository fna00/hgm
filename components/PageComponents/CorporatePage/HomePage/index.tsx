"use client";

//import InfoCard from "@/components/InfoCard";
import { useParams } from "next/navigation";
import React from "react";
import en from "../../../../shared/en/content.json";
import tr from "../../../../shared/tr/content.json";
import de from "../../../../shared/de/content.json";
import Hero from "@/components/Hero";

export default function HomePage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
  lang === "en" ? en : lang === "tr" ? tr : de;


  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero data={data.home} />
      {/* <InfoCard data={data.home} lang={lang} /> */}
    </div>
  );
}
