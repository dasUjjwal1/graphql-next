"use client";
import { useEffect, useState } from "react";

const AttendanceCounter = ({ countMinutes }: { countMinutes?: number }) => {
  const [minutes, setMinutes] = useState(countMinutes ?? 0);
  useEffect(() => {
    const timeOut = setTimeout(() => setMinutes((prev) => prev + 1), 60000);
    return () => clearTimeout(timeOut);
  }, [minutes]);
  return Math.round(minutes / 60) + "H " + (minutes % 60) + "M";
};

export default AttendanceCounter;
