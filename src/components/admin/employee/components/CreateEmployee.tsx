"use client";

import { EmployeeCredentialFormTypes } from "@/types/appTypes";
import { useForm } from "react-hook-form";
import { useAdminAuthStore } from "../../AuthContext";
const CreateEmployeeCredential = ({
  orgList,
  Trigger,
  refetch,
}: EmployeeCredentialFormTypes) => {
  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  // const [mutation, { loading, error }] = useMutation<
  //   CreateEmployeeMutation,
  //   CreateEmployeeMutationVariables
  // >(CREATE_EMPLOYEE_CREDENTIAL, {
  //   onCompleted(data, clientOptions) {
  //     toast({
  //       title: "Success",
  //       description: data.createEmployee,
  //       variant: "default",
  //     });
  //     c;
  //   },
  //   onError(error, clientOptions) {
  //     toast({
  //       title: "Error",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  //   context,
  // });
  // const { data } = useQuery<GetAllRoleQuery>(GET_ALL_ROLE, {
  //   onError(error) {
  //     toast({
  //       title: "Error",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  //   context,
  // });
  const form = useForm({
    defaultValues: {},
  });
  const onSubmit = (value: any) => {
    const role = JSON.parse(value.employeeRole as string);
    const requestBody = {
      employeeEmail: value.employeeEmail,
      employeePassword: value.employeePassword,
      access: JSON.stringify(role?.access),
      employeeRole: role?.id,
      organizationId: value.organizationId,
    };
    // mutation({
    //   variables: {
    //     body: requestBody,
    //   },
    // });
  };

  return <></>;
};

export default CreateEmployeeCredential;
