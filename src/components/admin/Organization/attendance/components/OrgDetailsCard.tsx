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
type Props = {
  data: OrganizationDetails;
};
const OrgDetailsCard = ({ data }: Props) => {
  return (
    <Card className="col-span-12 dark:bg-slate-700 rounded-xl shadow-sm bg-transparent">
      <CardHeader>
        <CardTitle>{data?.orgName}</CardTitle>
        <CardDescription>Sector V, Kolkata</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-end">
        <Button>Change</Button>
      </CardFooter>
    </Card>
  );
};

export default OrgDetailsCard;
