import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/2023-01-24.jpg";
// import BrandIcon from "@/icons/BrandIcon";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: "300",
});

interface HeroProps {
  data: {
    title: string;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        src={HeroImg}
        alt="Hero Img"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center text-center text-white pl-4">
        {/* <BrandIcon className="w-full h-full " fill="white" /> */}
        {/* <img src="/logo2.png" alt="logo"
            className="w-32 h-62 pb-2" /> */}
        <p className={`mt-4 text-5xl text-white ${lato.className}`}>
          {data.title}
        </p>
      </div>
    </div>
  );
}
