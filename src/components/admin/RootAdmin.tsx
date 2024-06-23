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
import { Button } from "primereact/button";
type Props = {
  children: ReactNode;
};
const RootAdmin = (props: Props) => {
  const { token, setCompanyId, setDetails, companyId } = useAdminAuthStore(
    (state) => state
  );
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading, refetch } = useQuery(GetCompanyDetailsDocument, {
    context,
    onCompleted(data) {
      setCompanyId(data?.getCompanyDetails?.id);
    },
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
        setCompanyId(data.createCompany.id);
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
          {data?.getCompanyDetails ? (
            <main className="flex min-h-full flex-grow">
              <AdminNavbar />
              <div className="flex-grow bg-[var(--ui-bg)]  ml-56">
                {props?.children}
              </div>
            </main>
          ) : (
            <div className="h-full">
              <div className="py-2 px-6 flex justify-end">
                <Button onClick={() => setDetails(null)} label="Log-out" />
              </div>
              <div className="bg-[var(--primary-color)] p-6">
                <h2 className="text-white">Company Details</h2>
                <p className="text-white m-0">Enter the details</p>
              </div>
              <div className="flex py-6 justify-center">
                <CompanyDetails
                  onSubmit={handleCompanyCreate}
                  loading={createLoading}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RootAdmin;
