"use client";
import FieldCalender from "@/components/global/FieldCalender";
import FieldDropdown from "@/components/global/FieldDropdown";
import FieldInput from "@/components/global/FieldInput";
import { AppConfig } from "@/config/appConfig";
import { CompanyCreateInput } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
type Props = {
  onSubmit: (val: CompanyCreateInput) => void;
  loading: boolean;
  data?: CompanyCreateInput;
};
const CompanyDetails = (props: Props) => {
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
  });
  const form = useForm<CompanyCreateInput>({
    defaultValues: {
      ...(props.data && {
        ...props.data,
        financialYearStart: props?.data?.financialYearStart
          ? new Date(props?.data?.financialYearStart)
          : "",
        financialYearEnd: props?.data?.financialYearEnd
          ? new Date(props?.data?.financialYearEnd)
          : "",
      }),
    },
    resolver: yupResolver(validationSchema),
  });

  return (
    <form
      onSubmit={form.handleSubmit(props.onSubmit)}
      className="lg:grid grid-cols-4 gap-4 pt-3"
    >
      <Controller
        name="companyName"
        control={form.control}
        render={({ field, formState: { errors } }) => (
          <FieldInput
            label="Company Name"
            {...field}
            invalid={Boolean(errors.companyName?.message)}
          />
        )}
      />
      <Controller
        name="companyType"
        control={form.control}
        render={({ field }) => (
          <FieldDropdown
            label="Company Type"
            filter
            {...field}
            options={AppConfig.COMPANY_TYPE}
          />
        )}
      />
      <Controller
        name="financialYearStart"
        control={form.control}
        render={({ field }) => (
          <FieldCalender label="Financial Year Start" {...field} />
        )}
      />
      <Controller
        name="financialYearEnd"
        control={form.control}
        render={({ field }) => (
          <FieldCalender label="Financial Year End" {...field} />
        )}
      />
      <div className="flex  col-span-4 gap-3">
        <FileUpload
          chooseLabel="Upload Logo"
          className="w-full"
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />
        <FileUpload
          chooseLabel=" Documents"
          className="w-full"
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />
      </div>
      <p className="text-gray-500 col-span-2">
        {!props.data && "* You need to create once, you can update it later"}
      </p>
      <div className="col-span-2 pt-3 flex gap-3 justify-end">
        <Button
          type="reset"
          onClick={() => form.reset()}
          label="Reset"
          severity="danger"
        />
        <Button
          color="primary"
          loading={props.loading}
          type="submit"
          iconPos="right"
          label={props?.data ? "Update" : "Save"}
        />
      </div>
    </form>
  );
};

export default CompanyDetails;
