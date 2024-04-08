"use client";
import { createStore } from "zustand/vanilla";
import { StoreApi, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";
import { OrganizationResponse } from "@/graphql/graphql";
import { ReactNode, createContext, useContext, useRef } from "react";
type AdminAuthType = {
  loaded: boolean;
  menu: { id: string; label: string; path: string; icon: string[] }[];
  adminAuth: OrganizationResponse | null;
  token: any;
};
type AdminAuthActions = {
  setMenu: (payload: AdminAuthType["menu"]) => void;
  setDetails: (data: OrganizationResponse | null) => void;
};
type AdminSTore = AdminAuthType & AdminAuthActions;
const AdminAuthInitialState: AdminAuthType = {
  loaded: true,
  menu: [],
  adminAuth: null,
  token: null,
};
export const createAdminStore = createStore<AdminSTore>()(
  persist(
    (set, get) => ({
      ...AdminAuthInitialState,
      setMenu: (payload) => {
        set((state) => ({
          ...get(),
          menu: payload,
        }));
      },
      setDetails: (data) => {
        set((state) => ({
          ...get(),
          adminAuth: data,
          token: data?.token ?? null,
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
