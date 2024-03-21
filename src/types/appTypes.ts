import { OrganizationDetailsRegisterInput } from "@/graphql/graphql";
import { Dispatch, FC, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";
type IStringIndex = {
  [key: string]: any;
};
export type Role = IStringIndex & {
  _id: string;
  name: string;
  position: number;
  parent: string;
};
export type RoleFormTypes = {
  roles: {
    id: string;
    name: string;
    position: number;
    parent?: string;
  }[];
  Trigger: FC;
  refetch?: () => void;
  open?: boolean;
  setModal?: any;
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
export type OrgDetailsTable = {
  _id: string;
  name: string;
};

export type OrgDetailsFormTypes = {
  form: UseFormReturn<OrganizationDetailsRegisterInput>;
  onSubmit: (value: OrganizationDetailsRegisterInput) => void;
};
