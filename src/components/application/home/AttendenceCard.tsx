"use client";
import { ClockIcon, ReloadIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@apollo/client";
import {
  CLOCK_IN,
  GET_ATTENDANCE_BY_DATE,
  UPDATE_ATTENDANCE,
} from "@/gql/employee";

import { startOfWeek, isToday, differenceInMinutes } from "date-fns";
import {
  CreateAttendanceMutation,
  CreateAttendanceMutationVariables,
  GetAttendanceByDateQuery,
  GetAttendanceByDateQueryVariables,
  UpdateAttendanceMutation,
  UpdateAttendanceMutationVariables,
} from "@/graphql/graphql";
import { useContext, useReducer } from "react";
import { UserAuthContext } from "../AuthContext";
import { toast } from "@/components/ui/use-toast";
import { produce } from "immer";
import AttendanceCounter from "./components/AtendanceCounter";
type ClockState = {
  disable: boolean;
  clockIn: boolean;
  clockOut: boolean;
  label: "Clock-In" | "Clock-Out";
  totalMinutes: number;
  totalMinutesToday: number;
};
enum ClockAction {
  DISABLE,
  CLOCK,
  LABEL,
  TOTAL,
  TODAY_TODAY,
}
type Action = {
  type: ClockAction;
  payload?: any;
};
const AttendanceCard = () => {
  const initialClockState: ClockState = {
    disable: false,
    clockIn: true,
    clockOut: false,
    label: "Clock-In",
    totalMinutes: 0,
    totalMinutesToday: 0,
  };
  const clockReducer = produce((state: ClockState, action: Action) => {
    switch (action.type) {
      case ClockAction.DISABLE:
        state.disable = action.payload;
        break;
      case ClockAction.CLOCK:
        state.clockIn = action.payload.clockIn;
        state.clockOut = action.payload.clockOut;
        break;
      case ClockAction.LABEL:
        state.label = action.payload;
        break;
      case ClockAction.TOTAL:
        state.totalMinutes = action.payload;
        break;
      case ClockAction.TODAY_TODAY:
        state.totalMinutesToday = action.payload;
        break;
      default:
        return state;
    }
  });
  const state = useContext(UserAuthContext);
  const [clock, setClock] = useReducer(clockReducer, initialClockState);
  const context = {
    headers: {
      authorization: state.token,
    },
  };
  const monday = startOfWeek(new Date(), { weekStartsOn: 1 });
  const { data, refetch } = useQuery<
    GetAttendanceByDateQuery,
    GetAttendanceByDateQueryVariables
  >(GET_ATTENDANCE_BY_DATE, {
    variables: { body: { startDate: monday } },
    onCompleted(data) {
      if (data?.getAttendanceByDate) {
        if (data?.getAttendanceByDate?.length > 0) {
          const attendance = data?.getAttendanceByDate[0];
          if (isToday(new Date(attendance?.createdAt))) {
            if (attendance?.clockOut) {
              setClock({ type: ClockAction.DISABLE, payload: true });
              setClock({ type: ClockAction.LABEL, payload: "Clock-Out" });
              setClock({
                type: ClockAction.CLOCK,
                payload: { clockIn: false, clockOut: false },
              });
            } else {
              setClock({ type: ClockAction.LABEL, payload: "Clock-Out" });
              setClock({
                type: ClockAction.CLOCK,
                payload: { clockIn: false, clockOut: true },
              });
              const todayMinDiff = differenceInMinutes(
                new Date(),
                new Date(attendance.clockIn)
              );
              setClock({
                type: ClockAction.TODAY_TODAY,
                payload: todayMinDiff,
              });
            }
          } else {
            setClock({ type: ClockAction.DISABLE, payload: false });
            setClock({ type: ClockAction.LABEL, payload: "Clock-In" });
          }
          produce(data?.getAttendanceByDate, (state) => {
            const total = state.reduce((acc, c) => {
              const difference = c?.clockOut
                ? differenceInMinutes(new Date(c.clockOut), new Date(c.clockIn))
                : 0;
              return acc + difference;
            }, 0);
            setClock({ type: ClockAction.TOTAL, payload: total });
          });
        }
      }
    },
    context,
  });
  const [mutation, { loading }] = useMutation<
    CreateAttendanceMutation,
    CreateAttendanceMutationVariables
  >(CLOCK_IN, {
    onCompleted(data, clientOptions) {
      refetch();
    },
    onError(error, clientOptions) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
    context,
  });
  const [updateAttendanceMutation] = useMutation<
    UpdateAttendanceMutation,
    UpdateAttendanceMutationVariables
  >(UPDATE_ATTENDANCE, {
    onCompleted(data) {
      setClock({ type: ClockAction.LABEL, payload: "Clock-Out" });
      setClock({
        type: ClockAction.CLOCK,
        payload: { clockIn: false, clockOut: false },
      });
      setClock({ type: ClockAction.DISABLE, payload: true });
    },
    onError(error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
    context,
  });
  return (
    <div className="grid grid-cols-2 gap-3 grid-flow-row p-3 w-full">
      <div className="grid gap-3 grid-cols-2 grid-flow-row auto-rows-max">
        <Card>
          <CardHeader className="flex  flex-row items-center justify-between">
            <div>
              <CardDescription className="mb-1">Hours Weekly</CardDescription>
              <CardTitle className="text-2xl">
                {clock.totalMinutes
                  ? Math.round(clock.totalMinutes / 60)
                  : "00"}
                H {clock.totalMinutes ? clock.totalMinutes % 60 : "00"}M
              </CardTitle>
            </div>
            <div>
              <CardDescription className="mb-1">
                On-Time Arrival
              </CardDescription>
              <CardTitle className="text-2xl">60%</CardTitle>
            </div>
          </CardHeader>

          <CardFooter className="flex items-center justify-between">
            <CardTitle>
              {clock.clockIn ? (
                "0H 0M"
              ) : (
                <>
                  {clock.clockOut ? (
                    <AttendanceCounter countMinutes={clock.totalMinutesToday} />
                  ) : (
                    (clock.totalMinutesToday
                      ? Math.round(clock.totalMinutesToday / 60)
                      : "00") +
                    "H :" +
                    (clock.totalMinutes ? clock.totalMinutes % 60 : "00") +
                    "M"
                  )}
                </>
              )}
            </CardTitle>
            <Button
              onClick={() => {
                if (clock.clockIn) {
                  mutation();
                } else {
                  const attendanceList = data?.getAttendanceByDate[0];
                  if (attendanceList) {
                    if (isToday(new Date(attendanceList?.createdAt))) {
                      clock.clockOut &&
                        updateAttendanceMutation({
                          variables: { attendanceId: attendanceList?.id },
                        });
                    } else {
                      toast({
                        variant: "destructive",
                        title: "Error",
                        description: "Invalid",
                      });
                    }
                  } else {
                    toast({
                      variant: "destructive",
                      title: "Error",
                      description: "No data found",
                    });
                  }
                }
              }}
              className="gap-2"
              disabled={clock.disable}
              variant={clock.clockOut ? "destructive" : "default"}
            >
              {loading ? (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ClockIcon />
              )}
              {clock.label}
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default AttendanceCard;
