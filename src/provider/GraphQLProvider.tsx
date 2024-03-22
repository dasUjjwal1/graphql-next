"use client";
import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { NetworkClient } from "@/config/apollo";

const GraphQLProvider = ({ children }: { children: ReactNode }) => {
  const neteork = new NetworkClient();
  return (
    <ApolloProvider client={neteork.client}>
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
