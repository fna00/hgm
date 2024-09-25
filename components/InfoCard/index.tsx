// import clsx from "clsx";
// import React from "react";

// interface InfoCardProps {
//   className: string;
// }

// export default function InfoCard({ className }: InfoCardProps) {
// const cards = [
//   {
//     imgSrc: "https://via.placeholder.com/50",
//     title: "Yazılım Geliştirme",
//     content: " Web Uygulamaları. Mobil Uygulamalar. UI/UX Tasarım",
//   },
//   {
//     imgSrc: "https://via.placeholder.com/50",
//     title: "Pazarlama Çözümleri",
//     content: "This is the content for card 2.",
//   },
//   {
//     imgSrc: "https://via.placeholder.com/50",
//     title: "Mekatronik Çözümler",
//     content: "This is the content for card 3.",
//   },
//   {
//     imgSrc: "https://via.placeholder.com/50",
//     title: "Card 4",
//     content: "This is the content for card 4.",
//   },
// ];

//   return (
//     <div className={clsx("container mx-auto text-black p-4", className)}>
//       {cards.map((card, index) => (
//         <div
//           key={index}
//           className={`grid grid-cols-1 lg:grid-cols-2 gap-2 mb-8 ${
//             index % 2 === 0 ? "" : "lg:flex-row-reverse"
//           }`}
//         >
//           <div className="flex justify-center items-center rounded-2xl shadow-2xl p-4">
//             <h2 className="text-xl font-bold mb-2">{card.title}</h2>
//           </div>
//           <div className="flex flex-col justify-center items-center p-4 bg-transparent">
//             <p>{card.content}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";
import clsx from "clsx";

interface InfoCardProps {
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ className }) => {
  const cards = [
    {
      imgSrc: "https://via.placeholder.com/50",
      title: "Yazılım Geliştirme",
      content: " Web Uygulamaları. Mobil Uygulamalar. UI/UX Tasarım",
    },
    {
      imgSrc: "https://via.placeholder.com/50",
      title: "Pazarlama Çözümleri",
      content: "This is the content for card 2.",
    },
    {
      imgSrc: "https://via.placeholder.com/50",
      title: "Mekatronik Çözümler",
      content: "This is the content for card 3.",
    },
    {
      imgSrc: "https://via.placeholder.com/50",
      title: "Card 4",
      content: "This is the content for card 4.",
    },
  ];

  return (
    <div
      className={clsx(
        "container mx-auto p-4 grid grid-cols-1 gap-4 text-black",
        className
      )}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          className={clsx(
            "flex items-center gap-5",
            // Her index için çift veya tek olduğuna göre flex düzenini ters çevirme
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          )}
        >
          <div className="flex-1 border border-black p-4 rounded-2xl shadow-2xl">
            <h2 className="font-bold text-lg">{card.title}</h2>
          </div>
          <div className="flex-1 border border-black p-4 rounded-2xl shadow-2xl">
            <p className="text-sm whitespace-pre-wrap">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
