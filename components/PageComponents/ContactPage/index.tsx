"use client";

import React from "react";
import Header from "../../Header";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import ar from "../../../shared/ar/content.json";
import de from "../../../shared/de/content.json";
import { useParams } from "next/navigation";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
    lang === "en" ? en : lang === "tr" ? tr : lang === "ar" ? ar : de;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow text-black">
        <div className=" bg-white">
          <ContactUs data={data.contact} />
        </div>
      </div>
      <div className="container p-4 mx-auto flex flex-col md:flex-row justify-center gap-4">
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1LxKJDStCDOgW6GagMpPcexvKs-mukpM&ehbc=2E312F"
            width="100%"
            height="480"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="flex-1 bg-gray-100 text-black p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Address:</strong>
            {data.footer.address.line1 + " " + data.footer.address.line2}
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> {data.footer.contact.phone}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {data.footer.contact.email}
          </p>
          <h2 className="text-2xl font-bold mt-4 mb-4">Business Hours</h2>
          <p className="mb-2">
            <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
          </p>
          <p className="mb-2">
            <strong>Saturday:</strong> 10:00 AM - 4:00 PM
          </p>
          <p className="mb-2">
            <strong>Sunday:</strong> Closed
          </p>
        </div>
      </div>
      <Footer data={data.footer} />
    </div>
  );
}
