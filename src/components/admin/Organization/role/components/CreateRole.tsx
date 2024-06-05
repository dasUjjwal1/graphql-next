"use client";

import FieldDropdown from "@/components/global/FieldDropdown";
import FieldInput from "@/components/global/FieldInput";
import FieldMultiSelect from "@/components/global/FieldMultiSelect";
import ButtonUi from "@/components/global/ui/ButtonUi";
import { AppConfig } from "@/config/appConfig";
import { Role, RoleInput } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

type Props = {
  onSubmit: (val: RoleInput) => void;
  loading: boolean;
  roleList?: Role[];
  type: "CREATE" | "UPDATE";
  formData: Role | null;
};
const CreateRole = ({ type = "CREATE", ...props }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Role name is required"),
  });
  const form = useForm<RoleInput>({
    defaultValues: {
      access: [],
      ...(type === "UPDATE" && props.formData && props.formData),
    },
    resolver: yupResolver(validationSchema),
  });
  const emptyArray = [{ id: "", name: "Administration" }];
  return (
    <form
      className="lg:grid grid-cols-3 gap-4 pt-3"
      onSubmit={form.handleSubmit(props.onSubmit)}
    >
      <Controller
        name="name"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <FieldInput
            label="Role Name"
            {...field}
            invalid={Boolean(errors.name?.message)}
            icon={"pi pi-user"}
          />
        )}
      />
      <Controller
        name="access"
        control={form.control}
        render={({ field }) => (
          <FieldMultiSelect
            {...field}
            label="Access"
            placeholder="Employee Access"
            options={AppConfig.ACCESS}
            optionValue="name"
          />
        )}
      />
      <Controller
        name="parent"
        control={form.control}
        render={({ field }) => (
          <FieldDropdown
            {...field}
            label="Assign To."
            placeholder="Assign To."
            options={
              props?.roleList ? props?.roleList?.concat(emptyArray) : emptyArray
            }
            optionValue="id"
            optionLabel="name"
          />
        )}
      />
      <div className="col-span-3 flex gap-3 justify-end">
        <Button
          type="reset"
          onClick={() => form.reset()}
          label="Reset"
          icon={"pi pi-refresh"}
          severity="danger"
        />
        <ButtonUi
          color="primary"
          loading={props.loading}
          type="submit"
          label={type === "CREATE" ? "Create" : "Update"}
        />
      </div>
    </form>
  );
};

export default CreateRole;
