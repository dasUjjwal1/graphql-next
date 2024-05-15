"use client";

import { OrganizationRegisterInput, WorkingModel } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
type Props = {
  onSubmit: (val: OrganizationRegisterInput) => void;
  loading: boolean;
  type: "CREATE" | "UPDATE";
  formData: OrganizationRegisterInput | null;
};
const CreateOrganization = ({ type = "CREATE", ...props }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Organization name is required"),
    startTime: Yup.string().required("This field is required"),
    endTime: Yup.string().required("This field is required"),
  });
  const form = useForm<OrganizationRegisterInput>({
    defaultValues: {
      ...(type === "UPDATE" && props.formData && props.formData),
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      className="lg:grid grid-cols-3 gap-4 p-8"
      onSubmit={form.handleSubmit(props.onSubmit)}
    >
      <Controller
        name="name"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <FloatLabel>
            <InputText {...field} />
            <label htmlFor="name">Name</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="employeeCount"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText type="number" {...field} />
            <label htmlFor="employeeCount">Est. Employee Count</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="workingModel"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <Dropdown options={[]} className="w-full" {...field} />
            <label>Select Working Model</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="startTime"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <FloatLabel>
            <InputText {...field} />
            <label>Start-Time</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="endTime"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <FloatLabel>
            <InputText {...field} />
            <label>End-Time</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="orgContact"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText {...field} />
            <label>Contact</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.buildingNumber"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText {...field} />
            <label>Building No.</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.street"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText {...field} />
            <label>Street</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.city"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText {...field} />
            <label>City</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.state"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText {...field} />
            <label>State</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.pin"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText {...field} />
            <label htmlFor="name">Pin</label>
          </FloatLabel>
        )}
      />

      <Button type="button" label="Close" />
      {/* <Button color="primary" isLoading={props.loading} type="submit">
        Create
      </Button> */}
    </form>
  );
};

export default CreateOrganization;
