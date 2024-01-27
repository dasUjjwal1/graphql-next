"use client";
import { client } from "@/config/apolloconfig";
import { theme } from "@/config/theme";
import { ApolloProvider } from "@apollo/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const ApolloThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default ApolloThemeProvider;
