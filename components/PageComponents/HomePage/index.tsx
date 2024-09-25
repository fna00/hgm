import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import React from "react";

interface HomePageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function HomePage({ data }: HomePageProps) {
  console.log(data);
  return (
    <div>
      <Header />
      <Hero isHomePage={true} />
      {/* <div className="relative mt-[100vh] bg-white">
        <div className="container mx-auto px-4 py-8 text-black">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className="text-lg">{data.content}</p>
        </div>
      </div> */}
      <div className="bg-gradient-to-b from-customWhite to-customWhite">
        <InfoCard className="" />
      </div>
    </div>
  );
}
