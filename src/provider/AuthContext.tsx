import { produce } from "immer";
import {
  Dispatch,
  DispatchWithoutAction,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type AuthType = {
  auth: {
    user: any;
    token: string | null;
  };
  menu: { id: string; label: string; path: string; icon: string }[];
};
export enum ActionsTypes {
  AUTH,
  MENU,
}
export type Actions =
  | {
      type: ActionsTypes.AUTH;
      payload: { user: any; token: string | null };
    }
  | { type: ActionsTypes.MENU; payload: [] };
const initialState: AuthType = {
  auth: {
    user: null,
    token: null,
  },
  menu: [],
};
const reducer = produce((draft: AuthType, action: Actions) => {
  switch (action.type) {
    case ActionsTypes.AUTH:
      draft.auth = action.payload;
      break;
    case ActionsTypes.MENU:
      draft.menu = action.payload;
    default:
      return draft;
  }
});
export const AuthContext = createContext<AuthType>({
  auth: { user: null, token: null },
  menu: [],
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
