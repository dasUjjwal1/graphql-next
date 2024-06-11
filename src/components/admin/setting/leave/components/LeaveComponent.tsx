import { LeaveDetails } from "@/graphql/graphql";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { InputSwitch } from "primereact/inputswitch";

const LeaveComponent = (props: { leaveDetails: LeaveDetails }) => {
  return (
    <Card
      className="shadow-sm rounded-2xl"
      header={
        <div className="flex px-4 justify-between items-center">
          <h3 className="text-gray-600">{props.leaveDetails.name}</h3>
          <div className="flex items-center gap-3">
            <Button icon={"pi pi-pencil"} rounded text />
            <InputSwitch checked={true} />
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[var(--highlight-bg)] col-span-1 p-5 rounded-2xl">
          <h4 className="m-0 text-[var(--highlight-text-color)]">
            Leave per Month{" "}
          </h4>
          <p className="my-2 text-gray-600 font-medium">
            {props.leaveDetails.monthlyDays} days
          </p>
        </div>
        <div className="bg-[var(--highlight-bg)] col-span-1 p-5 rounded-2xl">
          <h4 className="m-0 text-[var(--highlight-text-color)]">
            Carry Forward
          </h4>

          {props.leaveDetails.carryForward ? (
            <p className="my-2 text-gray-600 font-medium">
              <Checkbox checked /> YES, {props.leaveDetails.carryForwardMax}{" "}
              days
            </p>
          ) : (
            "NO"
          )}
        </div>
        <div className="bg-[var(--highlight-bg)] col-span-1 p-5 rounded-2xl">
          <h4 className="m-0 text-[var(--highlight-text-color)]">
            Earned Leave
          </h4>
          {props.leaveDetails.earnedLeave ? (
            <p className="my-2 text-gray-600 font-medium">
              <Checkbox checked /> YES, {props.leaveDetails.earnedLeaveMax} days
            </p>
          ) : (
            "NO"
          )}
        </div>
        <div className="bg-blue-50 col-span-3 p-5 rounded-2xl">
          <h4 className="m-0 text-blue-600">Description</h4>
          <p className="my-2 text-gray-600 font-medium">
            {props.leaveDetails.leaveDescription}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default LeaveComponent;
