import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = (token: string) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API,
    cache: new InMemoryCache(),
    headers: {
      authorization: token,
    },
  });
