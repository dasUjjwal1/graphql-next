"use client";
import { useContext } from "react";
import { OrgAuthContext } from "../AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { DrawerTrigger } from "@/components/ui/drawer";
import CreateOrganization from "../Organization/CreateOrganization";
const AdminDashboard = () => {
  const { adminAuth } = useContext(OrgAuthContext);
  const Trigger = () => {
    return (
      <div className="h-full py-32 flex items-center  gap-5 flex-col">
        <p className="text-center">
          {" "}
          Looks like you have not created Organization
        </p>
        <DrawerTrigger asChild>
          <Button className=" flex gap-3 font-semibold ">
            <PlusCircledIcon />
            Let&apos;s create
          </Button>
        </DrawerTrigger>
      </div>
    );
  };
  return (
    <>
      <CreateOrganization Trigger={Trigger} />
    </>
  );
};

export default AdminDashboard;
