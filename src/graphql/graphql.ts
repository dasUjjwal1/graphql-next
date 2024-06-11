/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
};

export enum Access {
  Employee = 'EMPLOYEE',
  EmployeeCredential = 'EMPLOYEE_CREDENTIAL',
  Payroll = 'PAYROLL'
}

export type Address = {
  __typename?: 'Address';
  buildingNumber?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type Company = {
  __typename?: 'Company';
  companyName: Scalars['String']['output'];
  companyType?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  financialYearEnd?: Maybe<Scalars['String']['output']>;
  financialYearStart?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastSubscribe: Scalars['DateTime']['output'];
  leave?: Maybe<Array<LeaveDetails>>;
  logo?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ObjectId']['output'];
};

export type CompanyCreateInput = {
  companyName: Scalars['String']['input'];
  companyType?: InputMaybe<Scalars['Int']['input']>;
  documents?: InputMaybe<Array<Scalars['String']['input']>>;
  financialYearEnd?: InputMaybe<Scalars['String']['input']>;
  financialYearStart?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyUpdateInput = {
  companyName: Scalars['String']['input'];
  companyType?: InputMaybe<Scalars['Int']['input']>;
  documents?: InputMaybe<Array<Scalars['String']['input']>>;
  financialYearEnd?: InputMaybe<Scalars['String']['input']>;
  financialYearStart?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
};

export type Department = {
  __typename?: 'Department';
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectId']['output'];
  isDelete: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type DepartmentCreateInput = {
  name: Scalars['String']['input'];
  organizationId: Scalars['ObjectId']['input'];
};

export type DepartmentUpdateInput = {
  id: Scalars['ObjectId']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ObjectId']['input'];
};

export type Designation = {
  __typename?: 'Designation';
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ObjectId']['output'];
  isDelete: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type DesignationCreateInput = {
  department?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['ObjectId']['input'];
};

export type DesignationUpdateInput = {
  department?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ObjectId']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ObjectId']['input'];
};

export type DocumentAdmin = {
  __typename?: 'DocumentAdmin';
  addressProof?: Maybe<Scalars['String']['output']>;
  identityProof?: Maybe<Scalars['String']['output']>;
};

export type GetAllLeaveByOrganization = {
  __typename?: 'GetAllLeaveByOrganization';
  id: Scalars['ObjectId']['output'];
  leaveList?: Maybe<Array<LeaveDetails>>;
};

export type GetByCompanyId = {
  id: Scalars['ObjectId']['input'];
};

export type LeaveDetails = {
  __typename?: 'LeaveDetails';
  carryForward?: Maybe<Scalars['Boolean']['output']>;
  carryForwardMax?: Maybe<Scalars['Int']['output']>;
  days?: Maybe<Scalars['Int']['output']>;
  earnedLeave?: Maybe<Scalars['Boolean']['output']>;
  earnedLeaveMax?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  isActive: Scalars['Boolean']['output'];
  isDelete: Scalars['Boolean']['output'];
  leaveDescription?: Maybe<Scalars['String']['output']>;
  leaveType?: Maybe<Scalars['Int']['output']>;
  monthlyDays?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
};

export type LeaveInput = {
  carryForward?: InputMaybe<Scalars['Boolean']['input']>;
  carryForwardMax?: InputMaybe<Scalars['Int']['input']>;
  companyId: Scalars['ObjectId']['input'];
  days?: InputMaybe<Scalars['Int']['input']>;
  earnedLeave?: InputMaybe<Scalars['Boolean']['input']>;
  earnedLeaveMax?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  isAllOrganization?: InputMaybe<Scalars['Boolean']['input']>;
  leaveDescription?: InputMaybe<Scalars['String']['input']>;
  leaveType?: InputMaybe<LeaveType>;
  monthlyDays?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export enum LeaveType {
  NonPaid = 'NON_PAID',
  Paid = 'PAID'
}

export type Mutation = {
  __typename?: 'Mutation';
  addDepartment: SuccessMessage;
  addDesignation: SuccessMessage;
  addLeave: SuccessMessage;
  addOrganizationLeave: SuccessMessage;
  createCompany: Company;
  createOrganization: SuccessMessage;
  createRole: SuccessMessage;
  createUser: UserResponse;
  deleteRoleById: SuccessMessage;
  updateCompany?: Maybe<Company>;
  updateDepartment: SuccessMessage;
  updateDesignation: SuccessMessage;
  updateLeave: SuccessMessage;
  updateOrganization: SuccessMessage;
  updateOrganizationDetailsAttendancePolicy: SuccessMessage;
  updateRoleById: SuccessMessage;
  updateUser: SuccessMessage;
};


export type MutationAddDepartmentArgs = {
  body: DepartmentCreateInput;
};


export type MutationAddDesignationArgs = {
  body: DesignationCreateInput;
};


export type MutationAddLeaveArgs = {
  body: LeaveInput;
};


export type MutationAddOrganizationLeaveArgs = {
  body: OrgAddLeaveInput;
};


export type MutationCreateCompanyArgs = {
  body: CompanyCreateInput;
};


export type MutationCreateOrganizationArgs = {
  body: OrganizationRegisterInput;
};


export type MutationCreateRoleArgs = {
  body: RoleInput;
};


export type MutationCreateUserArgs = {
  body: UserRegister;
};


export type MutationDeleteRoleByIdArgs = {
  body?: InputMaybe<Scalars['ObjectId']['input']>;
};


export type MutationUpdateCompanyArgs = {
  body: CompanyUpdateInput;
};


export type MutationUpdateDepartmentArgs = {
  body: DepartmentUpdateInput;
};


export type MutationUpdateDesignationArgs = {
  body: DesignationUpdateInput;
};


export type MutationUpdateLeaveArgs = {
  body: LeaveInput;
};


export type MutationUpdateOrganizationArgs = {
  body: OrganizationRegisterInput;
};


export type MutationUpdateOrganizationDetailsAttendancePolicyArgs = {
  body: OrganizationAttendancePolicyInput;
};


export type MutationUpdateRoleByIdArgs = {
  body: RoleInput;
};


export type MutationUpdateUserArgs = {
  body: UpdateUsersInput;
};

export type OrgAddLeaveInput = {
  leaveInputs: Array<Scalars['ObjectId']['input']>;
  orgId: Scalars['ObjectId']['input'];
};

export type OrgHoliday = {
  __typename?: 'OrgHoliday';
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Organization = {
  __typename?: 'Organization';
  address?: Maybe<Address>;
  companyId: Scalars['ObjectId']['output'];
  createdAt: Scalars['DateTime']['output'];
  department?: Maybe<Array<Department>>;
  designation?: Maybe<Array<Designation>>;
  documents?: Maybe<Array<Scalars['String']['output']>>;
  employeeCount: Scalars['Int']['output'];
  gracePeriod?: Maybe<Scalars['Int']['output']>;
  holiday?: Maybe<Array<OrgHoliday>>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  isActive: Scalars['Boolean']['output'];
  lastSubscribe: Scalars['DateTime']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  leave?: Maybe<Array<Scalars['ObjectId']['output']>>;
  locationRequired?: Maybe<Scalars['Boolean']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  notWorkingDays?: Maybe<Array<Scalars['Int']['output']>>;
  orgContact?: Maybe<Scalars['String']['output']>;
  remoteClockIn?: Maybe<Scalars['Boolean']['output']>;
  shiftSchedule?: Maybe<Array<ShiftSchedule>>;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['ObjectId']['output'];
  workingModel?: Maybe<Scalars['Int']['output']>;
};

export type OrganizationAttendancePolicyInput = {
  applyToAll?: InputMaybe<Scalars['Boolean']['input']>;
  gracePeriod?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  locationRequired?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  remoteClockIn?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrganizationRegisterInput = {
  address?: InputMaybe<Address_Input>;
  employeeCount: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  name: Scalars['String']['input'];
  orgContact?: InputMaybe<Scalars['String']['input']>;
  workingModel?: InputMaybe<WorkingModel>;
};

export enum PayStructureStatus {
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type Query = {
  __typename?: 'Query';
  getAllDepartmentByOrgId?: Maybe<Array<Department>>;
  getAllDesignationByOrgId?: Maybe<Array<Designation>>;
  getAllLeave?: Maybe<Array<LeaveDetails>>;
  getAllLeaveByAdmin?: Maybe<GetAllLeaveByOrganization>;
  getAllOrganization: Array<Organization>;
  getAllRole?: Maybe<Array<Role>>;
  getCompanyDetails?: Maybe<Company>;
  loginUser: UserResponse;
};


export type QueryGetAllDepartmentByOrgIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryGetAllDesignationByOrgIdArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryGetAllLeaveArgs = {
  companyId: Scalars['ObjectId']['input'];
};


export type QueryGetAllLeaveByAdminArgs = {
  orgId: Scalars['ObjectId']['input'];
};


export type QueryGetAllRoleArgs = {
  body: GetByCompanyId;
};


export type QueryLoginUserArgs = {
  body: UserLogin;
};

export type Role = {
  __typename?: 'Role';
  access?: Maybe<Array<Scalars['Int']['output']>>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  isDelete?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Scalars['ObjectId']['output']>;
};

export type RoleInput = {
  access?: InputMaybe<Array<Access>>;
  companyId: Scalars['ObjectId']['input'];
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  isDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type ShiftSchedule = {
  __typename?: 'ShiftSchedule';
  department: Array<Scalars['ObjectId']['output']>;
  endTime: Scalars['Int']['output'];
  id?: Maybe<Scalars['ObjectId']['output']>;
  shiftType?: Maybe<Scalars['String']['output']>;
  startTime: Scalars['Int']['output'];
};

export type SuccessMessage = {
  __typename?: 'SuccessMessage';
  message: Scalars['String']['output'];
};

export type UpdateUsersInput = {
  address?: InputMaybe<User_Address_Input>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  paymentStructure?: InputMaybe<PayStructureStatus>;
  picturePath?: InputMaybe<Scalars['String']['input']>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  city?: Maybe<Scalars['String']['output']>;
  houseNumber?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type UserLogin = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserRegister = {
  email: Scalars['String']['input'];
  gmtMinuteOffset?: InputMaybe<Scalars['Int']['input']>;
  location: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  address?: Maybe<UserAddress>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  gmtMinuteOffset?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  isDelete?: Maybe<Scalars['Boolean']['output']>;
  lastSubscribe: Scalars['DateTime']['output'];
  location: Scalars['Int']['output'];
  mobileNo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentStructure?: Maybe<Scalars['Int']['output']>;
  picturePath?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verification?: Maybe<DocumentAdmin>;
};

export enum WorkingModel {
  Hybrid = 'HYBRID',
  Onsite = 'ONSITE',
  Other = 'OTHER',
  Remote = 'REMOTE'
}

export type Address_Input = {
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  pin?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type User_Address_Input = {
  city?: InputMaybe<Scalars['String']['input']>;
  houseNumber?: InputMaybe<Scalars['String']['input']>;
  pin?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type AddDepartmentMutationVariables = Exact<{
  body: DepartmentCreateInput;
}>;


export type AddDepartmentMutation = { __typename?: 'Mutation', addDepartment: { __typename?: 'SuccessMessage', message: string } };

export type GetAllDepartmentByOrgIdQueryVariables = Exact<{
  getAllDepartmentByOrgIdId: Scalars['ObjectId']['input'];
}>;


export type GetAllDepartmentByOrgIdQuery = { __typename?: 'Query', getAllDepartmentByOrgId?: Array<{ __typename?: 'Department', id: any, name: string, isDelete: boolean }> | null };

export type AddLeaveMutationVariables = Exact<{
  body: LeaveInput;
}>;


export type AddLeaveMutation = { __typename?: 'Mutation', addLeave: { __typename?: 'SuccessMessage', message: string } };

export type CreateUserMutationVariables = Exact<{
  body: UserRegister;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', name: string, email: string, isActive?: boolean | null, isAdmin: boolean, mobileNo?: string | null, isDelete?: boolean | null, gmtMinuteOffset?: number | null, timeZone?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, createdAt: any, updatedAt: any, token: string, address?: { __typename?: 'UserAddress', city?: string | null, street?: string | null, houseNumber?: string | null, state?: string | null, pin?: string | null } | null, verification?: { __typename?: 'DocumentAdmin', identityProof?: string | null, addressProof?: string | null } | null } };

export type LoginUserQueryVariables = Exact<{
  body: UserLogin;
}>;


export type LoginUserQuery = { __typename?: 'Query', loginUser: { __typename?: 'UserResponse', name: string, email: string, isActive?: boolean | null, isAdmin: boolean, mobileNo?: string | null, isDelete?: boolean | null, gmtMinuteOffset?: number | null, timeZone?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, createdAt: any, updatedAt: any, token: string, address?: { __typename?: 'UserAddress', city?: string | null, street?: string | null, houseNumber?: string | null, state?: string | null, pin?: string | null } | null, verification?: { __typename?: 'DocumentAdmin', identityProof?: string | null, addressProof?: string | null } | null } };

export type GetAllOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrganizationQuery = { __typename?: 'Query', getAllOrganization: Array<{ __typename?: 'Organization', id?: any | null, name: string, userId: any, companyId: any, isActive: boolean, lastSubscribe: any, latitude?: number | null, longitude?: number | null, workingModel?: number | null, employeeCount: number, documents?: Array<string> | null, notWorkingDays?: Array<number> | null, orgContact?: string | null, leave?: Array<any> | null, remoteClockIn?: boolean | null, locationRequired?: boolean | null, gracePeriod?: number | null, createdAt: any, updatedAt: any, address?: { __typename?: 'Address', city?: string | null, street?: string | null, buildingNumber?: string | null, state?: string | null, pin?: string | null } | null }> };

export type CreateOrganizationMutationVariables = Exact<{
  body: OrganizationRegisterInput;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'SuccessMessage', message: string } };

export type CreateRoleMutationVariables = Exact<{
  body: RoleInput;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createRole: { __typename?: 'SuccessMessage', message: string } };

export type GetCompanyDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompanyDetailsQuery = { __typename?: 'Query', getCompanyDetails?: { __typename?: 'Company', id?: any | null, companyName: string, userId: any, isActive?: boolean | null, logo?: string | null, financialYearStart?: string | null, financialYearEnd?: string | null, lastSubscribe: any, companyType?: number | null, createdAt: any, updatedAt: any, roles?: Array<{ __typename?: 'Role', id?: any | null, isDelete?: boolean | null, name?: string | null, parent?: any | null, access?: Array<number> | null }> | null, leave?: Array<{ __typename?: 'LeaveDetails', id?: any | null, name: string, days?: number | null, carryForward?: boolean | null, carryForwardMax?: number | null, earnedLeave?: boolean | null, earnedLeaveMax?: number | null, monthlyDays?: number | null, leaveDescription?: string | null, leaveType?: number | null, isDelete: boolean, isActive: boolean }> | null } | null };

export type GetAllLeaveQueryVariables = Exact<{
  companyId: Scalars['ObjectId']['input'];
}>;


export type GetAllLeaveQuery = { __typename?: 'Query', getAllLeave?: Array<{ __typename?: 'LeaveDetails', id?: any | null, name: string, days?: number | null, carryForward?: boolean | null, carryForwardMax?: number | null, earnedLeave?: boolean | null, earnedLeaveMax?: number | null, monthlyDays?: number | null, leaveDescription?: string | null, leaveType?: number | null, isDelete: boolean, isActive: boolean }> | null };

export type GetAllRoleQueryVariables = Exact<{
  body: GetByCompanyId;
}>;


export type GetAllRoleQuery = { __typename?: 'Query', getAllRole?: Array<{ __typename?: 'Role', id?: any | null, isDelete?: boolean | null, name?: string | null, parent?: any | null, access?: Array<number> | null }> | null };

export type UpdateRoleByIdMutationVariables = Exact<{
  body: RoleInput;
}>;


export type UpdateRoleByIdMutation = { __typename?: 'Mutation', updateRoleById: { __typename?: 'SuccessMessage', message: string } };

export type DeleteRoleByIdMutationVariables = Exact<{
  body?: InputMaybe<Scalars['ObjectId']['input']>;
}>;


export type DeleteRoleByIdMutation = { __typename?: 'Mutation', deleteRoleById: { __typename?: 'SuccessMessage', message: string } };

export type CreateCompanyMutationVariables = Exact<{
  body: CompanyCreateInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: { __typename?: 'Company', id?: any | null, companyName: string, isActive?: boolean | null, logo?: string | null, financialYearStart?: string | null, financialYearEnd?: string | null, lastSubscribe: any, companyType?: number | null, createdAt: any } };

export type UpdateOrganizationMutationVariables = Exact<{
  body: OrganizationRegisterInput;
}>;


export type UpdateOrganizationMutation = { __typename?: 'Mutation', updateOrganization: { __typename?: 'SuccessMessage', message: string } };


export const AddDepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDepartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDepartment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddDepartmentMutation, AddDepartmentMutationVariables>;
export const GetAllDepartmentByOrgIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllDepartmentByOrgId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getAllDepartmentByOrgIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllDepartmentByOrgId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getAllDepartmentByOrgIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}}]}}]}}]} as unknown as DocumentNode<GetAllDepartmentByOrgIdQuery, GetAllDepartmentByOrgIdQueryVariables>;
export const AddLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LeaveInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addLeave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddLeaveMutation, AddLeaveMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRegister"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNo"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"gmtMinuteOffset"}},{"kind":"Field","name":{"kind":"Name","value":"timeZone"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identityProof"}},{"kind":"Field","name":{"kind":"Name","value":"addressProof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNo"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"gmtMinuteOffset"}},{"kind":"Field","name":{"kind":"Name","value":"timeZone"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identityProof"}},{"kind":"Field","name":{"kind":"Name","value":"addressProof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginUserQuery, LoginUserQueryVariables>;
export const GetAllOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"workingModel"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"buildingNumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"documents"}},{"kind":"Field","name":{"kind":"Name","value":"notWorkingDays"}},{"kind":"Field","name":{"kind":"Name","value":"orgContact"}},{"kind":"Field","name":{"kind":"Name","value":"leave"}},{"kind":"Field","name":{"kind":"Name","value":"remoteClockIn"}},{"kind":"Field","name":{"kind":"Name","value":"locationRequired"}},{"kind":"Field","name":{"kind":"Name","value":"gracePeriod"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllOrganizationQuery, GetAllOrganizationQueryVariables>;
export const CreateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const GetCompanyDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanyDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompanyDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"financialYearStart"}},{"kind":"Field","name":{"kind":"Name","value":"leave"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"carryForward"}},{"kind":"Field","name":{"kind":"Name","value":"carryForwardMax"}},{"kind":"Field","name":{"kind":"Name","value":"earnedLeave"}},{"kind":"Field","name":{"kind":"Name","value":"earnedLeaveMax"}},{"kind":"Field","name":{"kind":"Name","value":"monthlyDays"}},{"kind":"Field","name":{"kind":"Name","value":"leaveDescription"}},{"kind":"Field","name":{"kind":"Name","value":"leaveType"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}},{"kind":"Field","name":{"kind":"Name","value":"financialYearEnd"}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"companyType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>;
export const GetAllLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllLeave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"days"}},{"kind":"Field","name":{"kind":"Name","value":"carryForward"}},{"kind":"Field","name":{"kind":"Name","value":"carryForwardMax"}},{"kind":"Field","name":{"kind":"Name","value":"earnedLeave"}},{"kind":"Field","name":{"kind":"Name","value":"earnedLeaveMax"}},{"kind":"Field","name":{"kind":"Name","value":"monthlyDays"}},{"kind":"Field","name":{"kind":"Name","value":"leaveDescription"}},{"kind":"Field","name":{"kind":"Name","value":"leaveType"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}}]}}]}}]} as unknown as DocumentNode<GetAllLeaveQuery, GetAllLeaveQueryVariables>;
export const GetAllRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetByCompanyId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}}]}}]} as unknown as DocumentNode<GetAllRoleQuery, GetAllRoleQueryVariables>;
export const UpdateRoleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRoleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRoleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateRoleByIdMutation, UpdateRoleByIdMutationVariables>;
export const DeleteRoleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRoleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRoleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteRoleByIdMutation, DeleteRoleByIdMutationVariables>;
export const CreateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"financialYearStart"}},{"kind":"Field","name":{"kind":"Name","value":"financialYearEnd"}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"companyType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const UpdateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;