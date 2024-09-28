import clsx from "clsx";
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
    <div className="text-black">
      {data.cards.map((card, index) => (
        <div
          key={index}
          className={clsx(
            "w-full flex justify-between p-10",
            index % 2 === 0 ? "bg-transparent" : "bg-gray-100"
          )}
        >
          <div className="container mx-auto content-center">
            <h2 className="flex justify-center text-2xl font-bold text-customBlue">
              {card.title}
            </h2>
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
