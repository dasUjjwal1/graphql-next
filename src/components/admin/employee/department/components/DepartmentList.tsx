"use client";

import { Department, GetAllDepartmentByOrgIdQuery } from "@/graphql/graphql";
import { DataState } from "@/types/appTypes";

import { Dispatch, SetStateAction, useCallback } from "react";

type Props = {
  data: GetAllDepartmentByOrgIdQuery | undefined;
  loading: boolean;
  setDataState: Dispatch<SetStateAction<DataState<Department>>>;
  onOpen: () => void;
  deleteRole: (id: string) => void;
};
type Keys = keyof Department;

const DepartmentList = ({
  data,
  loading,
  onOpen,
  setDataState,
  deleteRole,
}: Props) => {
  const columns: { name: string; uid: Keys }[] = [
    { name: "NAME", uid: "name" },
    { name: "ACTIONS", uid: "id" },
  ];

  return (
    <>
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
              </div>
              <div className="w-full mt-3 flex gap-3">
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
              <div className="w-full mt-3 flex gap-3">
                <Skeleton className="w-full h-9 rounded-lg" />
                <Skeleton className="w-full h-9 rounded-lg" />
              </div>
            </div>
          }
          loadingState={loading ? "loading" : "idle"}
          items={data?.getAllDepartmentByOrgId ?? []}
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
      </Table> */}
    </>
  );
};

export default DepartmentList;
