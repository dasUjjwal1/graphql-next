"use client";

import { Calendar, CalendarBaseProps } from "primereact/calendar";
import { FloatLabel } from "primereact/floatlabel";

type FieldCalenderProps = CalendarBaseProps & {
  label: string;
};
const FieldCalender = ({ label, ...props }: FieldCalenderProps) => {
  return (
    <FloatLabel>
      <Calendar className="w-full h-full" {...props} />
      <label>{label}</label>
    </FloatLabel>
  );
};

export default FieldCalender;
