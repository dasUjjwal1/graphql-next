"use client";

import { Dropdown, DropdownProps } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";

type FieldDropdownProps = DropdownProps & {
  label: string;
};
const FieldDropdown = ({ label, ...props }: FieldDropdownProps) => {
  return (
    <FloatLabel>
      <Dropdown
        pt={{ root: { className: "w-full" } }}
        className="w-full"
        {...props}
      />
      <label>{label}</label>
    </FloatLabel>
  );
};

export default FieldDropdown;
