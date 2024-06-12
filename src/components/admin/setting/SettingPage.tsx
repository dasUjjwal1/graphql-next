"use client";

import {
  CompanyCreateInput,
  CompanyUpdateInput,
  GetCompanyDetailsDocument,
} from "@/graphql/graphql";
import CompanyDetails from "../company/CompanyDetails";
import { useQuery } from "@apollo/client";
import { useAdminAuthStore } from "../AuthContext";
import { toast } from "sonner";

const SettingPage = () => {
  const { token, companyId } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading } = useQuery(GetCompanyDetailsDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
  });
  const formData: CompanyUpdateInput = {
    id: data?.getCompanyDetails?.id ?? null,
    companyName: data?.getCompanyDetails?.companyName ?? "",
    companyType: data?.getCompanyDetails?.companyType,
    financialYearStart: data?.getCompanyDetails?.financialYearStart,
    financialYearEnd: data?.getCompanyDetails?.financialYearEnd,
    logo: data?.getCompanyDetails?.logo,
  };
  return (
    <>
      <div className="px-6">
        <div className="bg-white shadow px-6 pb-6 pt-1 rounded-xl">
          <h4 className="text-lg text-gray-600 font-bold">Company</h4>
          <CompanyDetails
            data={formData}
            onSubmit={function (val: CompanyCreateInput): void {
              throw new Error("Function not implemented.");
            }}
            loading={false}
          />
        </div>
      </div>
    </>
  );
};

export default SettingPage;
