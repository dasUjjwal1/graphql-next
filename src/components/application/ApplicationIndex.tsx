"use client";

import { ReactNode, useContext } from "react";
import { UserAuthContext } from "./AuthContext";
import TopBar from "../navbar/TopBar";
import ApplicationNavbar from "./ApplicationNavBar";
import ApplicationAuth from "../auth/user";
type Props = {
  children: ReactNode;
};
const ApplicationIndex = (props: Props) => {
  const state = useContext(UserAuthContext);
  if (state?.token) {
    return (
      <>
        <TopBar />
        <div className="flex h-full flex-grow">
          <ApplicationNavbar />
          <div className="flex-grow ml-12 p-2 pt-16">{props?.children}</div>
        </div>
      </>
    );
  }
  return <ApplicationAuth />;
};

export default ApplicationIndex;
