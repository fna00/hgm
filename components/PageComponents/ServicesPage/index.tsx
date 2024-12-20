"use client";

import React from "react";
import en from "../../../shared/en/content.json";
import tr from "../../../shared/tr/content.json";
import de from "../../../shared/de/content.json";
import { useParams } from "next/navigation";

import Carousel from "@/components/CarouselProps";

import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';

function ServicesPage() {
  const params = useParams();
  const lang = params.lang as string;

  const data =
  lang === "en" ? en : lang === "tr" ? tr : de;

  const images = [slide1, slide2, slide3];
  
  return (
    <div>

    
    <div className="flex flex-col justify-between bg-white min min-h-screen">
      <div className="flex flex-col  mt-20 content-center  h-full">
        <div className="container mx-auto px-4 py-8 text-black">
          <h1 className="text-3xl font-bold mb-4 border-b-2">{data?.services.title}</h1>
          <p className="text-lg">{data?.services.content}</p>
        </div>
        
        <div className="flex justify-center items-center ">
          <Carousel
            images={images} 
          />
        </div>
        
      </div>
    </div>
     
    </div>
  );
}

export default ServicesPage;