// import clsx from "clsx";
// import React from "react";

// interface Card {
//   data: {
//     cards: {
//       title: string;
//       content: string;
//     }[];
//   };
// }

// export default function InfoCard({ data }: Card) {
//   return (
//     <div className="text-black">
//       {data.cards.map((card, index) => (
//         <div
//           key={index}
//           className={clsx(
//             "w-full flex justify-between p-10 shadow-xl",
//             index % 2 === 0 ? "bg-transparent flex-row-reverse" : "bg-gray-100"
//           )}
//         >
//           <div className="container mx-auto content-center">
//             <h2 className="flex justify-center text-2xl font-bold text-customBlue">
//               {card.title}
//             </h2>
//           </div>
//           <div className="container mx-auto content-center">
//             <div className="flex justify-center ">
//               <ul className="text-lg list-disc list-inside">
//                 {card.content.split(". ").map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import clsx from "clsx";
import React, { useEffect } from "react";

interface Card {
  data: {
    cards: {
      title: string;
      content: string;
    }[];
  };
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
export default function InfoCard({ data }: Card) {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-black">
      {data.cards.map((card, index) => (
        <div
          key={index}
          className={clsx(
            "w-full flex justify-between p-10 shadow-xl",
            index % 2 === 0
              ? "bg-transparent flex-row-reverse slide-right"
              : "bg-gray-100 slide-left"
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
