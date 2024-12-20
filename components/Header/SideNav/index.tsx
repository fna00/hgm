// import BrandIcon from "@/icons/BrandIcon";
import Menu from "../Menu";
import CloseIcon from "@/icons/CloseIcon";
import { useState } from "react";

interface SideNavProps {
  language: string;
  onClose: () => void;
}

export default function SideNav({ language, onClose }: SideNavProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full min-w-fit bg-white shadow-lg z-50 ${
        isClosing ? "animate-slideOut" : "animate-slideIn"
      }`}
    >
      <div className="container mx-auto px-5 py-4 flex justify-between">
        {/* <img src="/logo2.png" alt="logo" className="w-32 h-62 pb-4" /> */}
        <button
          name="close"
          onClick={handleClose}
          className="top-2 right-4 text-black text-4xl"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="container mx-auto mt-5 px-14 text-2xl  text-center">
        <Menu
          lang={language}
          className="flex flex-col space-y-2 text-black leading-10 max-md:p-5 pt-6"
        />
      </div>
    </div>
  );
}
