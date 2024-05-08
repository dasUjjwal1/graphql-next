"use client";

import { useAdminAuthStore } from "@/components/admin/AuthContext";
import { Department, DepartmentCreateInput } from "@/graphql/graphql";
import {
  Button,
  Input,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";

const AddDepartment = ({
  type = "CREATE",
  ...props
}: {
  onSubmit: (val: DepartmentCreateInput) => void;
  loading: boolean;
  type: "CREATE" | "UPDATE";
  formData: Department | null;
}) => {
  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };

  const form = useForm<DepartmentCreateInput>({
    defaultValues: {},
  });

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create Department
            </ModalHeader>
            <form onSubmit={form.handleSubmit(props.onSubmit)}>
              <ModalBody className="lg:grid grid-cols-3">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, formState: { errors, touchedFields } }) => (
                    <Input
                      label="Department Name"
                      {...field}
                      {...(Boolean(errors.name) && {
                        isInvalid: true,
                        errorMessage: errors.name?.message,
                      })}
                      endContent={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-default-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      }
                    />
                  )}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" isLoading={props.loading} type="submit">
                  Create
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </>
  );
};

export default AddDepartment;
