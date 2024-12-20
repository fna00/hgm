"use client";

import React from "react";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import de from "../../../shared/de/content.json";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";

export default function CareerPage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
  lang === "en" ? en : lang === "tr" ? tr : de;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow  py-8 text-black mt-20 bg-white">
        sdfghjklşi
      </div>
      <Footer data={data.footer} />
    </div>
  );
}
