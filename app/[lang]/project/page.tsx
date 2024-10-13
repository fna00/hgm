import React from "react";
import ProjectPage from "@/components/PageComponents/ProjectPage";

// Statik parametreleri önceden belirleyin
export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "tr" },
    { lang: "de" },
    { lang: "ar" },
    // Diğer diller varsa buraya ekleyin
  ];
}

function About() {
  return <ProjectPage />;
}

export default About;
