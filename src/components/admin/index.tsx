"use client";

import { ReactNode, useEffect, useState } from "react";
import AdminAuth from "../auth/organization";
import AdminNavbar from "./AdminNavbar";
import { useAdminAuthStore } from "./AuthContext";
import TopBar from "./TopBar";
import CompanyDetails from "./company/CompanyDetails";
import {
  CompanyCreateInput,
  CreateCompanyDocument,
  GetCompanyDetailsDocument,
} from "@/graphql/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { toast } from "sonner";
import { ProgressSpinner } from "primereact/progressspinner";

type Props = {
  children: ReactNode;
};
const AdminIndexPage = (props: Props) => {
  const token = useAdminAuthStore((state) => state.token);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const [loaded, setLoaded] = useState(false);
  const { data, loading, refetch } = useQuery(GetCompanyDetailsDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
  });
  useEffect(() => {
    let effect = true;
    if (effect) {
      setLoaded(true);
    }
    return () => {
      effect = false;
    };
  }, []);
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
  if (token) {
    return (
      <>
        <TopBar />
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
                <div className="flex-grow pt-16 ml-16">{props?.children}</div>
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
  }
  return loaded && <AdminAuth />;
};

export default AdminIndexPage;
