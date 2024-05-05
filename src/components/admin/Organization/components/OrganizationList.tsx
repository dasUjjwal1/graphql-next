"use client";

import { GetAllOrganizationQuery, Organization } from "@/graphql/graphql";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { addMinutes } from "date-fns/addMinutes";
import { useCallback } from "react";
type Keys = keyof Organization;
const OrganizationList = ({
  data,
  loading,
}: {
  data: GetAllOrganizationQuery | undefined;
  loading: boolean;
}) => {
  const columns: { name: string; uid: Keys }[] = [
    { name: "NAME", uid: "name" },
    { name: "WORKING- TIME", uid: "startTime" },
    { name: "ADDRESS", uid: "address" },
    { name: "STATUS", uid: "isActive" },
    { name: "ACTIONS", uid: "id" },
  ];

  const renderCell = useCallback((item: Organization, columnKey: Keys) => {
    switch (columnKey) {
      case "address":
        const data = item.address;
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {data?.buildingNumber}
            </p>
            <p className="text-bold text-sm capitalize text-default-400">
              {data?.city}
              {", "}
              {data?.state}
            </p>
          </div>
        );
      case "startTime":
        return (
          <p>
            {addMinutes(
              new Date(2014, 6, 10, 0, 0),
              item.startTime
            ).toLocaleString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {addMinutes(
              new Date(2014, 6, 10, 0, 0),
              item.endTime
            ).toLocaleString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        );
      case "isActive":
        return (
          <Chip
            className="capitalize"
            color={item.isActive ? "success" : "danger"}
            size="sm"
            variant="flat"
          >
            {item.isActive ? "Active" : "Inactive"}
          </Chip>
        );
      case "id":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
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
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return item[columnKey];
    }
  }, []);
  return (
    <div>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "id" ? "end" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          loadingContent={
            <div className="w-full h-full py-6 px-3 bg-default-50">
              <Skeleton className="rounded-lg h-14 w-full" />
              <div className="w-full mt-3 flex gap-3">
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
              <div className="w-full mt-3 flex gap-3">
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
              <div className="w-full mt-3 flex gap-3">
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
            </div>
          }
          loadingState={loading ? "loading" : "idle"}
          items={data?.getAllOrganization ?? []}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey as Keys)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrganizationList;
