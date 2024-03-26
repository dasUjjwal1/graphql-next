"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { CREATE_ROLE } from "@/gql/org";
import { Access, RoleInput } from "@/graphql/graphql";
import { RoleFormTypes } from "@/types/appTypes";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  DoubleArrowLeftIcon,
  ReloadIcon,
  ResetIcon,
} from "@radix-ui/react-icons";

import { useForm } from "react-hook-form";
import * as Yup from "yup";

export default function CreateRoleDialog({
  Trigger,
  roles,
  refetch,
}: RoleFormTypes) {
  const [mutation, { loading }] = useMutation(CREATE_ROLE, {
    onCompleted: (data) => {
      toast({
        title: "Success",
        description: data?.createRole,
        variant: "default",
      });
      refetch && refetch();
    },
    onError(error, clientOptions) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    parent: Yup.number().nullable(),
    position: Yup.number().nullable(),
  });
  const form = useForm<RoleInput>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (value: RoleInput) => {
    const requestBody: RoleInput = {
      name: value.name,
      access: value.access ? value.access : null,
      parent: value.parent ? value.parent : null,
      id: null,
    };
    mutation({ variables: { body: requestBody } });
  };

  return (
    <>
      <Drawer>
        <Trigger />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Role</DrawerTitle>
            <DrawerDescription>
              Data would not be lost untill you reset
            </DrawerDescription>
          </DrawerHeader>
          <Form {...form}>
            <form
              autoComplete={"off"}
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 border grid grid-cols-12 gap-2 h-full items-start"
            >
              <h4 className="col-span-12 font-bold text-sm border-l-8 pl-3 my-3 border-blue-600">
                Role Details
              </h4>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Role Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Role Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="access"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Access</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select or leave it blank" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(Access).map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      * Write access or leave it blank
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="parent"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Assign to</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select or leave it blank" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roles?.map((item) => (
                          <SelectItem key={item.id} value={item.id}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DrawerFooter className="col-span-12 flex items-center justify-end flex-row">
                <Button variant="outline" size="icon" type="button">
                  <ResetIcon className="h-4 w-4" />
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <DoubleArrowLeftIcon className="mr-2 h-4 w-4" />
                  )}
                  Submit
                </Button>

                <DrawerClose>
                  <Button type="button" variant="destructive">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>
    </>
  );
}
