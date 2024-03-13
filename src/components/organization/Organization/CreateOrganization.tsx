// @ts-nocheck
"use client";
import { OrgDetailsFormTypes } from "@/types/appTypes";
import { Button } from "../../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";

const CreateOrganization = (props: OrgDetailsFormTypes) => {
  return (
    <>
      <h4 className="col-span-12 font-bold text-sm border-l-8 pl-3 my-3 border-blue-600">
        Organization Details
      </h4>
      <FormField
        control={props.form.control}
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
        control={props.form.control}
        name="orgType"
        render={({ field }) => (
          <FormItem className="col-span-3">
            <FormLabel>Organization Type</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Organization Type" {...field} />
            </FormControl>
            {/* <FormDescription>
  This is your public display name.
</FormDescription> */}
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={props.form.control}
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
        control={props.form.control}
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
        control={props.form.control}
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
        control={props.form.control}
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
        control={props.form.control}
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
      <h4 className="col-span-12 font-bold text-sm border-l-8 pl-3 my-3 border-blue-600">
        Organization address
      </h4>
      <FormField
        control={props.form.control}
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
        control={props.form.control}
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
        control={props.form.control}
        name="address.houseNumber"
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
        control={props.form.control}
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
        control={props.form.control}
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
    </>
  );
};

export default CreateOrganization;
