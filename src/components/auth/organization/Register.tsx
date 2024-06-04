"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import ButtonUi from "@/components/global/ui/ButtonUi";
import { CreateUserDocument } from "@/graphql/graphql";
import { RegisterProps } from "@/types/authType";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dropdown } from "primereact/dropdown";

import { FloatLabel } from "primereact/floatlabel";
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
            <FloatLabel>
              <InputText
                className="w-full"
                invalid={Boolean(errors.name?.message)}
                {...field}
              />
              <label htmlFor="name" className="text-xs font-semibold">
                Name
              </label>
            </FloatLabel>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, formState: { errors } }) => (
            <FloatLabel>
              <InputText
                className="w-full"
                keyfilter={"email"}
                invalid={Boolean(errors.email?.message)}
                {...field}
              />
              <label htmlFor="email" className="text-xs font-semibold">
                Email
              </label>
            </FloatLabel>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => (
            <FloatLabel>
              <InputText
                className="w-full"
                invalid={Boolean(errors.password?.message)}
                {...field}
                type="password"
              />
              <label htmlFor="password" className="text-xs font-semibold">
                Password
              </label>
            </FloatLabel>
          )}
        />
        <Controller
          name="location"
          control={form.control}
          rules={{ required: true }}
          render={({ field, formState: { errors } }) => (
            <FloatLabel>
              <Dropdown
                className="w-full"
                {...field}
                options={[{ label: "India", value: 1 }]}
              />
              <label htmlFor="location" className="text-xs font-semibold">
                Location
              </label>
            </FloatLabel>
          )}
        />
        <ButtonUi label="REGISTER" type="submit" />
      </form>
    </>
  );
}

export default AdminRegister;
