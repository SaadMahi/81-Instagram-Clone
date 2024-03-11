import { create } from "zustand";

// 04:01:13

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user-info")),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
