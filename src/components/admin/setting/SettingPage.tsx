"use client";

import { CompanyCreateInput } from "@/graphql/graphql";
import CompanyDetails from "../company/CompanyDetails";

const SettingPage = () => {
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h2 className="text-xl text-gray-600 font-bold">Company Setting</h2>
      </div>
      <div className="px-6">
        <div className="bg-white shadow p-6 rounded-xl">
          <CompanyDetails
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
