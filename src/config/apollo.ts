// import { ApolloClient, InMemoryCache } from "@apollo/client";

// export const client = (token: string) =>
//   new ApolloClient({
//     uri: process.env.NEXT_PUBLIC_API + "/rust-graphql",
//     cache: new InMemoryCache(),
// headers: {
//   authorization: token,
// },
//   });

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";
// export const makeClient = (token: string) => {
//   const httpLink = new HttpLink({
//     uri: process.env.NEXT_PUBLIC_API + "/rust-graphql",
//   });
//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link:
//       typeof window === "undefined"
//         ? ApolloLink.from([
//             new SSRMultipartLink({
//               stripDefer: true,
//             }),
//             httpLink,
//           ])
//         : httpLink,
//     headers: {
//       authorization: token,
//     },
//   });
// };

export const makeClient = (token: string) => {
  const removeTypenameLink = removeTypenameFromVariables();
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API + "/rust-graphql",
    headers: {
      Authorization: token,
    },
  });
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            removeTypenameLink,
            httpLink,
          ])
        : httpLink,
  });
};
