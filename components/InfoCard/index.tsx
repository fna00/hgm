"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface Card {
  data: {
    cards: {
      title: string;
      content: string;
    }[];
  };

  lang: string;
}

const handleScroll = () => {
  const elementsRight = document.querySelectorAll(".slide-right");
  const elementsLeft = document.querySelectorAll(".slide-left");

  elementsRight.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("slide-in-right");
    }
  });

  elementsLeft.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("slide-in-left");
    }
  });
};

export default function InfoCard({ data, lang }: Card) {
  const router = useRouter();

  const handleApplyClick = (position: string) => {
    router.push(`/${lang}/contact?subject=${encodeURIComponent(position)}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-black lg:mx-40 container mx-auto px-4">
      {data.cards.map((card, index) => (
        <div
          key={index}
          className={clsx(
            "w-full lg:flex lg:justify-between p-10 shadow-xl my-4 rounded-2xl lg:rounded-full min-h-56",
            index % 2 === 0
              ? "bg-gray-100 flex-row-reverse slide-right"
              : "bg-gray-300 slide-left "
          )}
        >
          <div className="container mx-auto content-center">
            <h2 className="flex justify-center text-2xl font-bold text-black">
              {card.title}
            </h2>
            <button
              onClick={() => handleApplyClick(card.title)}
              className="flex justify-center p-4 mt-4 container mx-auto px-4 w-1/3 rounded-full bg-slate-400 text-white"
            >
              Teklif Ver
            </button>
          </div>
          <div className="container mx-auto content-center">
            <div className="flex justify-center ">
              <ul className="text-lg list-disc list-inside">
                {card.content.split(". ").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
