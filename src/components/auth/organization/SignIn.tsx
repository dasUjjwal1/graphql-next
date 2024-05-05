"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import { LoginUserDocument, UserLogin } from "@/graphql/graphql";
import { useLazyQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
function AdminSignIn() {
  const { setDetails } = useAdminAuthStore((state) => state);

  // const { toast } = useToast();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  }).required();
  const [mutation, { loading }] = useLazyQuery(LoginUserDocument, {
    onCompleted: (data) => {
      setDetails(data?.loginUser);
    },
    onError(error) {},
  });
  const form = useForm<UserLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(value: UserLogin) {
    mutation({ variables: { body: value } });
  }
  return (
    <>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          name="email"
          control={form.control}
          render={({ field }) => (
            <Input label="Email" type="email" {...field} />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field }) => (
            <Input label="Password" type="password" {...field} />
          )}
        />
        <Button isLoading={loading} color="primary" type="submit">
          Create
        </Button>
      </form>
    </>
  );
}

export default AdminSignIn;
