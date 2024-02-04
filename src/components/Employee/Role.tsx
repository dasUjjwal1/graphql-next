"use client";
import { useState } from "react";
import OrgService from "@/service/orgService";
import { useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import {
  DotsVerticalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useForm } from "react-hook-form";
import CreateRoleDialog from "./CreateRole";
import { Role } from "@/types/appTypes";

const EmployeeRole = () => {
  const [saveType, setSaveType] = useState<"create" | "update">("create");
  const orgService = new OrgService();
  const {
    data = { GetAllRoles: [] },
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["roles"],
    queryFn: async () => orgService.getAllRoles(),
  });
  const form = useForm<Role>({
    defaultValues: {},
  });

  const columnHelper = createColumnHelper<Role>();

  const columns = [
    columnHelper.accessor("_id", {
      header: () => "Role Id",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("name", {
      header: () => "Role Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: "Edit",
      cell: (props) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <DotsVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <Button
              onClick={() => {
                setSaveType("update");
                form.reset(props.row.original);
              }}
              variant={"ghost"}
              className="flex items-center justify-start gap-3 font-semibold w-full text-sm"
            >
              <Pencil1Icon />
              Edit
            </Button>
            <DropdownMenuSeparator />
            <Button
              onClick={() => {}}
              variant={"ghost"}
              className="flex items-center justify-start gap-3 font-semibold w-full text-sm"
            >
              <TrashIcon />
              Delete
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    }),
  ];
  const table = useReactTable({
    data: data.GetAllRoles,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onSubmit = (value: Role) => {};

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <Table className="border">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead className="px-4" key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell className="px-4" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-3">
          <CreateRoleDialog
            saveType={saveType}
            setSaveType={setSaveType}
            form={form}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default EmployeeRole;
