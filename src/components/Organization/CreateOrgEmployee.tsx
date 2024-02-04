import { EmployeeFormTypes } from "@/types/appTypes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const CreateOrgEmployee = (props: EmployeeFormTypes) => {
  return (
    <Form {...props.form}>
      <form
        autoComplete={"off"}
        onSubmit={props.form.handleSubmit(props.onSubmit)}
        className="p-4 border grid grid-cols-6 gap-2 items-center"
      >
        <FormField
          control={props.form.control}
          name="employeeName"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={props.form.control}
          name="employeeEmail"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
          name="employeeName"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={props.form.control}
          name="employeeEmail"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
          name="employeeName"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
        <FormField
          control={props.form.control}
          name="employeeEmail"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              {/* <FormDescription>
            This is your public display name.
          </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-3 col-span-6 justify-end">
          <Button type="submit" disabled={false}>
            {/* {loading && (
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      )} */}
            {props.saveType === "create" ? "Create Role" : "Update Role"}
          </Button>
          <Button
            type="reset"
            onClick={() => {
              props.setSaveType("create");
              props.form.reset({});
            }}
            variant={"destructive"}
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateOrgEmployee;
