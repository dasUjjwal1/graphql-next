"use client";
import { clientNode } from "@/config/apolloconfig";
import { theme } from "@/config/theme";
import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";

const ApolloThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={clientNode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default ApolloThemeProvider;
