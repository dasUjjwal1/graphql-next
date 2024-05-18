"use client";

import { Dropdown, DropdownProps } from "primereact/dropdown";

type FieldDropdownProps = DropdownProps & {
  label: string;
};
const FieldDropdown = ({ label, ...props }: FieldDropdownProps) => {
  return (
    <div className="w-full">
      <small className="mb-2 block">{label}</small>
      <Dropdown className="w-full" {...props} />
    </div>
  );
};

export default FieldDropdown;
