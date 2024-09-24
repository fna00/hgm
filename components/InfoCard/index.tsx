import clsx from "clsx";
import React from "react";

interface InfoCardProps {
  className: string;
}

export default function InfoCard({ className }: InfoCardProps) {
  const cards = [
    {
      id: 1,
      imgSrc: "https://via.placeholder.com/50",
      title: "Yazılım Geliştirme",
      content: " Web Uygulamaları. Mobil Uygulamalar. UI/UX Tasarım",
    },
    {
      id: 2,
      imgSrc: "https://via.placeholder.com/50",
      title: "Pazarlama Çözümleri",
      content: "This is the content for card 2.",
    },
    {
      id: 3,
      imgSrc: "https://via.placeholder.com/50",
      title: "Mekatronik Çözümler",
      content: "This is the content for card 3.",
    },
    {
      id: 4,
      imgSrc: "https://via.placeholder.com/50",
      title: "Card 4",
      content: "This is the content for card 4.",
    },
  ];

  return (
    <div className={clsx("container mx-auto px-4 text-black", className)}>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-2 mb-8 ${
            index % 2 === 0 ? "lg:grid-cols-2-reverse" : ""
          }`}
        >
          <>
            <div className="flex justify-center items-center rounded-2xl shadow-2xl">
              1
            </div>
            <div className="flex flex-col justify-center items-center p-4 bg-transparent">
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p>{card.content}</p>
            </div>
          </>
        </div>
      ))}
    </div>
  );
}
