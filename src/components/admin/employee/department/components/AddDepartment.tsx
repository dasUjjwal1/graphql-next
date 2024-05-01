"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";

const AddDepartment = ({
  organizationId,
  refetch,
}: {
  organizationId: string;
  refetch?: () => void;
}) => {
  const { token } = useAdminAuthStore((state) => state);
  // const context = {
  //   headers: {
  //     authorization: token,
  //   },
  // };
  // const [mutation] = useMutation(AddDepartmentDocument, {
  //   onCompleted: (data) => {
  //     toast({
  //       title: "Success",
  //       description: data.addDepartment.message,
  //       variant: "default",
  //     });
  //     refetch && refetch();
  //   },
  //   onError(error) {
  //     toast({
  //       title: "Error",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  //   context,
  // });
  // const form = useForm<DepartmentCreateInput>({
  //   defaultValues: {},
  // });
  // const onSubmit = (value: DepartmentCreateInput) => {
  //   const requestBody: DepartmentCreateInput = {
  //     name: value.name,
  //     organizationId,
  //   };
  //   mutation({ variables: { body: requestBody } });
  // };
  return <></>;
};

export default AddDepartment;
