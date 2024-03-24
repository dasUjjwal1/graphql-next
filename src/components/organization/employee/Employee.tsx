"use client";

import { useLazyQuery, useQuery } from "@apollo/client";
import CreateEmployeeCredential from "./components/CreateEmployee";
import {
  Employee,
  GetAllEmployeeByOrgIdQuery,
  GetAllEmployeeByOrgIdQueryVariables,
  GetAllOrganizationDocument,
  GetAllOrganizationQuery,
} from "@/graphql/graphql";
import { GET_ALL_ORGANIZATION } from "@/gql/orgDetails";
import {
  Select,
  SelectContent,
  SelectItem,
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
import { useMemo, useState } from "react";
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
import { Loader2 } from "lucide-react";

const EmployeeComponent = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const { data, error } =
    useQuery<GetAllOrganizationQuery>(GET_ALL_ORGANIZATION);
  const [query, { data: employeeList, fetchMore, updateQuery, loading }] =
    useLazyQuery<
      GetAllEmployeeByOrgIdQuery["getEmployeeListByOrgId"],
      GetAllEmployeeByOrgIdQueryVariables
    >(GET_ALL_EMPLOYEE_BY_ORG_ID);
  const columnHelper = createColumnHelper<Employee>();
  const columns = useMemo<ColumnDef<Employee, any>[]>(
    () => [
      columnHelper.accessor("id", {
        header: () => "Serial",
        cell: (info) => info.row.index + 1,
      }),
      columnHelper.accessor("employeeName", {
        header: () => "Name",
        cell: (info) => info.getValue(),
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const table = useReactTable({
    data: employeeList?.data ? employeeList.data : [],
    columns,
    // pageCount: dataQuery.data?.pageCount ?? -1, //you can now pass in `rowCount` instead of pageCount and `pageCount` will be calculated internally (new in v8.13.0)
    rowCount: employeeList?.totalCount, // new in v8.13.0 - alternatively, just pass in `pageCount` directly
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true, //we're doing manual "server-side" pagination
    // getPaginationRowModel: getPaginationRowModel(), // If only doing manual pagination, you don't need this
    debugTable: true,
  });
  return (
    <div className="container">
      <CreateEmployeeCredential orgList={data?.getAllOrganization} />
      <Select
        onValueChange={(e) => {
          query({
            variables: { body: { id: e, pagination: { limit: 1, offset: 1 } } },
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
      <div className="flex items-center gap-2">
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
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {/* {dataQuery.isFetching ? 'Loading...' : null} */}
      </div>
      <div>
        Showing {table.getRowModel().rows.length.toLocaleString()} of{" "}
        {employeeList?.totalCount.toLocaleString()} Rows
      </div>
      <div className="flex items-center justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default EmployeeComponent;
