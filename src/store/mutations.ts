import { MutationTree } from "vuex";
import { Mutations, MutationType, State } from "../models/storeModel";

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.SetParentForm](state, value) {
    state.parent = value;
  },
  [MutationType.SetChildForm](state, value) {
    state.childrens = value;
  },
};
