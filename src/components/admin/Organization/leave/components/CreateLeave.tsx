"use client";

import FieldInput from "@/components/global/FieldInput";
import { Leave_Details_Input, Role } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

type Props = {
  onSubmit: (val: Leave_Details_Input) => void;
  loading: boolean;
  roleList: Role[];
  type: "CREATE" | "UPDATE";
  formData: Role | null;
};
const CreateLeave = ({ type = "CREATE", ...props }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Role name is required"),
  });
  const form = useForm<Leave_Details_Input>({
    defaultValues: {
      ...(type === "UPDATE" && props.formData && props.formData),
    },
    resolver: yupResolver(validationSchema),
  });
  return (
    <form
      className="lg:grid grid-cols-3 p-6 gap-3 bg-content1 rounded-large"
      onSubmit={form.handleSubmit(props.onSubmit)}
    >
      <Controller
        name="name"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <FieldInput
            label="Leave Name"
            {...field}
            invalid={Boolean(errors.name)}
          />
        )}
      />
      <Controller
        name="monthlyDays"
        control={form.control}
        render={({ field }) => (
          <FieldInput type="number" label="Monthly Days" {...field} />
        )}
      />

      <div className="col-span-3 flex gap-3">
        <h3>Carry Forward</h3>
      </div>
      <div className="bg-default-100 rounded-large flex items-center justify-start ">
        <Controller
          name="carryForward"
          control={form.control}
          render={({ field }) => <Checkbox {...field} className="m-0" />}
        />
      </div>

      <Controller
        name="carryForwardMax"
        control={form.control}
        render={({ field }) => (
          <FieldInput type="number" label="Max Days" {...field} />
        )}
      />
      <div className="col-span-3 flex gap-3">
        <h3>Carry Forward</h3>
      </div>
      <Button type="button" severity="danger">
        Close
      </Button>
      <Button loading={props.loading} type="submit">
        {type === "CREATE" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default CreateLeave;
