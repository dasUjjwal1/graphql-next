import FullOrganizationData from "@/components/admin/Organization/orgDetail/FullOrganizationData";
import React from "react";

const Page = ({ params }: { params: { id: number } }) => {
  return <FullOrganizationData orgIndex={params?.id} />;
};

export default Page;
