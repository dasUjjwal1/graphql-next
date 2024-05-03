"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import { AppConfig } from "@/config/appConfig";
import { CreateUserDocument } from "@/graphql/graphql";
import { RegisterProps } from "@/types/authType";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
function AdminRegister() {
  const { setDetails } = useAdminAuthStore((state) => state);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
    name: Yup.string().required("This field is required"),
    location: Yup.string().required("This field is required"),
  });
  const [mutation, { loading }] = useMutation(CreateUserDocument, {
    onCompleted: (data) => {
      sessionStorage.setItem(
        AppConfig.CREDENTIAL,
        JSON.stringify(data?.createUser?.token)
      );
      setDetails(data?.createUser);
    },
    onError(error) {},
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
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field }) => (
            <Input label="Name" placeholder="Enter your name" {...field} />
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field }) => (
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              label="Password"
              type="password"
              placeholder="Enter your name"
              {...field}
            />
          )}
        />
        <Button color="primary">Create</Button>
      </form>
    </>
  );
}

export default AdminRegister;
