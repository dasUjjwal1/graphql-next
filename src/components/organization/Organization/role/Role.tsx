"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import CreateRoleDialog from "./components/CreateRole";
import { RotateCcw } from "lucide-react";
import { useQuery } from "@apollo/client";
import { Table, TableBody, TableHeader } from "@/components/ui/table";

const RoleComponent = () => {
  // const { data, loading, error, refetch } = useQuery(

  // );
  const Trigger = () => (
    <DrawerTrigger asChild>
      <Button className=" flex gap-3 font-semibold ">
        <PlusCircledIcon />
        Create Role
      </Button>
    </DrawerTrigger>
  );
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <Button onClick={() => {}}>
            <RotateCcw className="w-4 h-4" />
          </Button>
          <CreateRoleDialog Trigger={Trigger} />
        </div>
        <>
          <Table className="border mt-3 w-full">
            <TableHeader></TableHeader>

            <TableBody></TableBody>
          </Table>
        </>
      </div>
    </>
  );
};

export default RoleComponent;
