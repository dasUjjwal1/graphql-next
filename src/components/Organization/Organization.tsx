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
import { table } from "console";
import { columns } from "tailwindcss/defaultTheme";
import { Button } from "../ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";
import { Employee, OrgCreate, OrgDetailsTable } from "@/types/appTypes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import CreateOrganization from "./CreateOrganization";

const Organization = () => {
  const form = useForm<OrgCreate>({
    defaultValues: {},
  });
  const onSubmit = (value: OrgCreate) => {};
  const columnHelper = createColumnHelper<OrgDetailsTable>();

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
              onClick={() => {}}
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
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <Drawer>
        <div className="h-full py-10 flex items-center gap-5 flex-col">
          <h2 className="text-3xl  font-bold space-x-2">
            Looks like you have no Organization yet
          </h2>
          <DrawerTrigger asChild>
            <Button
              variant={"destructive"}
              className="p-6 flex gap-3 font-semibold text-lg"
            >
              <PlusCircledIcon className="w-6 h-6" />
              Let&apos;s create
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Organization</DrawerTitle>
            <DrawerDescription>
              Data would not be lost untill you reset
            </DrawerDescription>
          </DrawerHeader>
          <Form {...form}>
            <form
              autoComplete={"off"}
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 border grid grid-cols-12 gap-2 items-center"
            >
              <CreateOrganization form={form} onSubmit={onSubmit} />
              <DrawerFooter className="col-span-12">
                <Button type="submit">Submit</Button>
                <DrawerClose>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </form>
          </Form>
        </DrawerContent>
      </Drawer>

      {false && (
        <>
          <div className="pb-4 flex items-center justify-end">
            <Button className="gap-2 font-semibold">
              <PlusCircledIcon /> Create
            </Button>
          </div>
          <Table className="border w-full">
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
      )}
    </>
  );
};

export default Organization;
