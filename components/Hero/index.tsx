import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/Hero.png";
import BrandIcon from "@/icons/BrandIcon";
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
        className="w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <BrandIcon className="w-full h-full" fill="black" />
        <p className={`mt-4 text-5xl text-gray-700 ${lato.className}`}>
          {data.title}
        </p>
      </div>
    </div>
  );
}
