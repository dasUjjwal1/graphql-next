"use client";
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
import { LOG_IN_ORGANIZATION } from "@/gql/org";
import { AppConfig } from "@/config/appConfig";
import { useLazyQuery } from "@apollo/client";
import { useToast } from "../../ui/use-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  LoginOrganizationQuery,
  LoginOrganizationQueryVariables,
  OrganizationLogin,
} from "@/graphql/graphql";
import { useAdminAuthStore } from "@/components/admin/AuthContext";
function AdminSignIn() {
  const { setDetails } = useAdminAuthStore((state) => state);

  const { toast } = useToast();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  }).required();
  const [mutation, { loading }] = useLazyQuery<
    LoginOrganizationQuery,
    LoginOrganizationQueryVariables
  >(LOG_IN_ORGANIZATION, {
    onCompleted: (data) => {
      setDetails(data?.loginOrganization);
    },
    onError(error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  const form = useForm<OrganizationLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(value: OrganizationLogin) {
    mutation({ variables: { body: value } });
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
