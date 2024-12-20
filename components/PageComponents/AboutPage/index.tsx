"use client";

import React from "react";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import de from "../../../shared/de/content.json";
import { useParams } from "next/navigation";

function AboutPage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
  lang === "en" ? en : lang === "tr" ? tr : de;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow mt-20 content-center bg-gray-100 min-h-56">
        <div className="container mx-auto px-4 py-8 text-black">
          <h1 className="text-3xl font-bold mb-4 border-b-2">{data?.about.title}</h1>
          <p className="text-lg">{data?.about.content}</p>
        </div>
      </div>
      <div className="flex-grow py-8 content-center bg-white min-h-56">
        <div className="container mx-auto px-4 text-black">
          <h1 className="text-2xl font-bold mb-4  border-b-2">
            {data?.about.mission.title}
          </h1>
          <p className="text-lg">{data?.about.mission.content}</p>
        </div>
      </div>
      <div className="flex-grow content-center bg-gray-100 min-h-56">
        <div className="container mx-auto px-4 py-8 text-black">
          <h1 className="text-2xl font-bold mb-4 border-b-2">
            {data?.about.vision.title}
          </h1>
          <p className="text-lg">{data?.about.vision.content}</p>
        </div>
      </div>
      
    </div>
  );
}

export default AboutPage;
