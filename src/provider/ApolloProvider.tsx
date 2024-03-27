"use client";
import { ReactNode } from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
  ApolloNextAppProvider,
} from "@apollo/experimental-nextjs-app-support/ssr";
const ApolloGqlProvider = ({ children }: { children: ReactNode }) => {
  const makeClient = () => {
    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_API + "/rust-graphql",
    });
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              httpLink,
            ])
          : httpLink,
    });
  };
  //   const token =
  //     typeof window !== "undefined"
  //       ? JSON.parse(sessionStorage.getItem(AppConfig.CREDENTIAL) as string)
  //       : "";
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};

export default ApolloGqlProvider;
