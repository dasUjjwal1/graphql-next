"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignIn from "./SignIn";
function ApplicationAuth() {
  return (
    <div className="h-full w-full flex items-center justify-center container">
      <Card className="w-full lg:w-1/3 grid items-center">
        <CardHeader>
          <CardTitle className="text-3xl">
            Welcome<span className={"text-blue-600"}>.</span>
          </CardTitle>
          <CardDescription>Enter email & password</CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn />
        </CardContent>
      </Card>
    </div>
  );
}

export default ApplicationAuth;
