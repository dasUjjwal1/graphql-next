"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import { AppConfig } from "@/config/appConfig";
import { CreateUserDocument } from "@/graphql/graphql";
import { RegisterProps } from "@/types/authType";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
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
    onError(error) {
      toast.error(error.message);
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
      <form
        className="flex flex-col gap-3 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={form.control}
          render={({ field, formState: { errors } }) => (
            <IconField iconPosition="left">
              <InputIcon className="pi pi-user"> </InputIcon>
              <InputText
                className="w-full"
                placeholder="Name"
                invalid={Boolean(errors.name?.message)}
                {...field}
              />
            </IconField>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, formState: { errors } }) => (
            <IconField iconPosition="left">
              <InputIcon className="pi pi-envelope"> </InputIcon>
              <InputText
                className="w-full"
                keyfilter={"email"}
                placeholder="Email"
                invalid={Boolean(errors.email?.message)}
                {...field}
              />
            </IconField>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => (
            <IconField iconPosition="left">
              <InputIcon className="pi pi-lock"> </InputIcon>
              <InputText
                className="w-full"
                placeholder="Password"
                invalid={Boolean(errors.password?.message)}
                {...field}
                type="password"
              />
            </IconField>
          )}
        />
        <Button label="REGISTER" type="submit" className="text-xs" />
      </form>
    </>
  );
}

export default AdminRegister;
