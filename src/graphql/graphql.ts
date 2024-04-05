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
  /** A scalar that can represent any JSON value. */
  JSON: { input: any; output: any; }
  /**
   * ISO 8601 calendar date without timezone.
   * Format: %Y-%m-%d
   *
   * # Examples
   *
   * * `1994-11-13`
   * * `2000-02-24`
   */
  NaiveDate: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
};

export enum Access {
  Employee = 'EMPLOYEE',
  EmployeeCredential = 'EMPLOYEE_CREDENTIAL',
  Payroll = 'PAYROLL'
}

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  housenumber?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type DocumentAdmin = {
  __typename?: 'DocumentAdmin';
  addressProof?: Maybe<Scalars['String']['output']>;
  identityProof?: Maybe<Scalars['String']['output']>;
};

export type Employee = {
  __typename?: 'Employee';
  access?: Maybe<Scalars['JSON']['output']>;
  accountNo?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Scalars['JSON']['output']>;
  employeeAddress?: Maybe<Scalars['JSON']['output']>;
  employeeEmail: Scalars['String']['output'];
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  employeePassword: Scalars['String']['output'];
  employeeRole?: Maybe<Scalars['String']['output']>;
  employeeStatus?: Maybe<Scalars['Boolean']['output']>;
  employeeType?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  ifscCode?: Maybe<Scalars['String']['output']>;
  isDelete?: Maybe<Scalars['Boolean']['output']>;
  joiningDate?: Maybe<Scalars['DateTime']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  organizationId: Scalars['String']['output'];
  profileImage?: Maybe<Scalars['String']['output']>;
  qualification?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeAccess = {
  employeeId: Scalars['Int']['input'];
  orgId: Scalars['String']['input'];
  write: Array<Access>;
};

export type EmployeeAttendance = {
  __typename?: 'EmployeeAttendance';
  clockIn: Scalars['DateTime']['output'];
  clockOut?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['NaiveDate']['output'];
  employeeId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  orgId: Scalars['String']['output'];
};

export type EmployeeLoginInput = {
  employeeEmail: Scalars['String']['input'];
  employeePassword: Scalars['String']['input'];
};

export type EmployeeRegisterInput = {
  access?: InputMaybe<Scalars['JSON']['input']>;
  employeeEmail: Scalars['String']['input'];
  employeePassword: Scalars['String']['input'];
  employeeRole?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
};

export type GetAttendanceByDates = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GetEmployeeByOrgIdResponse = {
  __typename?: 'GetEmployeeByOrgIdResponse';
  data: Array<Employee>;
  pagination: ListPaginator;
  totalCount: Scalars['Int']['output'];
};

export type GetEmployeeCriteria = {
  id: Scalars['ObjectId']['input'];
  pagination: Paginator_Input;
};

export type ListPaginator = {
  __typename?: 'ListPaginator';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access?: Maybe<Scalars['JSON']['output']>;
  accountNo?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  documents?: Maybe<Scalars['JSON']['output']>;
  employeeAddress?: Maybe<Scalars['JSON']['output']>;
  employeeEmail: Scalars['String']['output'];
  employeeId?: Maybe<Scalars['String']['output']>;
  employeeName?: Maybe<Scalars['String']['output']>;
  employeeRole?: Maybe<Scalars['String']['output']>;
  employeeStatus?: Maybe<Scalars['Boolean']['output']>;
  employeeType?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  ifscCode?: Maybe<Scalars['String']['output']>;
  isDelete?: Maybe<Scalars['Boolean']['output']>;
  joiningDate?: Maybe<Scalars['DateTime']['output']>;
  mobile?: Maybe<Scalars['String']['output']>;
  organizationId: Scalars['String']['output'];
  profileImage?: Maybe<Scalars['String']['output']>;
  qualification?: Maybe<Scalars['JSON']['output']>;
  token: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAttendance: EmployeeAttendance;
  createEmployee: Scalars['Int']['output'];
  createOrganization: OrganizationResponse;
  createOrganizationDetails: SuccessMessage;
  createPermission: SuccessMessage;
  createRole: Scalars['String']['output'];
  updateAttendance: EmployeeAttendance;
  updateOrganization: Scalars['String']['output'];
  updateOrganizationDetails: SuccessMessage;
  updateRoleById: Scalars['String']['output'];
};


export type MutationCreateEmployeeArgs = {
  body: EmployeeRegisterInput;
};


export type MutationCreateOrganizationArgs = {
  body: OrganizationRegister;
};


export type MutationCreateOrganizationDetailsArgs = {
  body: OrganizationDetailsRegisterInput;
};


export type MutationCreatePermissionArgs = {
  body: EmployeeAccess;
};


export type MutationCreateRoleArgs = {
  body: RoleInput;
};


export type MutationUpdateAttendanceArgs = {
  attendanceId: Scalars['Int']['input'];
};


export type MutationUpdateOrganizationArgs = {
  body: UpdateOrganizationsInput;
};


export type MutationUpdateOrganizationDetailsArgs = {
  body: OrganizationDetailsRegisterInput;
};


export type MutationUpdateRoleByIdArgs = {
  body: RoleInput;
};

export type OrgAddress = {
  __typename?: 'OrgAddress';
  city?: Maybe<Scalars['String']['output']>;
  housenumber?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type OrgHoliday = {
  __typename?: 'OrgHoliday';
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type OrganizationDetails = {
  __typename?: 'OrganizationDetails';
  address?: Maybe<OrgAddress>;
  createdAt: Scalars['DateTime']['output'];
  department?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Scalars['String']['output']>>;
  employeeCount: Scalars['Int']['output'];
  endTime: Scalars['Int']['output'];
  establishedOn?: Maybe<Scalars['DateTime']['output']>;
  financialYearEnd?: Maybe<Scalars['String']['output']>;
  financialYearStart?: Maybe<Scalars['String']['output']>;
  holiday?: Maybe<Array<OrgHoliday>>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  isActive: Scalars['Boolean']['output'];
  lastSubscribe: Scalars['DateTime']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  notWorkingDays?: Maybe<Array<Scalars['Int']['output']>>;
  orgContact?: Maybe<Scalars['String']['output']>;
  orgId: Scalars['ObjectId']['output'];
  orgName: Scalars['String']['output'];
  orgType?: Maybe<Scalars['Int']['output']>;
  startTime: Scalars['Int']['output'];
  totalLeaveCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  workingModel?: Maybe<WorkingModel>;
};

export type OrganizationDetailsRegisterInput = {
  address?: InputMaybe<Addressinput>;
  employeeCount: Scalars['Int']['input'];
  endTime: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  orgContact?: InputMaybe<Scalars['String']['input']>;
  orgName: Scalars['String']['input'];
  orgType?: InputMaybe<Scalars['Int']['input']>;
  startTime: Scalars['Int']['input'];
  workingModel?: InputMaybe<WorkingModel>;
};

export type OrganizationLogin = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type OrganizationRegister = {
  email: Scalars['String']['input'];
  location: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type OrganizationResponse = {
  __typename?: 'OrganizationResponse';
  address?: Maybe<Address>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isAdmin: Scalars['Boolean']['output'];
  lastSubscribe: Scalars['DateTime']['output'];
  location: Scalars['Int']['output'];
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentStructure?: Maybe<Scalars['Int']['output']>;
  picturePath?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verification?: Maybe<DocumentAdmin>;
};

export enum PayStructureStatus {
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type Role = {
  __typename?: 'Role';
  access?: Maybe<Array<Scalars['Int']['output']>>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Scalars['ObjectId']['output']>;
};

export type RoleInput = {
  access?: InputMaybe<Array<Access>>;
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ObjectId']['input']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  getAllOrganization: Array<OrganizationDetails>;
  getAllRole?: Maybe<Array<Role>>;
  getAttendanceByDate: Array<EmployeeAttendance>;
  getEmployeeListByOrgId: GetEmployeeByOrgIdResponse;
  loginEmployee: LoginResponse;
  loginOrganization: OrganizationResponse;
};


export type RootQueryGetAttendanceByDateArgs = {
  body: GetAttendanceByDates;
};


export type RootQueryGetEmployeeListByOrgIdArgs = {
  body: GetEmployeeCriteria;
};


export type RootQueryLoginEmployeeArgs = {
  body: EmployeeLoginInput;
};


export type RootQueryLoginOrganizationArgs = {
  body: OrganizationLogin;
};

export type SuccessMessage = {
  __typename?: 'SuccessMessage';
  message: Scalars['String']['output'];
};

export type UpdateOrganizationsInput = {
  address?: InputMaybe<Orgaddressinput>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  paymentStructure?: InputMaybe<PayStructureStatus>;
  picturePath?: InputMaybe<Scalars['String']['input']>;
};

export enum WorkingModel {
  Hybrid = 'HYBRID',
  Onsite = 'ONSITE',
  Other = 'OTHER',
  Remote = 'REMOTE'
}

export type Addressinput = {
  city?: InputMaybe<Scalars['String']['input']>;
  housenumber?: InputMaybe<Scalars['String']['input']>;
  pin?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type Orgaddressinput = {
  city?: InputMaybe<Scalars['String']['input']>;
  housenumber?: InputMaybe<Scalars['String']['input']>;
  pin?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

export type Paginator_Input = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type CreateEmployeeMutationVariables = Exact<{
  body: EmployeeRegisterInput;
}>;


export type CreateEmployeeMutation = { __typename?: 'Mutation', createEmployee: number };

export type GetEmployeeListByOrgIdQueryVariables = Exact<{
  body: GetEmployeeCriteria;
}>;


export type GetEmployeeListByOrgIdQuery = { __typename?: 'RootQuery', getEmployeeListByOrgId: { __typename?: 'GetEmployeeByOrgIdResponse', totalCount: number, data: Array<{ __typename?: 'Employee', id: number, employeeName?: string | null, employeeEmail: string, profileImage?: string | null, employeeType?: number | null, department?: string | null, employeeRole?: string | null, employeeId?: string | null, employeeStatus?: boolean | null, accountNo?: string | null, bankName?: string | null, ifscCode?: string | null, employeePassword: string, country?: number | null, isDelete?: boolean | null, organizationId: string, mobile?: string | null, joiningDate?: any | null, employeeAddress?: any | null, qualification?: any | null, access?: any | null, documents?: any | null, createdAt?: any | null, updatedAt?: any | null }>, pagination: { __typename?: 'ListPaginator', limit: number, offset: number } } };

export type LoginEmployeeQueryVariables = Exact<{
  body: EmployeeLoginInput;
}>;


export type LoginEmployeeQuery = { __typename?: 'RootQuery', loginEmployee: { __typename?: 'LoginResponse', id: number, employeeName?: string | null, employeeEmail: string, profileImage?: string | null, employeeType?: number | null, department?: string | null, employeeRole?: string | null, employeeId?: string | null, employeeStatus?: boolean | null, accountNo?: string | null, bankName?: string | null, ifscCode?: string | null, country?: number | null, isDelete?: boolean | null, organizationId: string, mobile?: string | null, joiningDate?: any | null, employeeAddress?: any | null, qualification?: any | null, access?: any | null, documents?: any | null, createdAt?: any | null, updatedAt?: any | null, token: string } };

export type GetAttendanceByDateQueryQueryVariables = Exact<{
  body: GetAttendanceByDates;
}>;


export type GetAttendanceByDateQueryQuery = { __typename?: 'RootQuery', getAttendanceByDate: Array<{ __typename?: 'EmployeeAttendance', id: number, employeeId: number, orgId: string, clockIn: any, clockOut?: any | null, createdAt: any }> };

export type CreateOrganizationMutationVariables = Exact<{
  body: OrganizationRegister;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'OrganizationResponse', name: string, email: string, isActive: boolean, isAdmin: boolean, mobile?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, createdAt: any, updatedAt: any, token: string, address?: { __typename?: 'Address', city?: string | null, street?: string | null, housenumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, parent?: any | null, access?: Array<number> | null }> | null, verification?: { __typename?: 'DocumentAdmin', identityProof?: string | null, addressProof?: string | null } | null } };

export type LoginOrganizationQueryVariables = Exact<{
  body: OrganizationLogin;
}>;


export type LoginOrganizationQuery = { __typename?: 'RootQuery', loginOrganization: { __typename?: 'OrganizationResponse', name: string, email: string, isActive: boolean, isAdmin: boolean, mobile?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, createdAt: any, updatedAt: any, token: string, address?: { __typename?: 'Address', city?: string | null, street?: string | null, housenumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, parent?: any | null, access?: Array<number> | null }> | null, verification?: { __typename?: 'DocumentAdmin', identityProof?: string | null, addressProof?: string | null } | null } };

export type CreateRoleMutationVariables = Exact<{
  body: RoleInput;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createRole: string };

export type GetAllRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRoleQuery = { __typename?: 'RootQuery', getAllRole?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, parent?: any | null, access?: Array<number> | null }> | null };

export type CreateOrganizationDetailsMutationVariables = Exact<{
  body: OrganizationDetailsRegisterInput;
}>;


export type CreateOrganizationDetailsMutation = { __typename?: 'Mutation', createOrganizationDetails: { __typename?: 'SuccessMessage', message: string } };

export type GetAllOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrganizationQuery = { __typename?: 'RootQuery', getAllOrganization: Array<{ __typename?: 'OrganizationDetails', id?: any | null, orgName: string, orgId: any, isActive: boolean, lastSubscribe: any, latitude?: number | null, longitude?: number | null, workingModel?: WorkingModel | null, employeeCount: number, orgType?: number | null, totalLeaveCount?: number | null, establishedOn?: any | null, documents?: Array<string> | null, logo?: string | null, startTime: number, endTime: number, financialYearStart?: string | null, financialYearEnd?: string | null, department?: number | null, notWorkingDays?: Array<number> | null, orgContact?: string | null, createdAt: any, updatedAt: any, address?: { __typename?: 'OrgAddress', city?: string | null, street?: string | null, housenumber?: string | null, state?: string | null, pin?: string | null } | null, holiday?: Array<{ __typename?: 'OrgHoliday', id?: any | null, name?: string | null, date?: any | null }> | null }> };


export const CreateEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeeRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<CreateEmployeeMutation, CreateEmployeeMutationVariables>;
export const GetEmployeeListByOrgIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEmployeeListByOrgId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetEmployeeCriteria"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getEmployeeListByOrgId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeName"}},{"kind":"Field","name":{"kind":"Name","value":"employeeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"employeeType"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"employeeRole"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeStatus"}},{"kind":"Field","name":{"kind":"Name","value":"accountNo"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"ifscCode"}},{"kind":"Field","name":{"kind":"Name","value":"employeePassword"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"joiningDate"}},{"kind":"Field","name":{"kind":"Name","value":"employeeAddress"}},{"kind":"Field","name":{"kind":"Name","value":"qualification"}},{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"documents"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]}}]}}]} as unknown as DocumentNode<GetEmployeeListByOrgIdQuery, GetEmployeeListByOrgIdQueryVariables>;
export const LoginEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmployeeLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginEmployee"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeName"}},{"kind":"Field","name":{"kind":"Name","value":"employeeEmail"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"}},{"kind":"Field","name":{"kind":"Name","value":"employeeType"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"employeeRole"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeStatus"}},{"kind":"Field","name":{"kind":"Name","value":"accountNo"}},{"kind":"Field","name":{"kind":"Name","value":"bankName"}},{"kind":"Field","name":{"kind":"Name","value":"ifscCode"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"joiningDate"}},{"kind":"Field","name":{"kind":"Name","value":"employeeAddress"}},{"kind":"Field","name":{"kind":"Name","value":"qualification"}},{"kind":"Field","name":{"kind":"Name","value":"access"}},{"kind":"Field","name":{"kind":"Name","value":"documents"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginEmployeeQuery, LoginEmployeeQueryVariables>;
export const GetAttendanceByDateQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAttendanceByDateQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAttendanceByDates"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAttendanceByDate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"orgId"}},{"kind":"Field","name":{"kind":"Name","value":"clockIn"}},{"kind":"Field","name":{"kind":"Name","value":"clockOut"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<GetAttendanceByDateQueryQuery, GetAttendanceByDateQueryQueryVariables>;
export const CreateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationRegister"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"housenumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identityProof"}},{"kind":"Field","name":{"kind":"Name","value":"addressProof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const LoginOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"housenumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identityProof"}},{"kind":"Field","name":{"kind":"Name","value":"addressProof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginOrganizationQuery, LoginOrganizationQueryVariables>;
export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const GetAllRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}}]}}]} as unknown as DocumentNode<GetAllRoleQuery, GetAllRoleQueryVariables>;
export const CreateOrganizationDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganizationDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationDetailsRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganizationDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationDetailsMutation, CreateOrganizationDetailsMutationVariables>;
export const GetAllOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"orgName"}},{"kind":"Field","name":{"kind":"Name","value":"orgId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"workingModel"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"housenumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"orgType"}},{"kind":"Field","name":{"kind":"Name","value":"totalLeaveCount"}},{"kind":"Field","name":{"kind":"Name","value":"establishedOn"}},{"kind":"Field","name":{"kind":"Name","value":"holiday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"documents"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"financialYearStart"}},{"kind":"Field","name":{"kind":"Name","value":"financialYearEnd"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"notWorkingDays"}},{"kind":"Field","name":{"kind":"Name","value":"orgContact"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllOrganizationQuery, GetAllOrganizationQueryVariables>;