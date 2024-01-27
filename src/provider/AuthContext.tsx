import { ReactNode, createContext, useContext, useReducer } from "react";
const AuthContext = createContext({
  auth: {
    user: null,
    token: null,
  },
});

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//     const initialState = {
//         auth:null
//     }
//     return <AuthContext.Provider value={}>
//         {children}
//     </AuthContext.Provider>
// };
