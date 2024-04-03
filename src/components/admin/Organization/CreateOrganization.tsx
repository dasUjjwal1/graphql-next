"use client";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppConfig } from "@/config/appConfig";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { FC, ReactNode, Suspense, useMemo } from "react";
import { CREATE_ORG_DETAILS } from "@/gql/orgDetails";
import { useMutation } from "@apollo/client";
import {
  CreateOrganizationDetailsMutation,
  OrganizationDetailsRegisterInput,
} from "@/graphql/graphql";
import { toast } from "@/components/ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import {
  DoubleArrowLeftIcon,
  ReloadIcon,
  ResetIcon,
} from "@radix-ui/react-icons";
import { MapComponent } from "@/components/map/MapComponent";
const CreateOrganization = ({
  Trigger,
  refetch,
  open,
  setModal,
}: {
  Trigger: FC;
  refetch?: () => void;
  open?: boolean;
  setModal?: any;
}) => {
  const [mutation, { loading }] = useMutation(CREATE_ORG_DETAILS, {
    onCompleted: (data: CreateOrganizationDetailsMutation) => {
      toast({
        title: "Success",
        description: data.createOrganizationDetails,
        variant: "default",
      });
      refetch && refetch();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  const validationSchema = Yup.object().shape({
    orgName: Yup.string().required("This field is required"),
    employeeCount: Yup.number().required("This field is required"),
    endTime: Yup.string().required("This field is required"),
    startTime: Yup.string().required("This field is required"),
  });
  const form = useForm<OrganizationDetailsRegisterInput>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (value: OrganizationDetailsRegisterInput) => {
    const sTime = value?.startTime.toString()?.split(":");
    const eTime = value?.endTime.toString()?.split(":");
    const endTime = Number(eTime[0]) * 60 + Number(eTime[1]);
    const startTime = Number(sTime[0]) * 60 + Number(sTime[1]);
    const requestBody: OrganizationDetailsRegisterInput = {
      address: value?.address
        ? {
            state: value.address.state ? value.address.state : null,
            city: value.address.city ? value.address.city : null,
            housenumber: value.address.housenumber
              ? value.address.housenumber
              : null,
            street: value.address.street ? value.address.street : null,
            pin: value.address.pin ? value.address.pin : null,
          }
        : null,
      employeeCount: Number(value.employeeCount),
      startTime,
      orgName: value.orgName,
      endTime,
      logo: value.logo ? value.logo : null,
      officeHour: endTime - startTime,
      orgContact: value?.orgContact ? value?.orgContact : null,
      totalLeaveCount: value?.totalLeaveCount
        ? Number(value.totalLeaveCount)
        : null,
      orgType: value.orgType ? Number(value.orgType) : null,
    };
    mutation({ variables: { body: requestBody } });
  };
  const DEFAULT_CENTER = [38.907132, -77.036546];
  return (
    <Drawer
      {...(setModal && { onOpenChange: (e: any) => setModal(e) })}
      {...(open && { open: open })}
    >
      <Trigger />
      <DrawerContent className="overflow-auto">
        <DrawerHeader>
          <DrawerTitle>Create Organization</DrawerTitle>
          <DrawerDescription>
            Data would not be lost until you reset
          </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form
            autoComplete={"off"}
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 border grid grid-cols-12 gap-2 h-full items-start"
          >
            <>
              <h4 className="col-span-12 font-bold text-sm border-l-8 pl-3 my-3 border-blue-600">
                Organization Details
              </h4>
              <FormField
                control={form.control}
                name="orgName"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Organization Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="orgType"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Organization Type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {AppConfig.ORGANIZATION_TYPE.map((item) => (
                          <SelectItem
                            key={item.value}
                            value={item.value.toString()}
                          >
                            {item.label}
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
                name="employeeCount"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Estimated Employees</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Estimated Employees(this org...)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="orgContact"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Contact No.</FormLabel>
                    <FormControl>
                      <Input placeholder="Contact No." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" placeholder="Start Time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input type="time" placeholder="End Time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="logo"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Logo</FormLabel>
                    <FormControl>
                      <Input type="file" placeholder="Logo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="orgType"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Working Mode</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select organization type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {AppConfig.WORKING_MODE.map((item) => (
                          <SelectItem
                            key={item.value}
                            value={item.value.toString()}
                          >
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
            {
              <>
                <h4 className="col-span-12 font-bold text-sm border-l-8 pl-3 my-3 border-blue-600">
                  Organization address
                </h4>
                <Suspense fallback={null}>
                  <div data-vaul-no-drag className="w-full col-span-8">
                    <MapComponent />
                  </div>
                </Suspense>
              </>
            }
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
  );
};

export default CreateOrganization;
