"use client";

import { FloatLabel } from "primereact/floatlabel";
import { MultiSelect, MultiSelectProps } from "primereact/multiselect";

type FieldMultiSelectProps = MultiSelectProps & {
  label: string;
};
const FieldMultiSelect = ({ label, ...props }: FieldMultiSelectProps) => {
  return (
    <FloatLabel>
      <MultiSelect className="w-full" {...props} />
      <label className="text-xs">{label}</label>
    </FloatLabel>
  );
};

export default FieldMultiSelect;
