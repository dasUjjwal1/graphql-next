"use client";
import { produce } from "immer";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

type AuthType = {
  menu: { id: string; label: string; path: string; icon: string }[];
  userAuth: any;
};
export enum ActionsTypes {
  MENU,
  USERAUTH,
}
export type Actions =
  | { type: ActionsTypes.MENU; payload: [] }
  | {
      type: ActionsTypes.USERAUTH;
      payload: { token: string | null };
    };
const initialState: AuthType = {
  menu: [],
  userAuth: null,
};
const reducer = produce((draft: AuthType, action: Actions) => {
  switch (action.type) {
    case ActionsTypes.MENU:
      draft.menu = action.payload;
    case ActionsTypes.USERAUTH:
      draft.userAuth = action.payload;
    default:
      return draft;
  }
});
export const UserAuthContext = createContext<AuthType>({
  menu: [],
  userAuth: null,
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
