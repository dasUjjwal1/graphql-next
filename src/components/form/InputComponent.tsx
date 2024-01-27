"use client";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import { HTMLInputTypeAttribute } from "react";
import { StringDecoder } from "string_decoder";

const InputTextComponent = ({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <TextField
      fullWidth
      type={type ? type : "text"}
      {...field}
      placeholder={placeholder ? placeholder : ""}
      error={Boolean(meta.error) && meta.touched}
      helperText={Boolean(meta.error) && meta.touched && meta.error}
      label={label ? label : ""}
      variant="outlined"
    />
  );
};

export default InputTextComponent;
