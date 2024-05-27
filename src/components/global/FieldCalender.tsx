"use client";

import { Calendar, CalendarBaseProps } from "primereact/calendar";

type FieldCalenderProps = CalendarBaseProps & {
  label: string;
};
const FieldCalender = ({ label, ...props }: FieldCalenderProps) => {
  return (
    <div className="w-full text-sm flex flex-col gap-2">
      <label className="text-gray-500">{label}</label>
      <Calendar className="w-full" {...props} />
    </div>
  );
};

export default FieldCalender;
