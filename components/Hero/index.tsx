// import React from "react";

// export default function Hero() {
//   return (
//     <div className="absolute w-full h-[100vh] bg-gradient-to-b from-customBlue to-customWhite flex items-center justify-center">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="w-32 h-32 bg-white opacity-30 rounded-full absolute bottom-0 animation-float animation-delay-1"></div>
//         <div className="w-24 h-24 bg-white opacity-20 rounded-full absolute bottom-10 right-10 animation-float animation-delay-2"></div>
//         <div className="w-40 h-40 bg-white opacity-40 rounded-full absolute bottom-20 left-10 animation-float animation-delay-3"></div>
//       </div>
//       <div className="relative text-center text-white">
//         <h1 className="text-6xl font-bold">HGM Software</h1>
//         <p className="mt-4 text-xl">Dijital Çözümler, Güçlü Yarınlar</p>
//         <button className="mt-8 px-6 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-indigo-600 hover:text-white transition">
//           Bize Ulaşın
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";

interface HeroProps {
  isHomePage: boolean;
}

export default function Hero({ isHomePage }: HeroProps) {
  return (
    <div
      className={`${
        isHomePage ? "relative w-full h-[100vh]" : "relative w-full h-auto"
      } bg-gradient-to-b from-customBlue to-customWhite flex items-center justify-center`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-32 h-32 bg-white opacity-30 rounded-full absolute bottom-0 animation-float animation-delay-1"></div>
        <div className="w-24 h-24 bg-white opacity-20 rounded-full absolute bottom-10 right-10 animation-float animation-delay-2"></div>
        <div className="w-40 h-40 bg-white opacity-40 rounded-full absolute bottom-20 left-10 animation-float animation-delay-3"></div>
      </div>
      <div className="relative text-center text-white">
        <h1 className="text-6xl font-bold">HGM Software</h1>
        <p className="mt-4 text-xl">
          Dijital Çözümler, Güçlü YarınlarRRRRRRRRR
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-indigo-600 hover:text-white transition">
          Bize Ulaşın
        </button>
      </div>
    </div>
  );
}
