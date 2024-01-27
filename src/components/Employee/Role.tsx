"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { useState } from "react";
import CreateRoleDialog from "./CreateRole";
import { useQuery } from "@apollo/client";
import { ROLE_QUERY } from "@/apollo/employee";

type Role = {
  roleId: string;
  roleName: string;
  position: number;
};

const EmployeeRole = () => {
  const { data = { getAllRole: [] }, error, loading } = useQuery(ROLE_QUERY);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Stack
        spacing={2}
        marginBottom={3}
        direction="row"
        alignItems={"center"}
        justifyContent={"end"}
      >
        <Button
          className="bg-red-500"
          startIcon={<Add />}
          variant="contained"
          onClick={handleClickOpen}
        >
          Add
        </Button>
      </Stack>
      <CreateRoleDialog open={open} setOpen={setOpen} data={data?.getAllRole} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Role Id</TableCell>
              <TableCell>Role Name</TableCell>
              <TableCell>Role Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.getAllRole?.map((row: Role) => (
              <TableRow
                key={row.roleId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.roleId}</TableCell>
                <TableCell>{row.roleName}</TableCell>
                <TableCell>{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeRole;
