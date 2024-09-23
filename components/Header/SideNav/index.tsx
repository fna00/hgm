import Menu from "../Menu";

interface SideNavProps {
  language: string;
}

export default function SideNav({ language }: SideNavProps) {
  return (
    <div>
      <Menu lang={language} className={"relative"} />
    </div>
  );
}
