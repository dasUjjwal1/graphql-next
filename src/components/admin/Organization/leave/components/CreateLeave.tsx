"use client";

import { Leave_Details_Input, Role } from "@/graphql/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
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
          <Input
            label="Leave Name"
            {...field}
            {...(Boolean(errors.name) && {
              isInvalid: true,
              errorMessage: errors.name?.message,
            })}
            endContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-default-400"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        )}
      />
      <Controller
        name="monthlyDays"
        control={form.control}
        render={({ field }) => (
          <Input
            type="number"
            label="Monthly Days"
            {...field}
            endContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-default-400"
              >
                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
              </svg>
            }
          />
        )}
      />

      <div className="col-span-3 flex gap-3">
        <h3>Carry Forward</h3>
      </div>
      <div className="bg-default-100 rounded-large flex items-center justify-start ">
        <Controller
          name="carryForward"
          control={form.control}
          render={({ field }) => (
            <Checkbox {...field} className="m-0">
              Yes
            </Checkbox>
          )}
        />
      </div>

      <Controller
        name="monthlyDays"
        control={form.control}
        render={({ field }) => (
          <Input
            type="number"
            label="Max"
            {...field}
            endContent={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-default-400"
              >
                <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
              </svg>
            }
          />
        )}
      />
      <div className="col-span-3 flex gap-3">
        <h3>Carry Forward</h3>
      </div>
      <Button color="danger" variant="flat" type="button">
        Close
      </Button>
      <Button color="primary" isLoading={props.loading} type="submit">
        {type === "CREATE" ? "Create" : "Update"}
      </Button>
    </form>
  );
};

export default CreateLeave;
