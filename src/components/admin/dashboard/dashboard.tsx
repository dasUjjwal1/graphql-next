"use client";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { DrawerTrigger } from "@/components/ui/drawer";
import CreateOrganization from "../Organization/CreateOrganization";
import { useQuery } from "@apollo/client";
import { GetAllOrganizationQuery } from "@/graphql/graphql";
import { GET_ALL_ORGANIZATION } from "@/gql/orgDetails";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useAdminAuthStore } from "../AuthContext";
const AdminDashboard = () => {
  const { token } = useAdminAuthStore((state) => state);
  const { data, loading } = useQuery<GetAllOrganizationQuery>(
    GET_ALL_ORGANIZATION,
    {
      onError(error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
      context: {
        headers: {
          authorization: token,
        },
      },
    }
  );
  const Trigger = () => {
    return (
      <div className="h-full py-32 flex items-center  gap-5 flex-col">
        <p className="text-center">
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
  if (loading) {
    return (
      <div className="items-center w-full h-full flex justify-center">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    );
  }
  return (
    <>
      {/* {data?.getAllOrganization?.length > 0 ? (
        <></>
      ) : ( */}
      <CreateOrganization Trigger={Trigger} />
      {/* )} */}
    </>
  );
};

export default AdminDashboard;
