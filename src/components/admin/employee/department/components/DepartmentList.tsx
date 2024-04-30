"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DotsVerticalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// import AddDepartment from "./AddDepartment";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DepartmentList = () => {
  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("id", {
      header: () => "#",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("name", {
      header: () => "Department",
      cell: (info) => info.getValue(),
    }),

    columnHelper.display({
      id: "actions",
      header: "Options",
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
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        {/* <AddDepartment /> */}
      </div>
      <Table className="mt-3 w-full">
        <TableHeader>
          {table.getHeaderGroups()?.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers?.map((header, index) => {
                return (
                  <TableHead
                    className={
                      "px-4 " + (index === 0 ? "text-left" : "text-right")
                    }
                    key={header.id}
                  >
                    {!header.isPlaceholder &&
                      flexRender(
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
          <>
            {table.getRowModel()?.rows?.length ? (
              table.getRowModel()?.rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells()?.map((cell) => (
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
        </TableBody>
      </Table>
    </>
  );
};

export default DepartmentList;
