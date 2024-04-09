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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRightCircleIcon, LocateIcon } from "lucide-react";

const Policy = () => {
  return (
    <div className="px-4">
      <Tabs defaultValue="attendance">
        <TabsList className="p-0 bg-transparent">
          <TabsTrigger
            className="rounded-none h-10 data-[state=active]:shadow-none box-border data-[state=active]:border-t data-[state=active]:bg-slate-100 data-[state=active]:border-popover-foreground"
            value="attendance"
          >
            Attendance
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none h-10 data-[state=active]:shadow-none box-border data-[state=active]:border-t data-[state=active]:bg-slate-100 data-[state=active]:border-popover-foreground"
            value="password"
          >
            Leave
          </TabsTrigger>
        </TabsList>
        <TabsContent value="attendance" className="bg-slate-100 m-0 p-3">
          <div className="grid grid-cols-12 gap-2">
            <Card className="col-span-4">
              <CardHeader className="p-3 bg-blue-100">
                <CardTitle className="border-l-4 pl-2 border-blue-600">
                  Attendance policies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 bg-blue-100 flex flex-col gap-4  w-full">
                <CardDescription className="flex items-center justify-between">
                  Allow employees clock-in remotely <Checkbox id="terms" />
                </CardDescription>
                <CardDescription className="flex items-center justify-between">
                  On-site location required <Checkbox id="terms" />
                </CardDescription>
                <CardDescription className="flex items-center justify-between">
                  Select Organization Location
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="p-0" variant={"link"}>
                        <LocateIcon className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardDescription>
                <CardDescription className="flex items-center justify-between">
                  Grace period
                  <Input
                    className="w-40 h-6  py-1 bg-blue-200 border-none"
                    placeholder="Enter minutes.."
                    type="number"
                  />
                </CardDescription>
                <CardDescription className="flex items-center justify-between">
                  Apply to all organizations
                  <Checkbox id="terms" />
                </CardDescription>
              </CardContent>
              <CardFooter className="flex p-3 items-end justify-end bg-blue-100">
                <Button className="bg-blue-500 border-b-4 border-blue-600 flex items-center gap-3">
                  Apply <ChevronRightCircleIcon className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="password" className="bg-slate-100 m-0 p-3">
          Change your password here.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Policy;
