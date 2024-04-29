"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  AddDepartmentDocument,
  DepartmentCreateInput,
} from "@/graphql/graphql";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

const AddDepartment = ({
  organizationId,
  refetch,
}: {
  organizationId: string;
  refetch?: () => void;
}) => {
  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const [mutation] = useMutation(AddDepartmentDocument, {
    onCompleted: (data) => {
      toast({
        title: "Success",
        description: data.addDepartment.message,
        variant: "default",
      });
      refetch && refetch();
    },
    onError(error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
    context,
  });
  const form = useForm<DepartmentCreateInput>({
    defaultValues: {},
  });
  const onSubmit = (value: DepartmentCreateInput) => {
    const requestBody: DepartmentCreateInput = {
      name: value.name,
      organizationId,
    };
    mutation({ variables: { body: requestBody } });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add department</Button>
      </DialogTrigger>
      <DialogContent className="w-1/4">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">
            Add Department
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            autoComplete={"off"}
            onSubmit={form.handleSubmit(onSubmit)}
            className="py-4 space-y-4 "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Designation title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              {" "}
              Add
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDepartment;
