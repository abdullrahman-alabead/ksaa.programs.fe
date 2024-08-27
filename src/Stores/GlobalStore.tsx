import { create } from "zustand";

export interface GlobalStore {
  currentLocale: string;
  isLoading: boolean;
  defaultLocale: string;
  globalContent: any | null;
}

const useGlobalStore = create<GlobalStore>(() => ({
  defaultLocale: "ar",
  currentLocale: "",
  isLoading: false,
  globalContent: null,
}));

export default useGlobalStore;
