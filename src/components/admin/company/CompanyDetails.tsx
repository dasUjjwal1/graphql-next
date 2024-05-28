"use client";
import FieldCalender from "@/components/global/FieldCalender";
import FieldDropdown from "@/components/global/FieldDropdown";
import FieldInput from "@/components/global/FieldInput";
import { AppConfig } from "@/config/appConfig";
import { CompanyCreateInput } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import BackgroundImg from "../../../../public/resource/image.png";
import * as Yup from "yup";
type Props = {
  onSubmit: (val: CompanyCreateInput) => void;
  loading: boolean;
};
const CompanyDetails = (props: Props) => {
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company name is required"),
  });
  const form = useForm<CompanyCreateInput>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="h-full flex relative flex-col gap-3 justify-center items-center">
      <div className="border z-10 bg-white border-gray-200 border-solid w-3/4 rounded-lg p-6 ">
        <div className="text-gray-500">
          <h2>
            Company Details
            <strong className="text-[var(--primary-color)]">.</strong>
          </h2>
          <p className="mt-1">Please fill out all the fields.</p>
        </div>
        <form onSubmit={form.handleSubmit(props.onSubmit)}>
          <div className="flex gap-3 py-3 w-full">
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
          </div>
          <div className="flex gap-3">
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
          <p className="text-gray-500">
            * You need to create once, you can update it later
          </p>
          <div className="col-span-3 pt-3 flex gap-3 justify-end">
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
              icon={"pi pi-send"}
              iconPos="right"
              label={"Save"}
            />
          </div>
        </form>
      </div>
      <div className="absolute w-full h-40 bg-blue-100 -z-0 top-0 mt-14 overflow-hidden">
        <Image src={BackgroundImg} alt="" layout="fill" objectFit="center" />
      </div>
    </div>
  );
};

export default CompanyDetails;
