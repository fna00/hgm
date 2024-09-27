"use client";

import React from "react";
import Header from "../../Header";
import DescriptionBox from "@/components/DescriptionBox";
import TechnologiesTable from "@/components/TechnologiesTable";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import ar from "../../../shared/ar/content.json";
import de from "../../../shared/de/content.json";
import { useParams } from "next/navigation";
import Footer from "../../Footer"; // Footer bileşenini içe aktarın

function ProjectPage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
    lang === "en" ? en : lang === "tr" ? tr : lang === "ar" ? ar : de;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow relative container mx-auto px-4 mt-20">
        <DescriptionBox
          className={""}
          title={data?.project.title}
          content={data?.project.content}
        />
        <TechnologiesTable technologies={data?.project.technologies} />
      </div>
      <Footer data={data.footer} />
    </div>
  );
}

export default ProjectPage;
