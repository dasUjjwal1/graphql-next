"use client";
import { createStore } from "zustand/vanilla";
import { StoreApi, useStore } from "zustand";
import { immer } from "zustand/middleware/immer";
import { OrganizationResponse } from "@/graphql/graphql";
import { ReactNode, createContext, useContext, useRef } from "react";
type AdminAuthType = {
  menu: { id: string; label: string; path: string; icon: string[] }[];
  adminAuth: OrganizationResponse | null;
  token: any;
};
type AdminAuthActions = {
  setMenu: (payload: AdminAuthType["menu"]) => void;
  setDetails: (data: OrganizationResponse) => void;
};
type AdminSTore = AdminAuthType & AdminAuthActions;
const AdminAuthInitialState: AdminAuthType = {
  menu: [],
  adminAuth: null,
  token: null,
};
const createAdminStore = createStore<AdminSTore>()(
  immer((set) => ({
    ...AdminAuthInitialState,
    setMenu: (payload) => {
      set((state) => {
        state.menu = payload;
      });
    },
    setDetails: (data) => {
      set((state) => {
        state.adminAuth = data;
        state.token = data.token;
      });
    },
  }))
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
    throw new Error(`useCounterStore must be use within CounterStoreProvider`);
  }

  return useStore(orgAuthContext, selector);
};
