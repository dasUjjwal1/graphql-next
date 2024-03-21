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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RoleInput } from "@/graphql/graphql";
import { RoleFormTypes } from "@/types/appTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export default function CreateRoleDialog({ Trigger, roles }: RoleFormTypes) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    parent: Yup.number().nullable(),
    position: Yup.number().nullable(),
  });
  const form = useForm<RoleInput>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (value: RoleInput) => {};

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
                name="position"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Position ex:(1,2,3...)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="parent"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Assign To</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Assign To" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roles?.map((elm) => (
                          <SelectItem key={elm.id} value={elm.id}>
                            {elm.name}
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
                <Button type="submit">
                  {/* {loading ? (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <DoubleArrowLeftIcon className="mr-2 h-4 w-4" />
                  )} */}
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
