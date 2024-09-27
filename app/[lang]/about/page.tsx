import React from "react";
import AboutPage from "@/components/PageComponents/AboutPage";

// Statik parametreleri önceden belirleyin
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }, { lang: "de" }, { lang: "ar" }];
}

function About() {
  return <AboutPage />;
}

export default About;
