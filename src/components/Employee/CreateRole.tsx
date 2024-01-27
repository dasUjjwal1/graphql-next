"use client";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Dispatch, SetStateAction } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import InputTextComponent from "../form/InputComponent";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";
import SelectComponent from "../form/SelectComponent";
import { useMutation } from "@apollo/client";
import { ROLE_MUTATION } from "@/apollo/employee";
import Snackbar from "@mui/material/Snackbar";

export type SimpleDialogProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: any[];
};
type Role = {
  roleName: string;
  position: string;
  parent?: string;
};
export default function CreateRoleDialog(props: SimpleDialogProps) {
  const [mutation, { data, error, loading, called }] =
    useMutation(ROLE_MUTATION);
  const { setOpen, open } = props;
  const handleClose = () => {
    setOpen(false);
  };
  const initialValue: Role = {
    roleName: "",
    position: "",
    parent: "",
  };
  const handleFormSubmit = (
    values: Role,
    formikHelpers: FormikHelpers<Role>
  ) => {
    mutation({
      variables: {
        rolename: values.roleName,
        position: values.position,
        parent: values.parent ? values.parent : null,
      },
    });
  };
  return (
    <Dialog open={open}>
      <DialogTitle
        bgcolor={"#1976d2"}
        color={"#f0f0f0"}
        variant={"h5"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={3}
      >
        Create Role
        <IconButton color={"default"} onClick={handleClose}>
          <CancelIcon />
        </IconButton>
      </DialogTitle>

      <Formik initialValues={initialValue} onSubmit={handleFormSubmit}>
        {({ handleSubmit, resetForm }) => (
          <Form style={{ padding: 20 }} onSubmit={handleSubmit}>
            <Box display={"flex"} gap={3} flexDirection={"column"} width={400}>
              <InputTextComponent label={"Role Name"} name={"roleName"} />
              <InputTextComponent
                type={"number"}
                label={"Role Position"}
                name={"position"}
                placeholder="Ex : 1,2 unique"
              />
              <SelectComponent
                label="Select Parent"
                name="parent"
                menuItem={props?.data}
                menuLabel="roleName"
                menuValue="position"
              />
              <Box display={"flex"} gap={2}>
                <LoadingButton
                  fullWidth
                  variant={"contained"}
                  type={"submit"}
                  loading={loading}
                  loadingPosition="start"
                  startIcon={<SaveIcon />}
                >
                  Save
                </LoadingButton>
                <Button
                  fullWidth
                  color={"error"}
                  onClick={() => resetForm()}
                  variant={"outlined"}
                  type={"button"}
                >
                  Reset
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
