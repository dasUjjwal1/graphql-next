"use client";
import React, { useContext } from "react";
import { OrgAuthContext } from "../AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
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
import { Form } from "../../ui/form";
import CreateOrganization from "../Organization/CreateOrganization";
import { useForm } from "react-hook-form";
import { OrganizationDetailsRegisterInput } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
const AdminDashboard = () => {
  const { adminAuth } = useContext(OrgAuthContext);
  const validationSchema = Yup.object({
    address: Yup.string().nullable(),
    employeeCount: Yup.string().required("This field is required"),
    endTime: Yup.string().required("This field is required"),
    id: Yup.string().nullable(),
    logo: Yup.string().nullable(),
    officeHour: Yup.number().required("This field is required"),
    orgContact: Yup.string().nullable(),
    orgName: Yup.string().nullable(),
    orgType: Yup.number(),
    startTime: Yup.string().required("This field is required"),
    totalLeaveCount: Yup.number().nullable(),
  }).required("This field is required");
  const form = useForm<OrganizationDetailsRegisterInput>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (value: OrganizationDetailsRegisterInput) => {};
  return (
    <>
      <Drawer>
        <div className="h-full py-10 flex items-center gap-5 flex-col">
          <Card className="w-full lg:w-2/4">
            <CardHeader>
              <CardTitle className="text-2xl">
                Good Evening {adminAuth?.name}
              </CardTitle>
              <CardDescription>
                Looks like you have not created Organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DrawerTrigger asChild>
                <Button className=" flex gap-3 font-semibold ">
                  <PlusCircledIcon />
                  Let&apos;s create
                </Button>
              </DrawerTrigger>
            </CardContent>
          </Card>
        </div>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Organization</DrawerTitle>
            <DrawerDescription>
              Data would not be lost untill you reset
            </DrawerDescription>
          </DrawerHeader>
          <Form {...form}>
            <form
              autoComplete={"off"}
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 border grid grid-cols-12 gap-2 items-center"
            >
              <CreateOrganization form={form} onSubmit={onSubmit} />
              <DrawerFooter className="col-span-12">
                <Button type="submit">Submit</Button>
                <DrawerClose>
                  <Button type="button" variant="outline">
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
};

export default AdminDashboard;
