import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

const TopBar = () => {
  return (
    <header className="bg-[#34a6db] fixed top-0 left-0 w-full z-50 px-4 py-3">
      <div className="flex items-center justify-between text-gray-900">
        <h6 className="mr-4 cursor-pointer py-1.5 font-bold">Hr-Manual</h6>
        <div className="flex items-center gap-2">
          <h3>U</h3>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
