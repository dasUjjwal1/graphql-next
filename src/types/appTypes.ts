import { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

export type Role = {
  _id?: string | null;
  name: string;
  position: number | string;
  parent?: number | string;
};
export type RoleFormTypes = {
  form: UseFormReturn<Role>;
  onSubmit: (value: Role) => void;
  setSaveType: Dispatch<SetStateAction<"create" | "update">>;
  saveType: "create" | "update";
};
export type Employee = {
  employeeName?: string;
  employeeEmail: string;
  profileImage: string;
  employeeType?: number;
  depertment?: string;
  employeePosition?: number;
  employeeId?: number;
  account?: string;
  employeePassword: string;
  country: number;
  organizationId: string;
  mobile: string;
  joiningDate?: Date;
  employeeAddress?: JSON;
  qualification?: JSON;
};
export type EmployeeFormTypes = {
  form: UseFormReturn<Employee>;
  onSubmit: (value: Employee) => void;
  setSaveType: Dispatch<SetStateAction<"create" | "update">>;
  saveType: "create" | "update";
};
