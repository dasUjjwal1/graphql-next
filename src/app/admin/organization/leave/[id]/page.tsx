import LeaveList from "@/components/admin/Organization/leave/LeaveList";
import React from "react";

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <>
      <LeaveList id={params.id} />
    </>
  );
};

export default Page;
