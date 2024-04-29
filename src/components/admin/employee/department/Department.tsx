"use client";

import DepartmentList from "./components/DepartmentList";

const Department = () => {
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-2">
        <h2 className="text-2xl font-bold">Department</h2>
      </div>
      <div className="px-6">
        <DepartmentList />
      </div>
    </>
  );
};

export default Department;
