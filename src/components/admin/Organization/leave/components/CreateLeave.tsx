"use client";

import FieldInput from "@/components/global/FieldInput";
import {
  LeaveInput,
  LeaveType,
  Leave_Details_Input,
  Role,
} from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

import { RadioButton } from "primereact/radiobutton";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";

type Props = {
  onSubmit: (val: LeaveInput) => void;
  loading: boolean;
  type: "CREATE" | "UPDATE";
  formData: LeaveInput | null;
};
const CreateLeave = ({ type = "CREATE", ...props }: Props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
  });
  const form = useForm<LeaveInput>({
    defaultValues: {
      ...(type === "UPDATE" && props.formData && props.formData),
    },
    resolver: yupResolver(validationSchema),
  });
  return (
    <form
      className=" bg-sky-50 border border-solid border-sky-200 rounded-xl p-6"
      onSubmit={form.handleSubmit(props.onSubmit)}
    >
      <div className="flex gap-3">
        <Controller
          name="name"
          control={form.control}
          render={({ field, formState: { errors } }) => (
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
            <FieldInput keyfilter={"int"} label="Monthly Days" {...field} />
          )}
        />
      </div>

      <h4 className="mb-1">Carry Forward</h4>

      <div className="flex gap-3">
        <div className="bg-default-100 w-full rounded-large flex gap-3 items-center justify-start ">
          <Controller
            name="carryForward"
            control={form.control}
            render={({ field }) => (
              <div className="flex items-center">
                <RadioButton
                  {...field}
                  checked={field.value === "YES"}
                  value={"YES"}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  Yes
                </label>
              </div>
            )}
          />
          <Controller
            name="carryForward"
            control={form.control}
            render={({ field }) => (
              <div className="flex items-center">
                <RadioButton
                  {...field}
                  checked={field.value === "NO"}
                  value={"NO"}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  No
                </label>
              </div>
            )}
          />
        </div>

        <Controller
          name="carryForwardMax"
          control={form.control}
          render={({ field }) => (
            <FieldInput
              keyfilter={"int"}
              disabled={form.watch("carryForward") === "YES" ? false : true}
              label="Max Days"
              {...field}
            />
          )}
        />
      </div>

      <h4 className="mb-1">Earned Leave</h4>

      <div className=" flex gap-3">
        <div className="w-full flex gap-3 items-center justify-start ">
          <Controller
            name="earnedLeave"
            control={form.control}
            render={({ field }) => (
              <div className="flex items-center">
                <RadioButton
                  {...field}
                  checked={field.value === "YES"}
                  value={"YES"}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  Yes
                </label>
              </div>
            )}
          />
          <Controller
            name="earnedLeave"
            control={form.control}
            render={({ field }) => (
              <div className="flex items-center">
                <RadioButton
                  {...field}
                  checked={field.value === "NO"}
                  value={"NO"}
                />
                <label htmlFor="ingredient1" className="ml-2">
                  No
                </label>
              </div>
            )}
          />
        </div>
        <Controller
          name="earnedLeaveMax"
          control={form.control}
          render={({ field }) => (
            <FieldInput
              keyfilter={"int"}
              disabled={form.watch("earnedLeave") === "YES" ? false : true}
              label="Max Days"
              {...field}
            />
          )}
        />
      </div>

      <h4 className="mb-1">Leave Type</h4>

      <div className="w-full pt-3 flex gap-3 items-center justify-start ">
        <Controller
          name="leaveType"
          control={form.control}
          render={({ field }) => (
            <div className="flex items-center">
              <RadioButton
                {...field}
                checked={field.value === LeaveType.Paid}
                value={LeaveType.Paid}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Paid
              </label>
            </div>
          )}
        />
        <Controller
          name="earnedLeave"
          control={form.control}
          render={({ field }) => (
            <div className="flex items-center">
              <RadioButton
                {...field}
                checked={field.value === LeaveType.NonPaid}
                value={LeaveType.NonPaid}
              />
              <label htmlFor="ingredient1" className="ml-2">
                Non Paid
              </label>
            </div>
          )}
        />
      </div>
      <h4 className="mb-1">Leave Description</h4>
      <Controller
        name="leaveDescription"
        control={form.control}
        render={({ field }) => <FieldInput label="Description" {...field} />}
      />
      <div className="pt-4 flex gap-3 justify-end">
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
          icon={"pi pi-send"}
          iconPos="right"
          type="submit"
          label={type === "CREATE" ? "Create" : "Update"}
        />
      </div>
    </form>
  );
};

export default CreateLeave;
