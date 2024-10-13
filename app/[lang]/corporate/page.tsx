import CorporatePage from "@/components/PageComponents/CorporatePage";
import React from "react";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }, { lang: "de" }, { lang: "ar" }];
}

function Corporate() {
  return <CorporatePage />;
}

export default Corporate;
