"use client";
import { useState } from "react";
import { Employee } from "@/types/appTypes";
import { useForm } from "react-hook-form";
import CreateOrgEmployee from "./CreateOrgEmployee";

const OrganizationComponent = () => {
  const form = useForm<Employee>({
    defaultValues: {},
  });
  const onSubmit = (value: Employee) => {};
  const [saveType, setSaveType] = useState<"create" | "update">("create");

  return (
    <div className="container grid grid-cols-6 gap-4 items-center">
      <div className="col-span-2 py-8"></div>
      <div className="col-span-4 py-8">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Create Your Employee
        </h1>
        <p className="text-sm text-muted-foreground text-center font-medium mb-6 mt-1">
          Enter details below to create your account
        </p>
        <CreateOrgEmployee
          saveType={saveType}
          setSaveType={setSaveType}
          form={form}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default OrganizationComponent;
