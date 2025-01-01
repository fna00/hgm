import React from "react";
import AboutPage from "@/components/PageComponents/AboutPage";


export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "tr" },
    { lang: "de" },
  ];
}


function About() {
  return <AboutPage />;
}

export default About;
