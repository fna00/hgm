import React from "react";
import HomePage from "@/components/PageComponents/HomePage";

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

function Home() {
  return <HomePage />;
}

export default Home;
