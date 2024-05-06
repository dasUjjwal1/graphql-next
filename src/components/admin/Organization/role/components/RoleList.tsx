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
  onOpen,
  setDataState,
  deleteRole,
}: {
  data: GetAllRoleQuery | undefined;
  loading: boolean;
  setDataState: Dispatch<SetStateAction<DataState>>;
  onOpen: () => void;
  deleteRole: (id: string) => void;
}) => {
  const handleEdit = (data: Role) => {
    onOpen();
    const access = AppConfig.ACCESS.filter((elm) =>
      data.access?.includes(elm.value)
    )
      .map((i) => i.name)
      .join(",");
    const requestBody = { ...data, access };
    setDataState((prev) => ({ ...prev, type: "UPDATE", data: requestBody }));
  };
  const renderCell = useCallback(
    (item: Role, columnKey: Keys) => {
      switch (columnKey) {
        case "parent":
          const parentElement = data?.getAllRole?.find(
            (elm) => elm.id === item.parent
          );
          return parentElement ? parentElement.name : "Administration";
        case "access":
          return (
            item?.access &&
            !item?.access.includes(0) && (
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
                      AppConfig.ACCESS.find(
                        (elm) => elm.value === item?.access[0]
                      )?.label
                    }
                  </Chip>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                  >
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )
          );

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
                    onPress={() => handleEdit(item)}
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
                    onPress={() => deleteRole(item.id)}
                    startContent={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-danger bg-red-950 p-1 rounded-full"
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
    },
    [loading]
  );

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
  );
};

export default RoleList;
