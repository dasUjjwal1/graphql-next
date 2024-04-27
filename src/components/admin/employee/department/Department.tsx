"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DepartmentList from "./components/DepartmentList";

const Department = () => {
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-2">
        <h2 className="text-2xl font-bold">Department</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add department</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl font-medium">
                Add DepartmentQ
              </DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="px-6">
        <DepartmentList />
      </div>
    </>
  );
};

export default Department;
