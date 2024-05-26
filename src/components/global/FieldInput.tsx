"use client";

import { FloatLabel } from "primereact/floatlabel";
import { InputText, InputTextProps } from "primereact/inputtext";
type FieldInputProps = InputTextProps & {
  icon?: string;
  label: string;
};
const FieldInput = ({ label, ...props }: FieldInputProps) => {
  return (
    <FloatLabel pt={{ root: { className: "w-full mt-3" } }}>
      <InputText className="w-full" {...props} />
      <label>{label}</label>
    </FloatLabel>
  );
};

export default FieldInput;
