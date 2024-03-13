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
  ObjectId: { input: any; output: any; }
};

export enum Access {
  Employee = 'EMPLOYEE',
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

export type Employee = {
  __typename?: 'Employee';
  access?: Maybe<Scalars['JSON']['output']>;
  account?: Maybe<Scalars['String']['output']>;
  country: Scalars['Int']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  depertment?: Maybe<Scalars['String']['output']>;
  employeeAddress?: Maybe<Scalars['JSON']['output']>;
  employeeEmail: Scalars['String']['output'];
  employeeId?: Maybe<Scalars['Int']['output']>;
  employeeName: Scalars['String']['output'];
  employeePassword: Scalars['String']['output'];
  employeeRole?: Maybe<Scalars['Int']['output']>;
  employeeStatus: Scalars['Boolean']['output'];
  employeeType?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isDelete: Scalars['Boolean']['output'];
  joiningDate?: Maybe<Scalars['DateTime']['output']>;
  mobile: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  profileImage: Scalars['String']['output'];
  qualification?: Maybe<Scalars['JSON']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeAccess = {
  employeeId: Scalars['Int']['input'];
  orgId: Scalars['String']['input'];
  write: Array<Access>;
};

export type EmployeeLoginInput = {
  employeeEmail: Scalars['String']['input'];
  employeePassword: Scalars['String']['input'];
};

export type EmployeeRegisterInput = {
  access?: InputMaybe<EmployeeAccess>;
  account?: InputMaybe<Scalars['String']['input']>;
  country: Scalars['Int']['input'];
  depertment?: InputMaybe<Scalars['String']['input']>;
  employeeAddress?: InputMaybe<Scalars['JSON']['input']>;
  employeeEmail: Scalars['String']['input'];
  employeeId?: InputMaybe<Scalars['Int']['input']>;
  employeeName: Scalars['String']['input'];
  employeePassword: Scalars['String']['input'];
  employeeRole?: InputMaybe<Scalars['Int']['input']>;
  employeeType?: InputMaybe<Scalars['Int']['input']>;
  joiningDate?: InputMaybe<Scalars['DateTime']['input']>;
  mobile: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  profileImage: Scalars['String']['input'];
  qualification?: InputMaybe<Scalars['JSON']['input']>;
};

export type GetEmployeeCriteria = {
  id: Scalars['ObjectId']['input'];
  pagination: ListPaginator;
};

export type ListPaginator = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String']['output'];
  user: Employee;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAttendence: Scalars['String']['output'];
  createEmployee: Scalars['Int']['output'];
  createOrganization: OrganizationResponse;
  createOrganizationDetails: Scalars['String']['output'];
  createPermission: Scalars['String']['output'];
  createRole: Scalars['String']['output'];
  updateOrganization: Scalars['String']['output'];
  updateOrganizationDetails: Scalars['String']['output'];
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
  depertment?: Maybe<Scalars['Int']['output']>;
  documents?: Maybe<Array<Scalars['String']['output']>>;
  employeeCount: Scalars['Int']['output'];
  endTime: Scalars['Int']['output'];
  establishedOn?: Maybe<Scalars['DateTime']['output']>;
  financialYearEnd?: Maybe<Scalars['String']['output']>;
  financialYearStart?: Maybe<Scalars['String']['output']>;
  holiday?: Maybe<Array<OrgHoliday>>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  idActive: Scalars['Boolean']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  notWorkingDays?: Maybe<Array<Scalars['Int']['output']>>;
  officeHour?: Maybe<Scalars['Int']['output']>;
  orgContact?: Maybe<Scalars['String']['output']>;
  orgId: Scalars['ObjectId']['output'];
  orgName: Scalars['String']['output'];
  orgType?: Maybe<Scalars['Int']['output']>;
  startTime: Scalars['Int']['output'];
  totalLeaveCount?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrganizationDetailsRegisterInput = {
  address?: InputMaybe<Addressinput>;
  employeeCount: Scalars['Int']['input'];
  endTime: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  officeHour?: InputMaybe<Scalars['Int']['input']>;
  orgContact?: InputMaybe<Scalars['String']['input']>;
  orgName: Scalars['String']['input'];
  orgType?: InputMaybe<Scalars['Int']['input']>;
  startTime: Scalars['Int']['input'];
  totalLeaveCount?: InputMaybe<Scalars['Int']['input']>;
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
  email: Scalars['String']['output'];
  id: Scalars['ObjectId']['output'];
  isAdmin: Scalars['Boolean']['output'];
  lastSubscribe: Scalars['DateTime']['output'];
  location: Scalars['Int']['output'];
  mobile?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentStructure?: Maybe<Scalars['Int']['output']>;
  picturePath?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Role>>;
  token: Scalars['String']['output'];
};

export enum PayStructureStatus {
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY'
}

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['ObjectId']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Scalars['ObjectId']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

export type RoleInput = {
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ObjectId']['input']>;
  position: Scalars['Int']['input'];
};

export type RootQuery = {
  __typename?: 'RootQuery';
  getAllOrganization: Array<OrganizationDetails>;
  getAllRole?: Maybe<Array<Role>>;
  getEmployeeListByOrgId: Scalars['String']['output'];
  loginEmployee: LoginResponse;
  loginOrganization: OrganizationResponse;
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

export type UpdateOrganizationsInput = {
  address?: InputMaybe<Orgaddressinput>;
  mobile?: InputMaybe<Scalars['String']['input']>;
  paymentStructure?: InputMaybe<PayStructureStatus>;
  picturePath?: InputMaybe<Scalars['String']['input']>;
};

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

export type CreateOrganizationMutationVariables = Exact<{
  body: OrganizationRegister;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'OrganizationResponse', id: any, name: string, email: string, isAdmin: boolean, mobile?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, token: string, address?: { __typename?: 'Address', city?: string | null, street?: string | null, housenumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, position?: number | null, parent?: any | null }> | null } };

export type RootQueryQueryVariables = Exact<{
  body: OrganizationLogin;
}>;


export type RootQueryQuery = { __typename?: 'RootQuery', loginOrganization: { __typename?: 'OrganizationResponse', id: any, name: string, email: string, isAdmin: boolean, mobile?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, token: string, address?: { __typename?: 'Address', city?: string | null, street?: string | null, housenumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, position?: number | null, parent?: any | null }> | null } };

export type CreateOrganizationDetailsMutationVariables = Exact<{
  body: OrganizationDetailsRegisterInput;
}>;


export type CreateOrganizationDetailsMutation = { __typename?: 'Mutation', createOrganizationDetails: string };


export const CreateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationRegister"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"housenumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const RootQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RootQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"housenumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RootQueryQuery, RootQueryQueryVariables>;
export const CreateOrganizationDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganizationDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationDetailsRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganizationDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}]}]}}]} as unknown as DocumentNode<CreateOrganizationDetailsMutation, CreateOrganizationDetailsMutationVariables>;