"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OrganizationDetails, WorkingModel } from "@/graphql/graphql";
import { addMinutes } from "date-fns";
type Props = {
  data?: OrganizationDetails;
};
const OrgDetailsCard = ({ data }: Props) => {
  return (
    <Card className="col-span-12 dark:bg-slate-700 ">
      <CardHeader className="p-3 flex items-baseline justify-between flex-row">
        <div>
          <CardTitle>{data?.orgName}</CardTitle>
          <CardDescription>
            {data?.address?.housenumber +
              ", " +
              data?.address?.street +
              ", " +
              data?.address?.city}
          </CardDescription>
        </div>
        <Button>Select</Button>
      </CardHeader>
      <CardContent className="grid grid-cols-4 gap-4 p-3">
        <div className="col-span-1 bg-purple-200 p-3 rounded-lg">
          <CardTitle className="text-sm text-purple-700 ">Start time</CardTitle>
          <CardDescription>
            {addMinutes(
              new Date(2014, 6, 10, 0, 0),
              data?.startTime ?? 0
            ).toLocaleTimeString()}
          </CardDescription>
        </div>
        <div className="col-span-1 bg-sky-200 rounded-lg p-3">
          <CardTitle className="text-sm text-sky-700 ">End time</CardTitle>
          <CardDescription>
            {addMinutes(
              new Date(2014, 6, 10, 0, 0),
              data?.endTime ?? 0
            ).toLocaleTimeString()}
          </CardDescription>
        </div>
        <div className="col-span-1 bg-emerald-200 rounded-lg p-3">
          <CardTitle className="text-sm text-emerald-700 ">
            Working days
          </CardTitle>
          <CardDescription>Mon - Fri</CardDescription>
        </div>
        <div className="col-span-1 bg-fuchsia-200 rounded-lg p-3">
          <CardTitle className="text-sm text-fuchsia-700 ">
            Working Model
          </CardTitle>
          <CardDescription>
            {Object.keys(WorkingModel)[data?.workingModel ?? 1]}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrgDetailsCard;
