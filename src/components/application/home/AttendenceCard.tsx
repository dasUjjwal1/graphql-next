"use client";
import { ClockIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@apollo/client";
import { GET_ATTENDANCE_BY_DATE } from "@/gql/employee";
import {
  GetAllOrganizationQueryVariables,
  GetAttendanceByDateQueryQuery,
  GetAttendanceByDates,
} from "@/graphql/graphql";

const AttendanceCard = () => {
  const {} = useQuery<
    GetAttendanceByDateQueryQuery,
    GetAllOrganizationQueryVariables
  >(GET_ATTENDANCE_BY_DATE, {});
  return (
    <div className="grid grid-cols-2 gap-3 grid-flow-row p-3 w-full">
      <div className="grid gap-3 grid-cols-2 grid-flow-row auto-rows-max">
        <Card>
          <CardHeader className="flex  flex-row items-center justify-between">
            <div>
              <CardDescription className="mb-1">Hours Weekly</CardDescription>
              <CardTitle className="text-2xl">38H 45M</CardTitle>
            </div>
            <div>
              <CardDescription className="mb-1">
                On-Time Arrival
              </CardDescription>
              <CardTitle className="text-2xl">60%</CardTitle>
            </div>
          </CardHeader>

          <CardFooter className="flex items-center justify-between">
            <p>6H 34M</p>
            <Button className="gap-2">
              <ClockIcon /> Clock-In
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default AttendanceCard;
