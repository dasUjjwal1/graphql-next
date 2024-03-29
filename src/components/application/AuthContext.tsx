"use client";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

type AuthType = {
  menu: { id: string; label: string; path: string; icon: string[] }[];
  userAuth: any;
  token: any;
};
export enum ActionsTypes {
  MENU,
  USERAUTH,
}
export type Actions = { type: ActionsTypes; payload: any };

const initialState: AuthType = {
  menu: [],
  userAuth: null,
  token: null,
};
const reducer = (draft: AuthType, action: Actions) => {
  switch (action.type) {
    case ActionsTypes.MENU:
      return { ...draft, menu: action.payload };
    case ActionsTypes.USERAUTH:
      return {
        ...draft,
        userAuth: action.payload,
        token: action.payload?.token,
      };
    default:
      return draft;
  }
};
export const UserAuthContext = createContext<AuthType>({
  menu: [],
  userAuth: null,
  token: null,
});
export const UserAuthDispatch = createContext<{ dispatch: Dispatch<Actions> }>({
  dispatch: () => null,
});

export const UserAuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserAuthContext.Provider value={state}>
      <UserAuthDispatch.Provider value={{ dispatch }}>
        {children}
      </UserAuthDispatch.Provider>
    </UserAuthContext.Provider>
  );
};
