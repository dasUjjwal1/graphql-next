"use client";

import { MultiSelect, MultiSelectProps } from "primereact/multiselect";

type FieldMultiSelectProps = MultiSelectProps & {
  label: string;
};
const FieldMultiSelect = ({ label, ...props }: FieldMultiSelectProps) => {
  return (
    <div className="w-full">
      <small className="mb-2 block">{label}</small>
      <MultiSelect className="w-full" {...props} />
    </div>
  );
};

export default FieldMultiSelect;
