"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
type MenuItems = {
  id: string;
  label: string;
  path: string;
  icon: string;
};
type Props = {
  menu: MenuItems[];
};
export default function Navbar(props: Props) {
  const pathName = usePathname();
  return (
    <>
      <nav className="h-full pt-12 overflow-y-auto shadow-md">
        <ul className="h-full flex flex-col gap-3 p-0">
          {props?.menu?.map((item) => (
            <li className={"flex items-center justify-center"} key={item?.id}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={item.path}
                      as={item.path}
                      className={`flex items-center ${
                        pathName?.split("/")[1] === item.path?.split("/")[1] &&
                        "bg-[#63ace9] text-cyan-800"
                      } rounded-xl h-12 w-12 justify-center `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d={item.icon}
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
