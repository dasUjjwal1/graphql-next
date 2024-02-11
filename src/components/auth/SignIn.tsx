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
import { GitHubLogoIcon, ReloadIcon } from "@radix-ui/react-icons";
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
      <div className="container flex justify-center h-full items-center">
        <div className="rounded-xl w-1/3 border bg-card text-card-foreground shadow">
          <div className="flex flex-col p-6 space-y-1">
            <h3 className="font-semibold tracking-tight text-2xl">Log In</h3>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <div className="p-6 pt-0 grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button variant={"outline"} className="flex gap-2">
                <GitHubLogoIcon />
                Github
              </Button>
              <Button variant={"outline"} className="flex gap-2">
                <svg role="img" viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  ></path>
                </svg>
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default SignIn;
