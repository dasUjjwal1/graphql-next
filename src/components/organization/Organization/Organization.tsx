"use client";
import {
  DotsVerticalIcon,
  Pencil1Icon,
  PlusCircledIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "../../ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { DrawerTrigger } from "../../ui/drawer";
import CreateOrganization from "./CreateOrganization";
import { GetAllOrganizationQuery } from "@/graphql/graphql";

const Organization = () => {
  const columnHelper =
    createColumnHelper<GetAllOrganizationQuery["getAllOrganization"]>();

  const columns = [
    columnHelper.accessor("id", {
      header: () => "Role Id",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("orgName", {
      header: () => "Org-name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("orgType", {
      header: () => "Org-type",
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
              onClick={() => {}}
              variant={"ghost"}
              className="flex items-center justify-start gap-3 font-semibold w-full text-sm"
            >
              <Pencil1Icon />
              Preview & Update
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
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const Trigger = () => (
    <div className="flex items-center justify-end">
      <DrawerTrigger asChild>
        <Button className=" flex gap-3 font-semibold ">
          <PlusCircledIcon />
          Create Organization
        </Button>
      </DrawerTrigger>
    </div>
  );
  return (
    <div className="container">
      <CreateOrganization Trigger={Trigger} />

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
      </>
    </div>
  );
};

export default Organization;
