"use client";

import { Department, GetAllDepartmentByOrgIdQuery } from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  Skeleton,
  TableRow,
  TableCell,
  Dropdown,
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Dispatch, SetStateAction, useCallback } from "react";

type Props = {
  data: GetAllDepartmentByOrgIdQuery | undefined;
  loading: boolean;
  setDataState: Dispatch<SetStateAction<DataState<Department>>>;
  onOpen: () => void;
  deleteRole: (id: string) => void;
};
type Keys = keyof Department;

const DepartmentList = ({
  data,
  loading,
  onOpen,
  setDataState,
  deleteRole,
}: Props) => {
  const columns: { name: string; uid: Keys }[] = [
    { name: "NAME", uid: "name" },
    { name: "ACTIONS", uid: "id" },
  ];
  const renderCell = useCallback((item: Department, columnKey: Keys) => {
    switch (columnKey) {
      case "id":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown
              classNames={{
                content: "p-0 border-small border-divider",
              }}
            >
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
              <DropdownMenu aria-label="Actions">
                <DropdownItem
                  // onPress={() => handleEdit(item)}
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-success bg-success-100 p-1 rounded-full"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                    </svg>
                  }
                >
                  Edit
                </DropdownItem>
                <DropdownItem
                  // onPress={() => deleteRole(item.id)}
                  startContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-danger bg-danger-100 p-1 rounded-full"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return item[columnKey];
    }
  }, []);
  return (
    <>
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
              </div>
              <div className="w-full mt-3 flex gap-3">
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
              <div className="w-full mt-3 flex gap-3">
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
            </div>
          }
          loadingState={loading ? "loading" : "idle"}
          items={data?.getAllDepartmentByOrgId ?? []}
        >
          {(item) =>
            !item?.isDelete && (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey as Keys)}</TableCell>
                )}
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </>
  );
};

export default DepartmentList;
