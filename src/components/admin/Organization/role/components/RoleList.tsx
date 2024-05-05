"use client";
import { AppConfig } from "@/config/appConfig";
import { GetAllRoleQuery, Role } from "@/graphql/graphql";
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
import { Dispatch, SetStateAction, useCallback } from "react";
import { DataState } from "../Role";
type Keys = keyof Role;

const columns: { name: string; uid: Keys }[] = [
  { name: "NAME", uid: "name" },
  { name: "ASSIGN TO", uid: "parent" },
  { name: "ACCESS", uid: "access" },
  { name: "ACTIONS", uid: "id" },
];
const RoleList = ({
  data,
  loading,
}: {
  data: GetAllRoleQuery | undefined;
  loading: boolean;
  setDate: Dispatch<SetStateAction<DataState>>;
}) => {
  const renderCell = useCallback((item: Role, columnKey: Keys) => {
    switch (columnKey) {
      case "access":
        return item?.access ? (
          <Dropdown>
            <DropdownTrigger>
              <Chip
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                  >
                    <path
                      d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                      fill="currentColor"
                    />
                  </svg>
                }
                variant="faded"
                color="success"
              >
                {
                  AppConfig.ACCESS.find((elm) => elm.value === item?.access[0])
                    ?.label
                }
              </Chip>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="new">New file</DropdownItem>
              <DropdownItem key="copy">Copy link</DropdownItem>
              <DropdownItem key="edit">Edit file</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete file
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : null;

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
        items={data?.getAllRole ?? []}
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
  );
};

export default RoleList;
