"use client";
// import { makeClient } from "@/config/apollo";
import { AppConfig } from "@/config/appConfig";
import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
type AuthType = {
  menu: { id: string; label: string; path: string; icon: string }[];
  adminAuth: any;
  token: any;
};
export enum ActionsTypes {
  MENU,
  ADMINAUTH,
}
export type Actions = {
  type: ActionsTypes.MENU | ActionsTypes.ADMINAUTH;
  payload: any;
};
const initialState: AuthType = {
  menu: [],
  adminAuth: null,
  token: null,
};
const reducer = (draft: AuthType, action: Actions) => {
  switch (action.type) {
    case ActionsTypes.MENU:
      return { ...draft, menu: action.payload };
    case ActionsTypes.ADMINAUTH:
      return {
        ...draft,
        adminAuth: action.payload,
        token: action.payload?.token,
      };
    default:
      return draft;
  }
};
export const OrgAuthContext = createContext<AuthType>({
  menu: [],
  adminAuth: null,
  token: null,
});
export const OrgAuthDispatch = createContext<{ dispatch: Dispatch<Actions> }>({
  dispatch: () => null,
});

export const OrgAuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const token =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem(AppConfig.CREDENTIAL) as string)
      : "";
  // import { ApolloClient, InMemoryCache } from "@apollo/client";

  // export const client = (token: string) =>
  //   new ApolloClient({
  //     uri: process.env.NEXT_PUBLIC_API + "/rust-graphql",
  //     cache: new InMemoryCache(),
  // headers: {
  //   authorization: token,
  // },
  //   });

  const makeClient = (token: string) => {
    const httpLink = new HttpLink({
      uri: process.env.NEXT_PUBLIC_API + "/rust-graphql",
    });
    console.log(token);
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      // link:
      //   typeof window === "undefined"
      //     ? ApolloLink.from([
      //         new SSRMultipartLink({
      //           stripDefer: true,
      //         }),
      //         httpLink,
      //       ])
      //     : httpLink,
      uri: process.env.NEXT_PUBLIC_API + "/rust-graphql",
      headers: {
        Authorization: token,
      },
    });
  };
  const network = makeClient(token);
  return (
    <OrgAuthContext.Provider value={state}>
      <OrgAuthDispatch.Provider value={{ dispatch }}>
        <ApolloNextAppProvider makeClient={() => network}>
          {children}
        </ApolloNextAppProvider>
      </OrgAuthDispatch.Provider>
    </OrgAuthContext.Provider>
  );
};
