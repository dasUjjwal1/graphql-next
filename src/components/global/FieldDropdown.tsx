"use client";

import { Dropdown, DropdownProps } from "primereact/dropdown";

type FieldDropdownProps = DropdownProps & {
  label: string;
};
const FieldDropdown = ({ label, ...props }: FieldDropdownProps) => {
  return (
    <div className="w-full text-sm flex flex-col gap-2">
      <label className="text-gray-500">{label}</label>
      <Dropdown className="w-full" {...props} />
    </div>
  );
};

export default FieldDropdown;
