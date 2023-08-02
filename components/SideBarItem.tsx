import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
}

function SideBarItem(props: SidebarItemProps) {
  return (
    <Link
      href={props.href}
      className={twMerge(
        "flex flex-row h-auto gap-x-4 w-full items-center text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
        props.active && "text-white"
      )}
    >
      <props.icon size={26} />
      <p className="truncate w-full">{props.label}</p>
    </Link>
  );
}

export default SideBarItem;
