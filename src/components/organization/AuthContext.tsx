"use client";
import { client } from "@/config/apollo";
import { AppConfig } from "@/config/appConfig";
import { ApolloProvider } from "@apollo/client";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

type AuthType = {
  menu: { id: string; label: string; path: string; icon: string }[];
  adminAuth: any;
  token: any;
};
export enum ActionsTypes {
  MENU,
  ADMINAUTH,
  TOKEN,
}
export type Actions = {
  type: ActionsTypes.MENU | ActionsTypes.ADMINAUTH | ActionsTypes.TOKEN;
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
      return { ...draft, adminAuth: action.payload };
    case ActionsTypes.TOKEN:
      return { ...draft, token: action.payload };
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

  const network = client(token);
  return (
    <OrgAuthContext.Provider value={state}>
      <OrgAuthDispatch.Provider value={{ dispatch }}>
        <ApolloProvider client={network}>{children}</ApolloProvider>
      </OrgAuthDispatch.Provider>
    </OrgAuthContext.Provider>
  );
};
