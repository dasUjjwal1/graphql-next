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
import { FC } from "react";
import {
  CREATE_ORG_DETAILS,
  UPDATE_ORGANIZATION_DETAILS,
} from "@/gql/orgDetails";
import { useMutation } from "@apollo/client";
import {
  CreateOrganizationDetailsMutation,
  OrganizationDetailsRegisterInput,
  UpdateOrganizationDetailsMutation,
  UpdateOrganizationDetailsMutationVariables,
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
import { useAdminAuthStore } from "../AuthContext";
const CreateOrganization = ({
  Trigger,
  refetch,
  open,
  setModal,
  update = false,
  data,
}: {
  Trigger: FC;
  refetch?: () => void;
  open?: boolean;
  setModal?: any;
  update?: boolean;
  data?: UpdateOrganizationDetailsMutationVariables["body"];
}) => {
  const { token } = useAdminAuthStore((state) => state);
  const [mutation, { loading }] = useMutation(CREATE_ORG_DETAILS, {
    onCompleted: (data: CreateOrganizationDetailsMutation) => {
      toast({
        title: "Success",
        description: data.createOrganizationDetails.message,
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
    context: {
      headers: {
        authorization: token,
      },
    },
  });
  const [updateOrgDetailsMutation] = useMutation<
    UpdateOrganizationDetailsMutation,
    UpdateOrganizationDetailsMutationVariables
  >(UPDATE_ORGANIZATION_DETAILS, {
    onCompleted: (data) => {
      toast({
        title: "Success",
        description: data.updateOrganizationDetails.message,
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
    context: {
      headers: {
        authorization: token,
      },
    },
  });
  const validationSchema = Yup.object().shape({
    orgName: Yup.string().required("This field is required"),
    employeeCount: Yup.number()
      .nullable()
      .min(0, "Invalid Number")
      .required("This field is required"),
    endTime: Yup.string().required("This field is required"),
    startTime: Yup.string().required("This field is required"),
  });
  const form = useForm<OrganizationDetailsRegisterInput>({
    defaultValues: {
      employeeCount: 0,
      orgName: "",
      orgContact: "",
      address: { city: "", housenumber: "", pin: "", state: "", street: "" },
      startTime: "",
      endTime: "",
      orgType: "",
      workingModel: "",
      ...(update && {
        ...data,
        startTime:
          Math.round((data?.startTime ?? 0) / 60) +
          ":" +
          ((data?.startTime ?? 0) % 60),
        endTime:
          Math.round((data?.endTime ?? 0) / 60) +
          ":" +
          ((data?.endTime ?? 0) % 60),
        orgType: data?.orgType ? data?.orgType.toString() : "",
        workingModel: data?.workingModel ? data?.workingModel.toString() : "",
      }),
    },
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
      orgContact: value?.orgContact ? value?.orgContact : null,
      orgType: value.orgType ? Number(value.orgType) : null,
    };
    if (!update) {
      mutation({ variables: { body: requestBody } });
    } else {
      updateOrgDetailsMutation({
        variables: { body: { ...requestBody, id: value?.id } },
      });
    }
  };
  const DEFAULT_CENTER = [38.907132, -77.036546];
  return (
    <Drawer
      // dismissible={false}
      // snapPoints={[0.9]}
      {...(setModal && { onOpenChange: (e: any) => setModal(e) })}
      {...(open && { open: open })}
    >
      <Trigger />

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{update ? "Update" : "Create"} Organization</DrawerTitle>
          <DrawerDescription>
            Data would not be lost until you reset
          </DrawerDescription>
        </DrawerHeader>
        <Form {...form}>
          <form
            autoComplete={"off"}
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 grid grid-cols-12 gap-2 items-start"
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
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      defaultValue={form.getValues("orgType")}
                    >
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
                name="workingModel"
                render={({ field }) => (
                  <FormItem className="col-span-3">
                    <FormLabel>Working Mode</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={form.getValues("workingModel")}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select working mode" />
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

            <h4 className="col-span-12 font-bold text-sm border-l-8 pl-3 my-3 border-blue-600">
              Organization address
            </h4>
            <FormField
              control={form.control}
              name="address.housenumber"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Building No.</FormLabel>
                  <FormControl>
                    <Input placeholder="Building No." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.street"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Street Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Street Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.state"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.pin"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>PIN No.</FormLabel>
                  <FormControl>
                    <Input placeholder="PIN No." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <DrawerFooter className="col-span-12 flex items-center justify-end flex-row">
              <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={() => form.reset()}
              >
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

              <DrawerClose asChild>
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
