"use client";
import { Button, ButtonProps } from "primereact/button";
const ButtonUi = (props: ButtonProps) => {
  return (
    <Button
      className="bg-[var(--primary-color)] text-[var(--bg-highlight)] "
      {...props}
    />
  );
};

export default ButtonUi;
