"use client";

import { GetAllOrganizationDocument, Organization } from "@/graphql/graphql";
import { useQuery } from "@apollo/client";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useCallback } from "react";
import { useAdminAuthStore } from "../../AuthContext";
type Keys = keyof Organization;
const OrganizationList = () => {
  const { token } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };
  const { data, loading } = useQuery(GetAllOrganizationDocument, { context });

  const columns: { name: string; uid: Keys }[] = [
    { name: "NAME", uid: "name" },
    { name: "ADDRESS", uid: "address" },
    { name: "STATUS", uid: "isActive" },
    { name: "ACTIONS", uid: "id" },
  ];

  const renderCell = useCallback((item: Organization, columnKey: Keys) => {
    switch (columnKey) {
      case "address":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {item.address?.buildingNumber}
            </p>
            <p className="text-bold text-sm capitalize text-default-400">
              {item.address?.city}
            </p>
          </div>
        );
      case "isActive":
        return (
          <Chip
            className="capitalize"
            color={item.isActive ? "success" : "danger"}
            size="sm"
            variant="flat"
          >
            {item.isActive}
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
              align={column.uid === "id" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data?.getAllOrganization ?? []}>
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
