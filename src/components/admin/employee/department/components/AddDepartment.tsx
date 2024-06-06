"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import FieldInput from "@/components/global/FieldInput";
import { Department, DepartmentCreateInput } from "@/graphql/graphql";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";

const AddDepartment = ({
  type = "CREATE",
  ...props
}: {
  onSubmit: (val: DepartmentCreateInput) => void;
  loading: boolean;
  type: "CREATE" | "UPDATE";
  formData: Department | null;
}) => {
  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };

  const form = useForm<DepartmentCreateInput>({
    defaultValues: {},
  });

  return (
    <>
      <form onSubmit={form.handleSubmit(props.onSubmit)}>
        <Controller
          name="name"
          control={form.control}
          render={({ field, formState: { errors } }) => (
            <FieldInput
              label="Department Name"
              {...field}
              invalid={Boolean(errors?.name?.message)}
            />
          )}
        />
        <div>
          <Button severity="info">Close</Button>
          <Button loading={props.loading} type="submit">
            Create
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddDepartment;
