import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "http://localhost:8000/rust-graphql",
  }),
});
