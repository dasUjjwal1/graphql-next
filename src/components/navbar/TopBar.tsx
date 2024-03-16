import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-2 px-3 shadow-sm border-b">
      <div className="px-4 flex items-center justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopBar;
