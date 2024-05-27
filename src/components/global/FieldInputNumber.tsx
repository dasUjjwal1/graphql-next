"use client";

import { InputNumber, InputNumberProps } from "primereact/inputnumber";
type FieldInputNumberProps = InputNumberProps & {
  icon?: string;
  label: string;
};
const FieldInputNumber = ({ label, ...props }: FieldInputNumberProps) => {
  return (
    <div className="w-full text-sm flex flex-col gap-2">
      <label className="text-gray-500">{label}</label>
      <InputNumber className="w-full" {...props} />
    </div>
  );
};

export default FieldInputNumber;
