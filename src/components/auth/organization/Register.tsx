"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import ButtonUi from "@/components/global/ui/ButtonUi";
import { CreateUserDocument } from "@/graphql/graphql";
import { RegisterProps } from "@/types/authType";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dropdown } from "primereact/dropdown";
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
        <Controller
          name="location"
          control={form.control}
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => (
            <Dropdown
              pt={{ input: { className: "text-xs text-gray-400" } }}
              placeholder={"Location"}
              {...field}
              options={[{ label: "India", value: 1 }]}
            />
          )}
        />
        <ButtonUi label="REGISTER" type="submit" />
      </form>
    </>
  );
}

export default AdminRegister;
