import React, { Suspense } from "react";
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

function Contact() {
  return <ContactPage />;
}

export default function WrappedContact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
  );
}
