"use client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeProvider";
import { client } from "@/config/apollo";

const GraphQLProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        // enableSystem
        // disableTransitionOnChange
      >
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default GraphQLProvider;
