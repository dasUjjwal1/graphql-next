export type Role = {
  _id?: string | null;
  name: string;
  position: number | string;
  parent?: number | string;
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
