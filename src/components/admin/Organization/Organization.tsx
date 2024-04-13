"use client";
import {
  DotsVerticalIcon,
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
import { useQuery } from "@apollo/client";
import { Loader2, RotateCcw } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppConfig } from "@/config/appConfig";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { GET_ALL_ORGANIZATION } from "@/gql/orgDetails";
import { useAdminAuthStore } from "../AuthContext";
import Link from "next/link";
const Organization = () => {
  const { token } = useAdminAuthStore((state) => state);

  const { data, loading, refetch } = useQuery<GetAllOrganizationQuery>(
    GET_ALL_ORGANIZATION,
    {
      onError(error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
      context: {
        headers: {
          authorization: token,
        },
      },
    }
  );
  const [modal, setModal] = useState<boolean>(false);
  const columnHelper =
    createColumnHelper<GetAllOrganizationQuery["getAllOrganization"]>();

  const columns = [
    columnHelper.accessor("id", {
      header: () => "Serial",
      cell: (info) => info.row.index + 1,
    }),
    columnHelper.accessor("orgName", {
      header: () => "Org-Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "time",
      header: "Office-Time",
      cell: (props) => {
        const data = props.row.original as any;
        return (
          <>
            {Math.floor(Number(data?.startTime) / 60)} :{" "}
            {(Number(data?.startTime) % 60).toString().padStart(2, "0")} -{" "}
            {Math.floor(Number(data?.endTime) / 60)} :{" "}
            {(Number(data?.endTime) % 60).toString().padStart(2, "0")}
          </>
        );
      },
    }),
    columnHelper.accessor("orgType", {
      header: () => "Org-Type",
      cell: (info) => (
        <Select
          open={false}
          defaultValue={info.getValue() ? info.getValue()?.toString() : "0"}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Not Selected</SelectLabel>
              {AppConfig.ORGANIZATION_TYPE.map((item) => (
                <SelectItem key={item.value} value={item.value.toString()}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    }),
    columnHelper.accessor("isActive", {
      header: () => "Status",
      cell: (info) => (
        <Switch
          checked={info.getValue() ? (info.getValue() as boolean) : false}
          onCheckedChange={() => {}}
        />
      ),
    }),
    columnHelper.display({
      id: "actions",
      header: "Edit",
      cell: (info) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <DotsVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <Link href={`/admin/organization/${info.row.index}`}>
              Preview & Update
            </Link>
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
    data: data?.getAllOrganization ? data?.getAllOrganization : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const Trigger = () => (
    <DrawerTrigger asChild>
      <Button className=" flex gap-3 font-semibold ">
        <PlusCircledIcon />
        Create Organization
      </Button>
    </DrawerTrigger>
  );
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <Button onClick={() => refetch()}>
          <RotateCcw className="w-4 h-4" />
        </Button>
        <CreateOrganization
          setModal={setModal}
          open={modal}
          refetch={refetch}
          Trigger={Trigger}
        />
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
  );
};

export default Organization;
