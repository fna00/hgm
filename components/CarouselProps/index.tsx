"use client";

import React, { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';  // next/image'ı import ediyoruz

interface CarouselProps {
  images: StaticImageData[];  // Resimler StaticImageData türünde olacak
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 12000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className=' flex gap-8 items-center   '>
      <button className='text-xl text-black' onClick={prevSlide}>Back</button>
      <div>
        {images.map((image, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            <Image src={image} alt={`Slide ${index}`}  className='max-w-[600px] max-h-[300px] object-cover'/> {/* Image bileşeni kullanıyoruz */}
          </div>
        ))}
      </div>
      <button className='text-xl text-black' onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
