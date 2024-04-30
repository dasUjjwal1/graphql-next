"use client";
import { SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { useAdminAuthStore } from "./AuthContext";

const TopBar = () => {
  const { setDetails } = useAdminAuthStore((state) => state);
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 py-2 px-3 bg-primary"
      style={{ boxShadow: "0 0 .2rem #0000001a, 0 .2rem .4rem #0003" }}
    >
      <div className="px-4 w-full flex items-center gap-4 justify-end">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit" variant={"destructive"}>
            <SearchIcon className="w-4 h-4" />
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button
                variant={"ghost"}
                onClick={() => {
                  setDetails(null);
                }}
              >
                Log Out
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopBar;
