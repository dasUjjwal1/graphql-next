"use client";
import { createStore } from "zustand/vanilla";
import { StoreApi, useStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ReactNode, createContext, useContext, useRef } from "react";
import { LoginUserQuery } from "@/graphql/graphql";
type AdminAuthType = {
  loaded: boolean;
  menu: { id: string; label: string; path: string; icon: string[] }[];
  adminAuth: LoginUserQuery["loginUser"] | null;
  token: any;
  companyId: string | null;
};
type AdminAuthActions = {
  setMenu: (payload: AdminAuthType["menu"]) => void;
  setDetails: (data: any | null) => void;
  setCompanyId: (data: string | null) => void;
};
type AdminSTore = AdminAuthType & AdminAuthActions;
const AdminAuthInitialState: AdminAuthType = {
  loaded: true,
  menu: [],
  adminAuth: null,
  token: null,
  companyId: null,
};
export const createAdminStore = createStore<AdminSTore>()(
  persist(
    (set, get) => ({
      ...AdminAuthInitialState,
      setMenu: (payload) => {
        set(() => ({
          ...get(),
          menu: payload,
        }));
      },
      setDetails: (data) => {
        set(() => ({
          ...get(),
          adminAuth: data,
          token: data?.token ?? null,
        }));
      },
      setCompanyId: (data) => {
        set(() => ({
          ...get(),
          companyId: data,
        }));
      },
    }),
    {
      name: "admin-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

const OrgAuthContext = createContext<StoreApi<AdminSTore> | null>(null);

export const OrgAuthProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<StoreApi<AdminSTore>>();
  if (!storeRef.current) {
    storeRef.current = createAdminStore;
  }

  return (
    <OrgAuthContext.Provider value={storeRef.current}>
      {children}
    </OrgAuthContext.Provider>
  );
};

export const useAdminAuthStore = <T,>(
  selector: (store: AdminSTore) => T
): T => {
  const orgAuthContext = useContext(OrgAuthContext);

  if (!orgAuthContext) {
    throw new Error(`Store must be use within StoreProvider`);
  }

  return useStore(orgAuthContext, selector);
};
