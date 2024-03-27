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
import { RegisterProps } from "@/types/authType";
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
import {
  ActionsTypes,
  OrgAuthDispatch,
} from "@/components/organization/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  CreateEmployeeCredentialMutationVariables,
  CreateOrganizationMutation,
  CreateOrganizationMutationVariables,
  OrganizationResponse,
} from "@/graphql/graphql";
function AdminRegister() {
  const { toast } = useToast();
  const { dispatch } = useContext(OrgAuthDispatch);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
    name: Yup.string().required("This field is required"),
    location: Yup.string().required("This field is required"),
  });
  const [mutation, { loading }] = useMutation<
    CreateOrganizationMutation,
    CreateOrganizationMutationVariables
  >(REGISTER_ORGANIZATION, {
    onCompleted: (data) => {
      sessionStorage.setItem(
        AppConfig.CREDENTIAL,
        JSON.stringify(data?.createOrganization?.token)
      );
      dispatch({
        type: ActionsTypes.ADMINAUTH,
        payload: data?.createOrganization,
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
  const form = useForm<RegisterProps>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      location: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (value: RegisterProps) => {
    const body = {
      ...value,
      location: Number(value.location),
    };
    mutation({ variables: { body: body } });
  };
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

export default AdminRegister;
