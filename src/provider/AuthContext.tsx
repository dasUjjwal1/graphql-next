import { produce } from "immer";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

type AuthType = {
  auth: any;
  menu: { id: string; label: string; path: string; icon: string }[];
  adminAuth: any;
};
export enum ActionsTypes {
  AUTH,
  MENU,
  ADMINAUTH,
}
export type Actions =
  | {
      type: ActionsTypes.AUTH;
      payload: { token: string | null };
    }
  | { type: ActionsTypes.MENU; payload: [] }
  | {
      type: ActionsTypes.ADMINAUTH;
      payload: { token: string | null };
    };
const initialState: AuthType = {
  auth: null,
  menu: [],
  adminAuth: null,
};
const reducer = produce((draft: AuthType, action: Actions) => {
  switch (action.type) {
    case ActionsTypes.AUTH:
      draft.auth = action.payload;
      break;
    case ActionsTypes.MENU:
      draft.menu = action.payload;
    case ActionsTypes.ADMINAUTH:
      draft.adminAuth = action.payload;
    default:
      return draft;
  }
});
export const AuthContext = createContext<AuthType>({
  auth: null,
  menu: [],
  adminAuth: null,
});
export const AuthDispatch = createContext<{ dispatch: Dispatch<Actions> }>({
  dispatch: () => null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={state}>
      <AuthDispatch.Provider value={{ dispatch }}>
        {children}
      </AuthDispatch.Provider>
    </AuthContext.Provider>
  );
};
