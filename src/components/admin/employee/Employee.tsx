"use client";

import { useLazyQuery, useQuery } from "@apollo/client";
import CreateEmployeeCredential from "./components/CreateEmployee";
import {
  Employee,
  GetAllOrganizationQuery,
  GetEmployeeListByOrgIdQuery,
  GetEmployeeListByOrgIdQueryVariables,
} from "@/graphql/graphql";
import { GET_ALL_ORGANIZATION } from "@/gql/orgDetails";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GET_ALL_EMPLOYEE_BY_ORG_ID } from "@/gql/employee";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  ColumnDef,
  PaginationState,
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
} from "@/components/ui/table";
import { Loader2, PlusCircle, RefreshCcw, SearchIcon } from "lucide-react";
import { DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAdminAuthStore } from "../AuthContext";

const EmployeeComponent = () => {
  const { token, adminAuth } = useAdminAuthStore((state) => state);
  const context = {
    headers: {
      authorization: token,
    },
  };

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, loading: orgLoading } = useQuery<GetAllOrganizationQuery>(
    GET_ALL_ORGANIZATION,
    {
      onError(error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
      context,
    }
  );
  const [query, { data: employeeList, fetchMore, updateQuery, loading }] =
    useLazyQuery<
      GetEmployeeListByOrgIdQuery,
      GetEmployeeListByOrgIdQueryVariables
    >(GET_ALL_EMPLOYEE_BY_ORG_ID, {
      onError(error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
      context,
    });
  useEffect(() => {
    !orgLoading &&
      data?.getAllOrganization &&
      query({
        variables: {
          body: {
            id: data?.getAllOrganization[0]?.id,
            pagination: { limit: 10, offset: 0 },
          },
        },
      });
  }, [data?.getAllOrganization]);
  const columnHelper = createColumnHelper<Employee>();
  const columns = useMemo<ColumnDef<Employee, any>[]>(
    () => [
      columnHelper.accessor("id", {
        header: () => "Serial",
        cell: (info) => info.row.index + 1,
      }),
      columnHelper.accessor("employeeEmail", {
        header: () => "Email",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("employeeRole", {
        header: () => "Role",
        cell: (info) => {
          const role = adminAuth?.roles ?? [];
          return (
            <Select open={false} defaultValue={info.getValue()}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Role</SelectLabel>
                  {role.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          );
        },
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const table = useReactTable({
    data: employeeList?.getEmployeeListByOrgId?.data
      ? employeeList?.getEmployeeListByOrgId?.data
      : [],
    columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: employeeList?.getEmployeeListByOrgId?.totalCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  });
  const Trigger = () => {
    return (
      <DrawerTrigger asChild>
        <Button className=" flex gap-3 font-semibold ">
          <PlusCircle className="w-4 h-4" /> Create Employee Credential
        </Button>
      </DrawerTrigger>
    );
  };
  return (
    <div className="container">
      <div className="flex items-center justify-between">
        <Select
          onValueChange={(e) => {
            query({
              variables: {
                body: { id: e, pagination: { limit: 10, offset: 0 } },
              },
            });
          }}
          defaultValue={data?.getAllOrganization[0]?.id}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Organization" />
          </SelectTrigger>
          <SelectContent>
            {data?.getAllOrganization?.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.orgName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <CreateEmployeeCredential
            Trigger={Trigger}
            orgList={data?.getAllOrganization ? data?.getAllOrganization : []}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <SearchIcon className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Button
        className="mt-2"
        onClick={() =>
          query({
            variables: {
              body: {
                id: data?.getAllOrganization[0]?.id,
                pagination: { limit: 10, offset: 0 },
              },
            },
          })
        }
      >
        <RefreshCcw className="w-4 h-4" />
      </Button>
      <>
        <Table className="border mt-3 w-full">
          <TableHeader>
            {table.getHeaderGroups()?.map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers?.map((header) => {
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
            )}
          </TableBody>
        </Table>
      </>
      {/* <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
      </div> */}

      <div className="flex mt-3 items-center justify-end">
        <Pagination className="gap-2">
          <PaginationContent>
            {table.getState().pagination.pageIndex + 1 > 1 && (
              <PaginationItem>
                <PaginationPrevious onClick={() => table.previousPage()} />
              </PaginationItem>
            )}

            {Array(table.getPageCount())
              .fill("")
              .map((elm, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={table.getState().pagination.pageIndex === index}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

            {table.getPageCount() > 6 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {table.getState().pagination.pageIndex + 1 <
              table.getPageCount() && (
              <PaginationItem>
                <PaginationNext onClick={() => table.nextPage()} />
              </PaginationItem>
            )}
          </PaginationContent>
          <Select onValueChange={(e) => {}} defaultValue={"10"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Organization" />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Pagination>
      </div>
    </div>
  );
};

export default EmployeeComponent;
