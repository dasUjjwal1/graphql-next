import { ApolloClient, InMemoryCache } from "@apollo/client";
import { AppConfig } from "./appConfig";

export const client = (token: string) =>
  new ApolloClient({
    uri: "http://localhost:8000/rust-graphql",
    cache: new InMemoryCache(),
    headers: {
      authorization: token,
    },
  });
