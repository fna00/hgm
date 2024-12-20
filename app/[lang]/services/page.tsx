import React from "react";
import ServicesPage from "@/components/PageComponents/ServicesPage";

// Statik parametreleri önceden belirleyin
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }, { lang: "de" },];
}

function Service() {
  return <ServicesPage />;
}

export default Service;