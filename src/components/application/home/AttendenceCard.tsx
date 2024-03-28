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

const AttendenceCard = () => {
  return (
    <div className="grid grid-cols-2 gap-3 grid-flow-row p-3 w-full">
      <div className="grid gap-3 grid-cols-2 grid-flow-row auto-rows-max">
        <Card>
          <CardHeader className="flex  flex-row items-center justify-between">
            <div>
              <CardDescription>Total Hours weekly</CardDescription>
              <CardTitle className="text-2xl">38H 45M</CardTitle>
            </div>
            <div>
              <CardDescription>On Time Arrival</CardDescription>
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

export default AttendenceCard;
