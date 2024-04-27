"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type MenuItems = {
  id?: string;
  label?: string;
  path: string;
  icon?: string[];
  child?: MenuItems[];
};
type Props = {
  menu: MenuItems[];
};
export default function Navbar(props: Props) {
  const pathName = usePathname();
  console.log(props.menu);
  return (
    <>
      <nav className="min-h-screen h-full fixed left-0 pt-16 px-2 overflow-y-auto shadow-sm border-r">
        <ul className="h-full flex flex-col gap-3 w-52 p-0">
          {props?.menu?.map((item) => (
            <li key={item?.id}>
              {item?.child ? (
                item?.child?.map((elm) => (
                  <Link
                    href={elm.path}
                    key={elm.id}
                    as={elm.path}
                    className={`flex items-center w-full gap-2 text-gray-700 font-semibold py-2`}
                  >
                    <span className="text-sm">{elm.label}</span>
                  </Link>
                ))
              ) : (
                <Link
                  href={item.path}
                  as={item.path}
                  className={`flex items-center w-full gap-2 text-gray-700 font-semibold py-2`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    strokeWidth="1.6"
                    stroke="currentColor"
                  >
                    {item?.icon?.map((elm, index) => (
                      <path
                        key={index}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={elm}
                      />
                    ))}
                  </svg>
                  <span className="text-sm">{item.label}</span>
                </Link>
              )}
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger> */}

              {/* </TooltipTrigger>
                  <TooltipContent side="right">{item.label}</TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
