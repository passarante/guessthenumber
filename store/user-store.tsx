import { User } from "@supabase/supabase-js";
import { create } from "zustand";

export type CustomUser = User & { username?: string; name?: string };

type Store = {
  user: CustomUser | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create<Store>()((set) => ({
  user: null,
  setUser: (user: CustomUser | null) => set({ user }),
}));

export default useUserStore;
