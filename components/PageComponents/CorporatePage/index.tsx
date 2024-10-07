"use client";

import React from "react";
import Header from "../../Header";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import ar from "../../../shared/ar/content.json";
import de from "../../../shared/de/content.json";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Dancing_Script, Lato } from "next/font/google";

const dancingScript = Dancing_Script({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: "700",
});

export default function CorporatePage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
    lang === "en" ? en : lang === "tr" ? tr : lang === "ar" ? ar : de;
  return (
    <div>
      <div className="flex text-black flex-col min-h-screen">
        <Header />
        <div className="flex-grow mt-20 content-center bg-white border-b-[100px]">
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">
              {data?.corporate.directors.title}
            </h1>

            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 text-lg">
              {data?.corporate.directors.members.map((member, index) => (
                <div key={index} className="flex flex-col justify-between p-4">
                  <div>
                    <Image
                      src="https://placehold.jp/400x500.png"
                      className="rounded-2xl"
                      width={400}
                      height={500}
                      alt={member.name}
                    />
                    <h2 className="text-2xl font-bold my-4">{member.name}</h2>{" "}
                  </div>
                  <div>
                    <p className="text-lg">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-grow py-14 content-center bg-white">
          <div className="container mx-auto px-4">
            <h1 className={`text-5xl mb-4 text-gray-800 ${lato.className}`}>
              {data?.corporate.chairperson.title}
            </h1>
            <p className="text-lg text-gray-600">
              <span
                className={`first-three-letters text-5xl ${dancingScript.className}`}
              >
                {data?.corporate?.chairperson?.message.slice(0, 4)}
              </span>
              <span className={`text-3xl ${dancingScript.className}`}>
                {data?.corporate?.chairperson?.message.slice(4, 12)}
              </span>
              {data?.corporate?.chairperson?.message.slice(12)}
            </p>
          </div>
        </div>

        <Footer data={data.footer} />
      </div>
    </div>
  );
}
