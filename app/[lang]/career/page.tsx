import React from "react";
import CareerPage from "@/components/PageComponents/CareerPage";

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
  return <CareerPage />;
}

export default About;
