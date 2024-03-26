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
  DrawerTrigger,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { AppConfig } from "@/config/appConfig";
import { CREATE_EMPLOYEE_CREDENTIAL } from "@/gql/employee";
import { GET_ALL_ROLE } from "@/gql/org";
import {
  EmployeeRegisterInput,
  GetAllOrganizationDocument,
  GetAllRoleQuery,
} from "@/graphql/graphql";
import { EmployeeCredentialFormTypes } from "@/types/appTypes";
import { useMutation, useQuery } from "@apollo/client";
import {
  ResetIcon,
  ReloadIcon,
  DoubleArrowLeftIcon,
} from "@radix-ui/react-icons";
import { PlusCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
const CreateEmployeeCredential = ({
  orgList,
  Trigger,
}: EmployeeCredentialFormTypes) => {
  const [mutation, { loading, error }] = useMutation(
    CREATE_EMPLOYEE_CREDENTIAL,
    {
      onCompleted(data, clientOptions) {},
      onError(error, clientOptions) {},
    }
  );
  const { data } = useQuery<GetAllRoleQuery>(GET_ALL_ROLE, {
    onError(error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  const form = useForm<EmployeeRegisterInput>({
    defaultValues: {},
  });
  const onSubmit = (value: EmployeeRegisterInput) => {};

  return (
    <Drawer>
      <Trigger />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form
            autoComplete={"off"}
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 border grid grid-cols-12 gap-2 h-full items-start"
          >
            <>
              <h4 className="col-span-12 font-bold text-sm border-l-8 pl-3 my-3 border-blue-600">
                Credential Details
              </h4>
              <FormField
                control={form.control}
                name="organizationId"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Organization</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {orgList?.map((item) => (
                          <SelectItem key={item.id} value={item.id.toString()}>
                            {item.orgName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employeeEmail"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="employeePassword"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
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
  );
};

export default CreateEmployeeCredential;
