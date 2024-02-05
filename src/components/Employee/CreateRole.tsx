"use client";
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
import { RoleFormTypes } from "@/types/appTypes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function CreateRoleDialog(props: RoleFormTypes) {
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
          control={props.form.control}
          name="parent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assign To</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Assign To" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {props.roles?.map((item) => (
                    <SelectItem key={item._id} value={item._id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
            props.form.reset({
              _id: "",
              name: "",
              parent: "",
              position: 0,
            });
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
