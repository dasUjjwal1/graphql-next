import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
export const clientNode = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "http://localhost:4000/graphql",
  }),
});
