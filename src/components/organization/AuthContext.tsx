"use client";
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
  return (
    <OrgAuthContext.Provider value={state}>
      <OrgAuthDispatch.Provider value={{ dispatch }}>
        {children}
      </OrgAuthDispatch.Provider>
    </OrgAuthContext.Provider>
  );
};
