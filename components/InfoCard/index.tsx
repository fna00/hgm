import React from "react";

interface Card {
  data: {
    cards: {
      title: string;
      content: string;
    }[];
  };
}

export default function InfoCard({ data }: Card) {
  return (
    <div className=" pt-16 lg:pt-20">
      <div className=" relative text-black">
        <div className="container grid grid-cols-1 gap-4 md:px-28 md:py-4 p-4">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="relative md:flex md:justify-between md:flex-row items-center p-6 bg-gray-100 rounded-2xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2 pl-10">{card.title}</h2>
              <ul className="text-lg list-disc list-inside pr-10">
                {card.content.split(". ").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
