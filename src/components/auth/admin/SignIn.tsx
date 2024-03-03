"use client";
import { useContext, useState } from "react";
import { ActionsTypes, AuthDispatch } from "@/provider/AuthContext";
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
import { Login } from "@/types/authType";
import { LOG_IN_ORGANIZATION } from "@/gql/org";
import { AppConfig } from "@/config/appConfig";
import { useLazyQuery } from "@apollo/client";
import { useToast } from "../../ui/use-toast";

function AdminSignIn() {
  const { dispatch } = useContext(AuthDispatch);
  const { toast } = useToast();
  const [mutation, { loading }] = useLazyQuery(LOG_IN_ORGANIZATION, {
    onCompleted: (data) => {
      sessionStorage.setItem(
        AppConfig.CREDENTIAL,
        JSON.stringify(data?.loginOrganization)
      );
      dispatch({
        type: ActionsTypes.ADMINAUTH,
        payload: data?.loginOrganization,
      });
    },
    onError(error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  const form = useForm<Login>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(value: Login) {
    mutation({ variables: value });
  }
  return (
    <>
      <Form {...form}>
        <form
          autoComplete={"off"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3"
        >
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
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}

export default AdminSignIn;
