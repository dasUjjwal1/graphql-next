"use client";

import {
  GetAllOrganizationQuery,
  Organization,
  OrganizationRegisterInput,
} from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";
import { Button } from "primereact/button";

import { Chip } from "primereact/chip";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dispatch, SetStateAction } from "react";

const OrganizationList = ({
  data,
  loading,
  setDataState,
}: {
  data: GetAllOrganizationQuery | undefined;
  loading: boolean;
  setDataState: Dispatch<SetStateAction<DataState<OrganizationRegisterInput>>>;
  // deleteRole: (id: string) => void;
}) => {
  const handleEdit = (data: OrganizationRegisterInput) => {
    const requestBody: OrganizationRegisterInput = {
      ...data,
      // endTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.endTime),
      // startTime: addMinutes(new Date(2014, 6, 10, 0, 0), data.startTime),
    };
    setDataState((prev) => ({
      ...prev,
      type: "UPDATE",
      data: requestBody,
      state: true,
    }));
  };
  // const timeTemplate = (body: any) => (
  //   <>
  //     {addMinutes(new Date(2014, 6, 10, 0, 0), body.startTime).toLocaleString(
  //       [],
  //       {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       }
  //     )}{" "}
  //     -{" "}
  //     {addMinutes(new Date(2014, 6, 10, 0, 0), body.endTime).toLocaleString(
  //       [],
  //       {
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       }
  //     )}
  //   </>
  // );
  // const renderCell = useCallback((item: Organization, columnKey: Keys) => {
  //   switch (columnKey) {
  //     case "address":
  //       const data = item.address;
  //       return (
  //         <div className="flex flex-col">
  //           <p className="text-bold text-sm capitalize">
  //             {data?.buildingNumber}
  //           </p>
  //           <p className="text-bold text-sm capitalize text-default-400">
  //             {data?.city}
  //             {", "}
  //             {data?.state}
  //           </p>
  //         </div>
  //       );
  //     case "startTime":
  //       return <p></p>;
  //     case "isActive":
  //       return (
  //         <Chip
  //           className="capitalize"
  //           color={item.isActive ? "success" : "danger"}
  //           size="sm"
  //           variant="flat"
  //         ></Chip>
  //       );
  //     case "id":
  //       return (
  //         <div className="relative flex justify-end items-center gap-2">
  //           <Dropdown>
  //             <DropdownTrigger>
  //               <Button isIconOnly size="sm" variant="light">
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   strokeWidth={1.5}
  //                   stroke="currentColor"
  //                   className="w-6 h-6"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
  //                   />
  //                 </svg>
  //               </Button>
  //             </DropdownTrigger>
  //             <DropdownMenu aria-label="Static Actions">
  //               <DropdownItem onClick={() => handleEdit(item)}>
  //                 Edit
  //               </DropdownItem>
  //               <DropdownItem>Delete</DropdownItem>
  //             </DropdownMenu>
  //           </Dropdown>
  //         </div>
  //       );
  //     default:
  //       return item[columnKey];
  //   }
  // }, []);
  const activeTemplate = (body: Organization) => {
    return (
      <Chip
        className={body.isActive ? "bg-green-600 text-green-50" : ""}
        label={body.isActive ? "Active" : "Inactive"}
      />
    );
  };
  const addressTemplate = (body: Organization) => {
    return (
      <>
        {body.address && (
          <div className="">
            <small className="font-semibold">
              {body.address?.buildingNumber + ", " + body.address?.street}
            </small>
            <small className="block">
              {body.address?.city +
                ", " +
                body.address.state +
                ", " +
                body.address.pin}
            </small>
          </div>
        )}
      </>
    );
  };
  const actionTemplate = (body: OrganizationRegisterInput) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          size="small"
          text
          aria-label="Edit"
          onClick={() => handleEdit(body)}
        />
      </>
    );
  };
  return (
    <div>
      <DataTable loading={loading} value={data?.getAllOrganization ?? []}>
        <Column field="name" header={"Organization Name"} />
        <Column body={addressTemplate} header={"Address"} />
        <Column body={activeTemplate} header={"Status"} />
        <Column body={actionTemplate} header={"Status"} />
      </DataTable>
      {/* <Table aria-label="Example table with custom cells">
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
          items={data?.getAllOrganization ?? []}
        >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey as Keys)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table> */}
    </div>
  );
};

export default OrganizationList;
