"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OrganizationDetails } from "@/graphql/graphql";
import { addMinutes } from "date-fns";
type Props = {
  data?: OrganizationDetails;
};
const OrgDetailsCard = ({ data }: Props) => {
  return (
    <Card className="col-span-12 dark:bg-slate-700 ">
      <CardHeader>
        <CardTitle>{data?.orgName}</CardTitle>
        <CardDescription>
          {data?.address?.housenumber +
            ", " +
            data?.address?.street +
            ", " +
            data?.address?.city}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-sm">Start time</CardTitle>
        <CardDescription>
          {addMinutes(
            new Date(2014, 6, 10, 0, 0),
            data?.startTime ?? 0
          ).toLocaleTimeString()}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Change</Button>
      </CardFooter>
    </Card>
  );
};

export default OrgDetailsCard;
