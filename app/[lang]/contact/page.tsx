import React from "react";
import ContactPage from "@/components/PageComponents/ContactPage";

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
  return <ContactPage />;
}

export default About;
