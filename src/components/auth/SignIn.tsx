"use client";
import { useContext, useState } from "react";
import { ActionsTypes, AuthDispatch } from "@/provider/AuthContext";
import AuthService from "@/service/authService";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
type InitialValue = {
  email: string;
  password: string;
};
const SignIn = () => {
  const authService = new AuthService();
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AuthDispatch);

  const form = useForm<InitialValue>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: InitialValue) => {
    setLoading(true);
    authService
      .logIn(value)
      .then((res) => {
        dispatch({
          type: ActionsTypes.AUTH,
          payload: res?.LogInOrganization,
        });
      })
      .catch((error) => {
        console.log(typeof error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <div className="container grid grid-cols-12 gap-4 items-center">
        <div className="col-span-3 py-8">
          <h1 className="text-2xl font-semibold tracking-tight text-center">
            Log In
          </h1>
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
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div className="col-span-9"></div>
      </div>
    </>
  );
};

export default SignIn;
