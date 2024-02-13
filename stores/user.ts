import { defineStore } from "pinia";
import type { User } from "~/types/types";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
    removeUser() {
      this.user = null;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
