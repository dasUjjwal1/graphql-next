"use client";
import Box from "@mui/material/Box";
import { Form, Formik } from "formik";
import InputTextComponent from "../form/InputComponent";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Image from "next/image";
import Loginackground from "../../../public/visual-collaboration.svg";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "@/apollo/employee";
const SignIn = () => {
  const [mutation, { data, loading, error }] = useMutation(LOG_IN);
  const initialValue = {
    email: "",
    password: "",
  };
  const handleFormSubmit = (value: typeof initialValue) =>
    mutation({ variables: value });
  return (
    <>
      <Grid container component="main" sx={{ height: "100%" }}>
        <Grid item xs={12} sm={8} md={6}>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            height={"100%"}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik initialValues={initialValue} onSubmit={handleFormSubmit}>
              {({ handleSubmit }) => (
                <Form
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  className="mt-3"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <InputTextComponent label={"Email"} name={"email"} />
                    </Grid>
                    <Grid item xs={12}>
                      <InputTextComponent
                        label={"Password"}
                        name={"password"}
                        type="password"
                      />
                    </Grid>
                  </Grid>
                  <LoadingButton
                    loading={loading}
                    loadingIndicator="Logging in"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                  >
                    Log in
                  </LoadingButton>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          height={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={Loginackground} alt="background" width={400} />
        </Grid>
      </Grid>
    </>
  );
};

export default SignIn;
