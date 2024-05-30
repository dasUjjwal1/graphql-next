"use client";

import { useMutation, useQuery } from "@apollo/client";
import { useAdminAuthStore } from "./AuthContext";
import {
  CompanyCreateInput,
  CreateCompanyDocument,
  GetCompanyDetailsDocument,
} from "@/graphql/graphql";
import { toast } from "sonner";
import { ProgressSpinner } from "primereact/progressspinner";
import AdminNavbar from "./AdminNavbar";
import CompanyDetails from "./company/CompanyDetails";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const RootAdmin = (props: Props) => {
  const token = useAdminAuthStore((state) => state.token);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading, refetch } = useQuery(GetCompanyDetailsDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
  });
  const [mutation, { loading: createLoading }] = useMutation(
    CreateCompanyDocument,
    {
      context,
      onCompleted(data) {
        toast.success("Created");
        refetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );
  const handleCompanyCreate = (val: CompanyCreateInput) => {
    mutation({ variables: { body: val } });
  };
  return (
    <>
      {loading ? (
        <div className="card">
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="4"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
        </div>
      ) : (
        <>
          {data?.getCompanyDetails?.id ? (
            <main className="flex h-full flex-grow">
              <AdminNavbar />
              <div className="flex-grow pt-12 ml-60">{props?.children}</div>
            </main>
          ) : (
            <CompanyDetails
              onSubmit={handleCompanyCreate}
              loading={createLoading}
            />
          )}
        </>
      )}
    </>
  );
};

export default RootAdmin;
