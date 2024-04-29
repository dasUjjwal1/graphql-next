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
import { toast } from "@/components/ui/use-toast";
import { AddDepartmentDocument } from "@/graphql/graphql";
import { useMutation } from "@apollo/client";

const AddDepartment = () => {
  const [mutation] = useMutation(AddDepartmentDocument, {
    onCompleted: (data) => {
      toast({
        title: data.addDepartment.message,
      });
    },
  });
  return (
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
  );
};

export default AddDepartment;
