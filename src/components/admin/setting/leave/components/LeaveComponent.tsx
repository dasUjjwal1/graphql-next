import EditIcon from "@/components/global/icons/EditIcon";
import { LeaveDetails, LeaveInput } from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { Dispatch, SetStateAction } from "react";

const LeaveComponent = (props: {
  leaveDetails: LeaveDetails;
  setData: Dispatch<SetStateAction<DataState<LeaveInput | LeaveDetails>>>;
}) => {
  return (
    <Card
      header={
        <div className="flex px-3 justify-between items-center">
          <h4 className="text-gray-600 m-0">{props.leaveDetails.name}</h4>
          <div className="flex items-center gap-1">
            <Button
              tooltip="Edit"
              tooltipOptions={{
                position: "bottom",
              }}
              icon={<EditIcon />}
              rounded
              link
              onClick={() =>
                props.setData((prev) => ({
                  ...prev,
                  state: true,
                  type: "UPDATE",
                  data: props.leaveDetails,
                }))
              }
              className="outline-none"
            />
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                >
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                </svg>
              }
              rounded
              text
              tooltip="Remove"
              tooltipOptions={{
                position: "bottom",
              }}
            />
            <Button
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm400-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-480Z" />
                </svg>
              }
              rounded
              // severity="danger"
              text
              tooltip="Turn on/off"
              tooltipOptions={{
                position: "bottom",
              }}
            />

            {/* <InputSwitch
             
              checked={true}
            /> */}
          </div>
        </div>
      }
      pt={{ content: { className: "p-0" } }}
    >
      <div className="p-3 flex flex-col gap-3 rounded-2xl bg-gray-50">
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
      <div className="bg-gray-50 col-span-3 mt-3 p-3 rounded-2xl">
        <h5 className="m-0 text-gray-700">Description</h5>
        <p className="my-2 text-gray-600 font-medium">
          {props.leaveDetails.leaveDescription}
        </p>
      </div>
    </Card>
  );
};

export default LeaveComponent;
