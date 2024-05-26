"use client";

import { FloatLabel } from "primereact/floatlabel";
import { MultiSelect, MultiSelectProps } from "primereact/multiselect";

type FieldMultiSelectProps = MultiSelectProps & {
  label: string;
};
const FieldMultiSelect = ({ label, ...props }: FieldMultiSelectProps) => {
  return (
    <FloatLabel pt={{ root: { className: "w-full mt-3" } }}>
      <MultiSelect className="w-full" {...props} />
      <label>{label}</label>
    </FloatLabel>
  );
};

export default FieldMultiSelect;
