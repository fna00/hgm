import BrandIcon from "@/icons/BrandIcon";
import Menu from "../Menu";

interface SideNavProps {
  language: string;
  onClose: () => void;
}

export default function SideNav({ language, onClose }: SideNavProps) {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-blue-950 opacity-80 shadow-lg z-50 animate-slideIn">
      <div className="container mx-auto px-4 flex justify-between">
        <BrandIcon className={"h-20 w-36"} />
        <button onClick={onClose} className=" top-4 right-4 text-white">
          X
        </button>
      </div>
      <div className="container mx-auto px-4 mt-16 text-2xl">
        <Menu lang={language} className="flex flex-col space-y-2 leading-10" />
      </div>
    </div>
  );
}
