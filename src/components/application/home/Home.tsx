"use client";

import AttendanceCard from "./components/AttendanceCard";

const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-3 grid-flow-row p-3 w-full">
      <div className="grid gap-3 grid-cols-2 grid-flow-row auto-rows-max">
        <AttendanceCard />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
