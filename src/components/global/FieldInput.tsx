"use client";

import { InputText, InputTextProps } from "primereact/inputtext";
type FieldInputProps = InputTextProps & {
  icon?: string;
  label: string;
};
const FieldInput = ({ label, ...props }: FieldInputProps) => {
  return (
    <div className="w-full text-sm flex flex-col gap-2">
      <label className="text-gray-500">{label}</label>
      <InputText className="w-full" {...props} />
    </div>
  );
};

export default FieldInput;
