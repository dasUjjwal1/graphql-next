"use client";

import { FloatLabel } from "primereact/floatlabel";
import { InputNumber, InputNumberProps } from "primereact/inputnumber";
type FieldInputNumberProps = InputNumberProps & {
  icon?: string;
  label: string;
};
const FieldInputNumber = ({ label, ...props }: FieldInputNumberProps) => {
  return (
    <FloatLabel pt={{ root: { className: "w-full mt-3" } }}>
      <InputNumber className="w-full" {...props} />
      <label>{label}</label>
    </FloatLabel>
  );
};

export default FieldInputNumber;
