"use client";
import { useAdminAuthStore } from "@/components/admin/AuthContext";
import ButtonUi from "@/components/global/ui/ButtonUi";
import { LoginUserDocument, UserLogin } from "@/graphql/graphql";
import { useLazyQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { FloatLabel } from "primereact/floatlabel";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as Yup from "yup";
function AdminSignIn() {
  const { setDetails } = useAdminAuthStore((state) => state);
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
    onError(error) {
      toast.error(error.message);
    },
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
        <ButtonUi loading={loading} label="LOGIN" type="submit" />
      </form>
    </>
  );
}

export default AdminSignIn;
