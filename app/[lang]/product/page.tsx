import React from "react";
import ProductPage from "@/components/PageComponents/ProductPage";

// Statik parametreleri önceden belirleyin
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tr" }, { lang: "de" },];
}

function Product() {
  return <ProductPage />;
}

export default Product;
