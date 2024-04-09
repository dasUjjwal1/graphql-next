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
      <Tabs defaultValue="attendance" className="h-full">
        <TabsList className="p-0 bg-transparent">
          <TabsTrigger
            className="rounded-none h-10 data-[state=active]:shadow-none box-border data-[state=active]:border-t-2 data-[state=active]:bg-slate-100 data-[state=active]:dark:bg-slate-800 data-[state=active]:border-popover-foreground"
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
        <TabsContent
          value="attendance"
          className="bg-slate-100 dark:bg-slate-800 m-0 flex-grow p-3"
        >
          <div className="grid grid-cols-12 gap-4">
            <Card className="col-span-12 dark:bg-slate-700 rounded-xl">
              <CardHeader>
                <CardTitle>Qbent Technologies private ltd</CardTitle>
                <CardDescription>Sector V, Kolkata</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-end">
                <Button>Change</Button>
              </CardFooter>
            </Card>
            <Card className="col-span-4">
              <CardHeader className="p-3 bg-blue-100 dark:bg-blue-800">
                <CardTitle className="border-l-4 pl-2 border-blue-500">
                  Clock-In policies
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
                <Button className="bg-blue-500 border-b-4 border-blue-600 dark:text-blue-50 flex items-center gap-3">
                  Apply <ChevronRightCircleIcon className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
            <Card className="col-span-4">
              <CardHeader className="p-3 bg-violet-100 dark:bg-violet-800">
                <CardTitle className="border-l-4 pl-2 border-violet-500">
                  Clock-In policies
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 bg-violet-100  flex flex-col gap-4  w-full">
                <CardDescription className="flex items-center justify-between">
                  Allow employees clock-in remotely{" "}
                  <Checkbox
                    className="data-[state=checked]:bg-violet-700"
                    id="terms"
                  />
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
                    className="w-40 h-6  py-1 bg-violet-200 border-none"
                    placeholder="Enter minutes.."
                    type="number"
                  />
                </CardDescription>
                <CardDescription className="flex items-center justify-between">
                  Apply to all organizations
                  <Checkbox id="terms" />
                </CardDescription>
              </CardContent>
              <CardFooter className="flex p-3 items-end justify-end bg-violet-100">
                <Button className="bg-violet-500 border-b-4 border-violet-600 dark:text-violet-50 flex items-center gap-3">
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
