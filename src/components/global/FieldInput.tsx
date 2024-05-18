"use client";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText, InputTextProps } from "primereact/inputtext";
type FieldInputProps = InputTextProps & {
  icon: string;
  label: string;
};
const FieldInput = ({ icon, label, ...props }: FieldInputProps) => {
  return (
    <div className="w-full">
      <small className="mb-2 block">{label}</small>
      <IconField iconPosition="left">
        <InputIcon className={icon}> </InputIcon>
        <InputText className="w-full" {...props} />
      </IconField>
    </div>
  );
};

export default FieldInput;
