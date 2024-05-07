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
  logo?: Maybe<Scalars['String']['output']>;
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
  id: Scalars['ObjectId']['output'];
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

export type DocumentAdmin = {
  __typename?: 'DocumentAdmin';
  addressProof?: Maybe<Scalars['String']['output']>;
  identityProof?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDepartment: SuccessMessage;
  createCompany: Company;
  createOrganization: SuccessMessage;
  createRole: SuccessMessage;
  createUser: UserResponse;
  deleteRoleById: SuccessMessage;
  updateCompany?: Maybe<Company>;
  updateDepartment: SuccessMessage;
  updateOrganization: SuccessMessage;
  updateOrganizationDetailsAttendancePolicy: SuccessMessage;
  updateOrganizationDetailsLeavePolicy: SuccessMessage;
  updateRoleById: SuccessMessage;
  updateUser: SuccessMessage;
};


export type MutationAddDepartmentArgs = {
  body: DepartmentCreateInput;
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


export type MutationUpdateOrganizationArgs = {
  body: OrganizationRegisterInput;
};


export type MutationUpdateOrganizationDetailsAttendancePolicyArgs = {
  body: OrganizationAttendancePolicyInput;
};


export type MutationUpdateOrganizationDetailsLeavePolicyArgs = {
  body: OrganizationLeavePolicyInput;
};


export type MutationUpdateRoleByIdArgs = {
  body: RoleInput;
};


export type MutationUpdateUserArgs = {
  body: UpdateUsersInput;
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
  createdAt: Scalars['DateTime']['output'];
  department?: Maybe<Array<Department>>;
  documents?: Maybe<Array<Scalars['String']['output']>>;
  employeeCount: Scalars['Int']['output'];
  endTime: Scalars['Int']['output'];
  gracePeriod?: Maybe<Scalars['Int']['output']>;
  holiday?: Maybe<Array<OrgHoliday>>;
  id?: Maybe<Scalars['ObjectId']['output']>;
  isActive: Scalars['Boolean']['output'];
  lastSubscribe: Scalars['DateTime']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  locationRequired?: Maybe<Scalars['Boolean']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  notWorkingDays?: Maybe<Array<Scalars['Int']['output']>>;
  orgContact?: Maybe<Scalars['String']['output']>;
  paidLeavePm?: Maybe<Scalars['Int']['output']>;
  remoteClockIn?: Maybe<Scalars['Boolean']['output']>;
  sickLeavePm?: Maybe<Scalars['Int']['output']>;
  startTime: Scalars['Int']['output'];
  totalLeaveCount?: Maybe<Scalars['Int']['output']>;
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

export type OrganizationLeavePolicyInput = {
  applyToAll?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  paidLeavePm?: InputMaybe<Scalars['Int']['input']>;
  sickLeavePm?: InputMaybe<Scalars['Int']['input']>;
  totalLeaveCount?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationRegisterInput = {
  address?: InputMaybe<Address_Input>;
  employeeCount: Scalars['Int']['input'];
  endTime: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  name: Scalars['String']['input'];
  orgContact?: InputMaybe<Scalars['String']['input']>;
  startTime: Scalars['Int']['input'];
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
  getAllOrganization: Array<Organization>;
  getAllRole?: Maybe<Array<Role>>;
  getCompanyDetails?: Maybe<Company>;
  loginUser: UserResponse;
};


export type QueryGetAllDepartmentByOrgIdArgs = {
  id: Scalars['ObjectId']['input'];
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
  id?: InputMaybe<Scalars['ObjectId']['input']>;
  isDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Scalars['ObjectId']['input']>;
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
  roles?: Maybe<Array<Role>>;
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


export type GetAllDepartmentByOrgIdQuery = { __typename?: 'Query', getAllDepartmentByOrgId?: Array<{ __typename?: 'Department', id: any, name: string }> | null };

export type CreateUserMutationVariables = Exact<{
  body: UserRegister;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', name: string, email: string, isActive?: boolean | null, isAdmin: boolean, mobileNo?: string | null, isDelete?: boolean | null, gmtMinuteOffset?: number | null, timeZone?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, createdAt: any, updatedAt: any, token: string, address?: { __typename?: 'UserAddress', city?: string | null, street?: string | null, houseNumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, parent?: any | null, access?: Array<number> | null }> | null, verification?: { __typename?: 'DocumentAdmin', identityProof?: string | null, addressProof?: string | null } | null } };

export type LoginUserQueryVariables = Exact<{
  body: UserLogin;
}>;


export type LoginUserQuery = { __typename?: 'Query', loginUser: { __typename?: 'UserResponse', name: string, email: string, isActive?: boolean | null, isAdmin: boolean, mobileNo?: string | null, isDelete?: boolean | null, gmtMinuteOffset?: number | null, timeZone?: string | null, picturePath?: string | null, paymentStructure?: number | null, location: number, lastSubscribe: any, createdAt: any, updatedAt: any, token: string, address?: { __typename?: 'UserAddress', city?: string | null, street?: string | null, houseNumber?: string | null, state?: string | null, pin?: string | null } | null, roles?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, parent?: any | null, access?: Array<number> | null }> | null, verification?: { __typename?: 'DocumentAdmin', identityProof?: string | null, addressProof?: string | null } | null } };

export type GetAllOrganizationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrganizationQuery = { __typename?: 'Query', getAllOrganization: Array<{ __typename?: 'Organization', id?: any | null, name: string, userId: any, isActive: boolean, lastSubscribe: any, latitude?: number | null, longitude?: number | null, workingModel?: number | null, employeeCount: number, totalLeaveCount?: number | null, documents?: Array<string> | null, startTime: number, endTime: number, notWorkingDays?: Array<number> | null, orgContact?: string | null, paidLeavePm?: number | null, sickLeavePm?: number | null, remoteClockIn?: boolean | null, locationRequired?: boolean | null, gracePeriod?: number | null, createdAt: any, updatedAt: any, address?: { __typename?: 'Address', city?: string | null, street?: string | null, buildingNumber?: string | null, state?: string | null, pin?: string | null } | null, holiday?: Array<{ __typename?: 'OrgHoliday', id?: any | null, name?: string | null, date?: any | null }> | null, department?: Array<{ __typename?: 'Department', id: any, name: string }> | null }> };

export type CreateOrganizationMutationVariables = Exact<{
  body: OrganizationRegisterInput;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganization: { __typename?: 'SuccessMessage', message: string } };

export type CreateRoleMutationVariables = Exact<{
  body: RoleInput;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createRole: { __typename?: 'SuccessMessage', message: string } };

export type GetAllRoleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRoleQuery = { __typename?: 'Query', getAllRole?: Array<{ __typename?: 'Role', id?: any | null, name?: string | null, isDelete?: boolean | null, parent?: any | null, access?: Array<number> | null }> | null };

export type UpdateRoleByIdMutationVariables = Exact<{
  body: RoleInput;
}>;


export type UpdateRoleByIdMutation = { __typename?: 'Mutation', updateRoleById: { __typename?: 'SuccessMessage', message: string } };

export type DeleteRoleByIdMutationVariables = Exact<{
  body?: InputMaybe<Scalars['ObjectId']['input']>;
}>;


export type DeleteRoleByIdMutation = { __typename?: 'Mutation', deleteRoleById: { __typename?: 'SuccessMessage', message: string } };

export type UpdateOrganizationMutationVariables = Exact<{
  body: OrganizationRegisterInput;
}>;


export type UpdateOrganizationMutation = { __typename?: 'Mutation', updateOrganization: { __typename?: 'SuccessMessage', message: string } };


export const AddDepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddDepartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDepartment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddDepartmentMutation, AddDepartmentMutationVariables>;
export const GetAllDepartmentByOrgIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllDepartmentByOrgId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getAllDepartmentByOrgIdId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllDepartmentByOrgId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getAllDepartmentByOrgIdId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllDepartmentByOrgIdQuery, GetAllDepartmentByOrgIdQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRegister"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNo"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"gmtMinuteOffset"}},{"kind":"Field","name":{"kind":"Name","value":"timeZone"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identityProof"}},{"kind":"Field","name":{"kind":"Name","value":"addressProof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserLogin"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNo"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"gmtMinuteOffset"}},{"kind":"Field","name":{"kind":"Name","value":"timeZone"}},{"kind":"Field","name":{"kind":"Name","value":"picturePath"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStructure"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"houseNumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}},{"kind":"Field","name":{"kind":"Name","value":"verification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identityProof"}},{"kind":"Field","name":{"kind":"Name","value":"addressProof"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginUserQuery, LoginUserQueryVariables>;
export const GetAllOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllOrganization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isActive"}},{"kind":"Field","name":{"kind":"Name","value":"lastSubscribe"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"workingModel"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"street"}},{"kind":"Field","name":{"kind":"Name","value":"buildingNumber"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"pin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"employeeCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalLeaveCount"}},{"kind":"Field","name":{"kind":"Name","value":"holiday"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}},{"kind":"Field","name":{"kind":"Name","value":"documents"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"notWorkingDays"}},{"kind":"Field","name":{"kind":"Name","value":"orgContact"}},{"kind":"Field","name":{"kind":"Name","value":"paidLeavePm"}},{"kind":"Field","name":{"kind":"Name","value":"sickLeavePm"}},{"kind":"Field","name":{"kind":"Name","value":"remoteClockIn"}},{"kind":"Field","name":{"kind":"Name","value":"locationRequired"}},{"kind":"Field","name":{"kind":"Name","value":"gracePeriod"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetAllOrganizationQuery, GetAllOrganizationQueryVariables>;
export const CreateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const CreateRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<CreateRoleMutation, CreateRoleMutationVariables>;
export const GetAllRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllRole"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isDelete"}},{"kind":"Field","name":{"kind":"Name","value":"parent"}},{"kind":"Field","name":{"kind":"Name","value":"access"}}]}}]}}]} as unknown as DocumentNode<GetAllRoleQuery, GetAllRoleQueryVariables>;
export const UpdateRoleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateRoleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RoleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRoleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateRoleByIdMutation, UpdateRoleByIdMutationVariables>;
export const DeleteRoleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRoleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ObjectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRoleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteRoleByIdMutation, DeleteRoleByIdMutationVariables>;
export const UpdateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationRegisterInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateOrganizationMutation, UpdateOrganizationMutationVariables>;