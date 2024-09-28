"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Position {
  title: string;
  description: string;
  requirements: string;
}

interface CareerCardProps {
  data: {
    title: string;
    content: string;
    positions: Position[];
  };
  lang: string;
}

export default function CareerPage({ data, lang }: CareerCardProps) {
  const router = useRouter();

  const handleApplyClick = (position: Position) => {
    router.push(
      `/${lang}/contact?subject=${encodeURIComponent(position.title)}`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8 text-black">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="text-lg mt-4">{data.content}</p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
        {data.positions.map((position, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{position.title}</h2>
              <p className="text-lg mb-2">{position.description}</p>
              <h3 className="text-xl font-semibold">Requirements:</h3>
              <p className="text-lg">{position.requirements}</p>
            </div>
            <button
              className="p-4 px-8 bg-customBlue text-white mt-4 self-start"
              onClick={() => handleApplyClick(position)}
            >
              Başvur
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
