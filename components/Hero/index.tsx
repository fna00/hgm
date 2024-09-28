import React from "react";
import Image from "next/image";
import HeroImg from "../../assets/Hero.png";
import BrandIcon from "@/icons/BrandIcon";

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
        <p className="mt-4 text-3xl italic font-dancingScript text-black">
          {data.title}
        </p>
      </div>
    </div>
  );
}
