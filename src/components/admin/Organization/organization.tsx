"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import CreateOrganization from "./components/CreateOrganization";
import OrganizationList from "./components/OrganizationList";

const Organization = () => {
  const modalState = useDisclosure();
  return (
    <>
      <div className="flex px-6 items-baseline justify-between pb-4">
        <h2 className="text-2xl font-bold">Organization</h2>
        <Button
          onPress={modalState.onOpen}
          color="primary"
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        >
          Create
        </Button>
      </div>
      <div className="px-6">
        <CreateOrganization modalState={modalState} />
        <OrganizationList />
      </div>
    </>
  );
};

export default Organization;
