import { createLogger, createStore } from "vuex";
import { State, Store } from "../models/storeModel";
import { mutations } from "./mutations";
import { state } from "./state";

export const store = createStore<State>({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  state,
  mutations,
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export function useStore(): Store {
  return store as Store;
}
