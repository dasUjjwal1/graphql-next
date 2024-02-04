"use client";
import { UseFormReturn } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Role } from "@/types/appTypes";
import { Dispatch, SetStateAction } from "react";
type FormTypes = {
  form: UseFormReturn<Role>;
  onSubmit: (value: Role) => void;
  setSaveType: Dispatch<SetStateAction<"create" | "update">>;
  saveType: "create" | "update";
};
export default function CreateRoleDialog(props: FormTypes) {
  return (
    <Form {...props.form}>
      <form
        autoComplete={"off"}
        onSubmit={props.form.handleSubmit(props.onSubmit)}
        className="space-y-3 p-4 border"
      >
        <FormField
          control={props.form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role Name</FormLabel>
              <FormControl>
                <Input placeholder="Role Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={props.form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Position" {...field} />
              </FormControl>
              {/* <FormDescription>
              This is your public display name.
            </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={false}>
          {/* {loading && (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        )} */}
          {props.saveType === "create" ? "Create Role" : "Update Role"}
        </Button>
        <Button
          type="reset"
          onClick={() => {
            props.setSaveType("create");
            props.form.reset({ _id: "", name: "", parent: "", position: "" });
          }}
          className="w-full"
          variant={"destructive"}
        >
          Reset
        </Button>
      </form>
    </Form>
  );
}
