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
      <nav className="h-full pt-12 px-2 overflow-y-auto shadow-md border-r">
        <ul className="h-full flex flex-col gap-3 p-0">
          {props?.menu?.map((item) => (
            <li className={"flex items-center justify-center "} key={item?.id}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={item.path}
                      as={item.path}
                      className={`flex items-center ${
                        pathName === item.path &&
                        "dark:text-cyan-100 dark:bg-[#0c394a]"
                      } rounded-xl h-10 w-10 justify-center hover:bg-secondary`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
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
