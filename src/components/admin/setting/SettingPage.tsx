"use client";

import {
  CompanyCreateInput,
  CompanyUpdateInput,
  GetCompanyDetailsDocument,
  UpdateCompanyDocument,
} from "@/graphql/graphql";
import CompanyDetails from "../company/CompanyDetails";
import { useMutation, useQuery } from "@apollo/client";
import { useAdminAuthStore } from "../AuthContext";
import { toast } from "sonner";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import DialogHeader from "@/components/global/ui/DialogHeader";
import UpdateIcon from "@/components/global/icons/UpdateIcon";
import DialogText from "@/components/global/ui/DialogText";
import { AppConfig } from "@/config/appConfig";

const SettingPage = () => {
  const [show, setShow] = useState(false);
  const { token, companyId } = useAdminAuthStore((state) => state);
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
  const [updateMutation] = useMutation(UpdateCompanyDocument, {
    context,
    onCompleted: () => {
      refetch();
    },
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
    registeredAddress: data?.getCompanyDetails?.registeredAddress,
  };
  return (
    <>
      <Dialog
        header={<DialogHeader header="Company Details" />}
        visible={show}
        footer={<></>}
        onHide={() => setShow(false)}
      >
        <CompanyDetails
          data={formData}
          onSubmit={function (val: CompanyUpdateInput): void {
            updateMutation({ variables: { body: val } });
          }}
          loading={false}
        />
      </Dialog>
      <div className="px-6">
        <div className="bg-white p-6 rounded-2xl">
          <div className="flex justify-between">
            <h4 className="text-xl m-0 text-gray-700 font-semibold flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M80-120v-650l200-150 200 150v90h400v560H80Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 0h80v-80h-80v80Zm0 480h480v-400H320v400Zm240-240v-80h160v80H560Zm0 160v-80h160v80H560ZM400-440v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
              </svg>
              {formData.companyName}
            </h4>
            <Button label="Update" onClick={() => setShow(true)} rounded />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <p>
              <small className="font-semibold">Company Type</small>
              <br />
              {
                AppConfig.COMPANY_TYPE.find(
                  (elm) => elm.value === data?.getCompanyDetails?.companyType
                )?.label
              }
            </p>
            <p>
              <small className="font-semibold">Year Start</small>
              <br />
              {data?.getCompanyDetails?.financialYearStart}
            </p>
            <p>
              <small className="font-semibold">Year End</small>
              <br />
              {data?.getCompanyDetails?.financialYearEnd}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <p>
              <small className="font-semibold">Area</small>
              <br />
              {data?.getCompanyDetails?.registeredAddress?.area}
            </p>
            <p>
              <small className="font-semibold">City</small>
              <br />
              {data?.getCompanyDetails?.registeredAddress?.city}
            </p>
            <p>
              <small className="font-semibold">State</small>
              <br />
              {data?.getCompanyDetails?.registeredAddress?.state}
            </p>
            <p>
              <small className="font-semibold">Postal Code</small>
              <br />
              {data?.getCompanyDetails?.registeredAddress?.postal}
            </p>
          </div>
          <p className="text-xs mb-0 text-end">
            Last Updated at - {data?.getCompanyDetails?.updatedAt}
          </p>
        </div>
      </div>
    </>
  );
};

export default SettingPage;
