"use client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { client } from "@/config/apollo";

const GraphQLProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        // enableSystem
        // disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default GraphQLProvider;
