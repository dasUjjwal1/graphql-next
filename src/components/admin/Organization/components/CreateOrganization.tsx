"use client";

import { OrganizationRegisterInput, WorkingModel } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText } from "primereact/inputtext";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { AppConfig } from "@/config/appConfig";
import { Divider } from "primereact/divider";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

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
      className="lg:grid grid-cols-3 gap-4"
      onSubmit={form.handleSubmit(props.onSubmit)}
    >
      <Divider className="col-span-3 mb-0" align="left">
        <h4 className="m-0">Basic Details</h4>
      </Divider>
      <Controller
        name="name"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <IconField iconPosition="left">
            <InputIcon className="pi pi-building-columns"> </InputIcon>
            <InputText
              className="w-full"
              {...field}
              invalid={Boolean(errors.name?.message)}
              placeholder="Name"
            />
          </IconField>
        )}
      />
      <Controller
        name="employeeCount"
        control={form.control}
        render={({ field }) => (
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <InputText
              className="w-full"
              keyfilter={"int"}
              placeholder="Est. Employee Count"
              {...field}
            />
          </IconField>
        )}
      />
      <Controller
        name="workingModel"
        control={form.control}
        render={({ field }) => (
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <Dropdown
              options={AppConfig.WORKING_MODE}
              className="w-full"
              placeholder="Select Working Model"
              {...field}
            />
          </IconField>
        )}
      />
      <Controller
        name="startTime"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <InputText
              type="time"
              className="w-full"
              {...field}
              placeholder="Start-Time"
            />
          </IconField>
        )}
      />
      <Controller
        name="endTime"
        control={form.control}
        render={({ field, formState: { errors, touchedFields } }) => (
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user"> </InputIcon>
            <InputText
              type="time"
              className="w-full"
              {...field}
              placeholder="End-Time"
            />
          </IconField>
        )}
      />
      <Controller
        name="orgContact"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText className="w-full" {...field} />
            <label>Contact</label>
          </FloatLabel>
        )}
      />
      <Divider className="col-span-3 mb-0" align="left">
        <h4 className="m-0">Address Details</h4>
      </Divider>
      <Controller
        name="address.buildingNumber"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText className="w-full" {...field} />
            <label>Building No.</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.street"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText className="w-full" {...field} />
            <label>Street</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.city"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText className="w-full" {...field} />
            <label>City</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.state"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText className="w-full" {...field} />
            <label>State</label>
          </FloatLabel>
        )}
      />
      <Controller
        name="address.pin"
        control={form.control}
        render={({ field }) => (
          <FloatLabel>
            <InputText className="w-full" {...field} />
            <label htmlFor="name">Pin No.</label>
          </FloatLabel>
        )}
      />

      <div className="col-span-3 flex gap-3 justify-end">
        <Button type="button" label="Close" severity="danger" />
        <Button
          color="primary"
          loading={props.loading}
          type="submit"
          label="Create"
        />
      </div>
    </form>
  );
};

export default CreateOrganization;
