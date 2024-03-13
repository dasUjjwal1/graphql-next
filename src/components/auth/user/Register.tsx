"use client";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Register } from "@/types/authType";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useMutation } from "@apollo/client";
import { REGISTER_ORGANIZATION } from "@/gql/org";
import { AppConfig } from "@/config/appConfig";
import { useToast } from "../../ui/use-toast";
import { ActionsTypes, UserAuthDispatch } from "@/components/user/AuthContext";

function Register() {
  const { toast } = useToast();
  const { dispatch } = useContext(UserAuthDispatch);
  const [mutation, { loading }] = useMutation(REGISTER_ORGANIZATION, {
    onCompleted: (data) => {
      sessionStorage.setItem(AppConfig.CREDENTIAL, JSON.stringify(data));
      dispatch({ type: ActionsTypes.USERAUTH, payload: data });
    },
    onError(error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  const form = useForm<Register>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      location: "",
    },
  });

  const onSubmit = (value: Register) => {
    const body = {
      ...value,
      location: Number(value.location),
    };
    mutation({ variables: body });
  };
  return (
    <>
      <Form {...form}>
        <form
          autoComplete={"off"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
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
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                {/* <FormDescription>
                              This is your public display name.
                            </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={"1"}>India</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default Register;
