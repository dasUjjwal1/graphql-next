"use client";

import { GET_ALL_ORGANIZATION } from "@/gql/orgDetails";
import { GetAllOrganizationQuery, WorkingModel } from "@/graphql/graphql";
import { useQuery } from "@apollo/client";
import { useAdminAuthStore } from "../../AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit2Icon, LocateIcon } from "lucide-react";
import { addMinutes } from "date-fns";
import { AppConfig } from "@/config/appConfig";
import CreateOrganization from "../CreateOrganization";
import { DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";

const FullOrganizationData = ({ orgIndex }: { orgIndex: number }) => {
  const { token } = useAdminAuthStore((state) => state);
  const { data, loading, error, refetch } = useQuery<GetAllOrganizationQuery>(
    GET_ALL_ORGANIZATION,
    {
      context: {
        headers: {
          authorization: token,
        },
      },
    }
  );
  if (error) {
    return (
      <div className="p-5">
        <p className="text-center">{error?.message}</p>
      </div>
    );
  }
  const orgData = data?.getAllOrganization[orgIndex];
  const Trigger = () => (
    <DrawerTrigger asChild>
      <Button variant={"ghost"}>
        <Edit2Icon className="w-4 h-4" />
      </Button>
    </DrawerTrigger>
  );
  if (orgData) {
    return (
      <div className="px-3">
        <div className="flex pb-3">
          <Link
            className="py-1 px-4 flex items-center gap-2"
            href={"/admin/organization"}
          >
            <ArrowLeft className="bg-blue-300 border border-blue-400 text-blue-800 rounded-full p-1" />
            Back
          </Link>
        </div>

        <Card className="bg-blue-50 rounded-lg">
          <CardHeader className="flex flex-row items-baseline justify-between">
            <div>
              <CardTitle className="text-blue-700 text-lg">
                {orgData?.orgName}
              </CardTitle>
              <CardDescription className="flex flex-row gap-2">
                <LocateIcon className="w-4 h-4 " />
                {orgData?.address?.housenumber +
                  ", " +
                  orgData?.address?.street +
                  ", " +
                  orgData?.address?.city +
                  ", " +
                  orgData?.address?.state +
                  ", " +
                  orgData?.address?.pin}
              </CardDescription>
            </div>

            <CreateOrganization
              refetch={refetch}
              Trigger={Trigger}
              update
              data={orgData}
            />
          </CardHeader>
          <CardContent className="grid grid-cols-12 gap-4">
            <div className="col-span-3 bg-violet-100 border border-violet-200 text-violet-900 p-3 rounded-lg">
              <CardTitle className="text-sm ">Start time</CardTitle>
              <CardDescription>
                {addMinutes(
                  new Date(2014, 6, 10, 0, 0),
                  orgData?.startTime ?? 0
                ).toLocaleTimeString()}
              </CardDescription>
            </div>
            <div className="col-span-3 bg-blue-100 border border-blue-200  text-blue-800 rounded-lg p-3">
              <CardTitle className="text-sm">End time</CardTitle>
              <CardDescription>
                {addMinutes(
                  new Date(2014, 6, 10, 0, 0),
                  orgData?.endTime ?? 0
                ).toLocaleTimeString()}
              </CardDescription>
            </div>
            <div className="col-span-3 bg-sky-100 border border-sky-200 rounded-lg p-3">
              <CardTitle className="text-sm text-sky-500">
                Working days
              </CardTitle>
              <CardDescription>Mon - Fri</CardDescription>
            </div>
            <div className="col-span-3 bg-green-100 border border-green-200 rounded-lg p-3">
              <CardTitle className="text-sm text-green-600">
                Working Model
              </CardTitle>
              <CardDescription>
                {/* {orgData?.workingModel ?? "-"} */}
                {Object.keys(WorkingModel)[orgData?.workingModel ?? 0]}
              </CardDescription>
            </div>
            {/* <h3 className="col-span-12 font-semibold pl-2 border-l-8 border-primary">
              Other Details
            </h3> */}
            <div className="col-span-3 bg-blue-100 border border-blue-200 p-3 rounded-lg">
              <CardTitle className="text-blue-500 text-sm">
                Estimated Employee
              </CardTitle>
              <CardDescription>{orgData?.employeeCount ?? "-"}</CardDescription>
            </div>
            <div className="col-span-3 bg-cyan-50 border border-cyan-200 p-3 rounded-lg">
              <CardTitle className="text-cyan-600 text-sm">
                Contact No.
              </CardTitle>
              <CardDescription>{orgData?.orgContact ?? "-"}</CardDescription>
            </div>
            <div className="col-span-3 bg-purple-100 border border-purple-300 p-3 rounded-lg">
              <CardTitle className="text-purple-800 text-sm">
                Organization Type
              </CardTitle>
              <CardDescription>
                {AppConfig.ORGANIZATION_TYPE.find(
                  (eml) => eml.value === orgData?.orgType
                )?.label ?? "-"}
              </CardDescription>{" "}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default FullOrganizationData;
