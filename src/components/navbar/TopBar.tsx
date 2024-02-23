import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 bg-white w-full z-50 p-3 shadow-md">
      <h1 className="text-xl font-bold pl-3 my-2 border-l-8 border-blue-700">
        Organization
      </h1>
    </header>
  );
};

export default TopBar;
