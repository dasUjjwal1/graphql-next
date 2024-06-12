import { LeaveDetails } from "@/graphql/graphql";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { InputSwitch } from "primereact/inputswitch";

const LeaveComponent = (props: { leaveDetails: LeaveDetails }) => {
  return (
    <Card
      className="shadow-sm col-span-1"
      header={
        <div className="flex px-4 justify-between items-center">
          <h4 className="text-gray-600 m-0">{props.leaveDetails.name}</h4>
          <div className="flex items-center gap-1">
            <Button
              tooltip="Edit"
              tooltipOptions={{
                position: "bottom",
              }}
              icon={"pi pi-pencil"}
              rounded
              text
            />
            <Button
              icon={"pi pi-trash"}
              rounded
              text
              tooltip="Remove"
              tooltipOptions={{
                position: "bottom",
              }}
            />
            <InputSwitch
              tooltip="Turn on/off"
              tooltipOptions={{
                position: "bottom",
              }}
              checked={true}
            />
          </div>
        </div>
      }
    >
      <div className="p-4 flex flex-col gap-3 rounded-2xl bg-gray-50">
        <div className="flex justify-between">
          <h5 className="m-0 text-gray-700">Leave per Month </h5>

          {props.leaveDetails.monthlyDays && (
            <p className="text-xs m-0 text-gray-600 font-medium">
              {props.leaveDetails.monthlyDays} days
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <h5 className="m-0 text-gray-700">Carry Forward</h5>

          {props.leaveDetails.carryForward ? (
            <p className="text-xs m-0 text-gray-600 font-medium">
              <Checkbox checked /> YES, {props.leaveDetails.carryForwardMax}{" "}
              days
            </p>
          ) : (
            <p className="text-xs m-0 text-gray-600 font-medium">NO</p>
          )}
        </div>
        <div className="flex justify-between">
          <h5 className="m-0 text-gray-700">Earned Leave</h5>
          {props.leaveDetails.earnedLeave ? (
            <p className="text-xs m-0 text-gray-600 font-medium">
              <Checkbox checked /> YES, {props.leaveDetails.earnedLeaveMax} days
            </p>
          ) : (
            <p className="text-xs m-0 text-gray-600 font-medium">NO</p>
          )}
        </div>
      </div>
      <div className="bg-gray-50 col-span-3 mt-3 p-4 rounded-2xl">
        <h5 className="m-0 text-gray-700">Description</h5>
        <p className="my-2 text-gray-600 font-medium">
          {props.leaveDetails.leaveDescription}
        </p>
      </div>
    </Card>
  );
};

export default LeaveComponent;
