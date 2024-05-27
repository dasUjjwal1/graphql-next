"use client";

import { MultiSelect, MultiSelectProps } from "primereact/multiselect";

type FieldMultiSelectProps = MultiSelectProps & {
  label: string;
};
const FieldMultiSelect = ({ label, ...props }: FieldMultiSelectProps) => {
  return (
    <div className="w-full text-sm flex flex-col gap-2">
      <label className="text-gray-500">{label}</label>
      <MultiSelect className="w-full" {...props} />
    </div>
  );
};

export default FieldMultiSelect;
