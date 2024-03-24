"use client";

import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";
import {
  DotsVerticalIcon,
  Pencil1Icon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import CreateRoleDialog from "./components/CreateRole";
import { Loader2, RotateCcw, TrashIcon } from "lucide-react";
import { useQuery } from "@apollo/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GET_ALL_ROLE } from "@/gql/org";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GetAllRoleQuery } from "@/graphql/graphql";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RoleComponent = () => {
  const {
    data = { getAllRole: [] },
    loading,
    error,
    refetch,
  } = useQuery(GET_ALL_ROLE);
  const Trigger = () => (
    <DrawerTrigger asChild>
      <Button className=" flex gap-3 font-semibold " onClick={() => refetch()}>
        <PlusCircledIcon />
        Create Role
      </Button>
    </DrawerTrigger>
  );
  const columnHelper = createColumnHelper<GetAllRoleQuery["getAllRole"]>();

  const columns = [
    columnHelper.accessor("id", {
      header: () => "Serial",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("name", {
      header: () => "Role",
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
          <DropdownMenuContent>
            <Button
              onClick={() => {}}
              variant={"ghost"}
              className="flex items-center justify-start gap-3 text-sm w-full"
            >
              <Pencil1Icon />
              Preview & Update
            </Button>
            <DropdownMenuSeparator />
            <Button
              onClick={() => {}}
              variant={"ghost"}
              className="flex items-center justify-start gap-3 w-full text-sm"
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
    data: data.getAllRole,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-between">
          <Button onClick={() => {}}>
            <RotateCcw className="w-4 h-4" />
          </Button>
          <CreateRoleDialog Trigger={Trigger} roles={data.getAllRole} />
        </div>
        <>
          <Table className="border mt-3 w-full">
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
              {loading ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 ">
                    <div className="items-center flex justify-center">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                <>
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
                </>
              )}
            </TableBody>
          </Table>
        </>
      </div>
    </>
  );
};

export default RoleComponent;
