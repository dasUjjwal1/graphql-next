"use client";

import { OrganizationRegisterInput } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { Button } from "primereact/button";
import { AppConfig } from "@/config/appConfig";
import { Divider } from "primereact/divider";
import FieldInput from "@/components/global/FieldInput";
import FieldDropdown from "@/components/global/FieldDropdown";

type Props = {
  onSubmit: (val: OrganizationRegisterInput) => void;
  loading: boolean;
  type: "CREATE" | "UPDATE";
  formData: OrganizationRegisterInput | null;
};
const CreateOrganization = ({ type = "CREATE", ...props }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Organization name is required"),
  });
  const form = useForm<OrganizationRegisterInput>({
    defaultValues: {
      ...(type === "UPDATE" &&
        props.formData && {
          ...props.formData,
          workingModel: props.formData.workingModel
            ? AppConfig.WORKING_MODE.find(
                (elm) => elm.count === props?.formData?.workingModel
              )?.value
            : "",
        }),
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
          <FieldInput
            label="Name"
            {...field}
            placeholder="Name"
            icon="pi pi-user"
            invalid={Boolean(errors.name?.message)}
          />
        )}
      />
      <Controller
        name="employeeCount"
        control={form.control}
        render={({ field }) => (
          <FieldInput
            {...field}
            placeholder="30,50 etc."
            label="Est. employee"
            icon="pi pi-user"
          />
        )}
      />
      <Controller
        name="workingModel"
        control={form.control}
        render={({ field }) => (
          <FieldDropdown
            label="Working model"
            options={AppConfig.WORKING_MODE}
            placeholder="Select Working Model"
            {...field}
          />
        )}
      />
      {/* <Controller
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
      /> */}
      {/* <Controller
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
      /> */}
      <Controller
        name="orgContact"
        control={form.control}
        render={({ field }) => (
          <FieldInput
            {...field}
            placeholder="Contact"
            label="Contact"
            icon="pi pi-user"
          />
        )}
      />
      <Divider className="col-span-3 mb-0" align="left">
        <h4 className="m-0">Address Details</h4>
      </Divider>
      <Controller
        name="address.buildingNumber"
        control={form.control}
        render={({ field }) => (
          <FieldInput
            {...field}
            label="Building No."
            placeholder="Building No."
            icon={"pi pi-building"}
          />
        )}
      />
      <Controller
        name="address.street"
        control={form.control}
        render={({ field }) => (
          <FieldInput
            {...field}
            label="Street"
            placeholder="Street"
            icon={"pi pi-building"}
          />
        )}
      />
      <Controller
        name="address.city"
        control={form.control}
        render={({ field }) => (
          <FieldInput
            {...field}
            icon="pi pi-info-circle"
            placeholder="City"
            label="City"
          />
        )}
      />
      <Controller
        name="address.state"
        control={form.control}
        render={({ field }) => (
          <FieldInput
            {...field}
            icon="pi pi-info-circle"
            placeholder="State"
            label="State"
          />
        )}
      />
      <Controller
        name="address.pin"
        control={form.control}
        render={({ field }) => (
          <FieldInput
            {...field}
            icon="pi pi-info-circle"
            placeholder="Pin No."
            label="Pin No."
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
        <Button
          color="primary"
          loading={props.loading}
          type="submit"
          label={type === "CREATE" ? "Create" : "Update"}
        />
      </div>
    </form>
  );
};

export default CreateOrganization;
