import { MutationTree } from "vuex";
import {
  IChildren,
  IParent,
  Mutations,
  MutationType,
  State,
} from "../models/storeModel";

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.AddChildren](state) {
    const newChild: IChildren = {
      name: "",
      age: "",
    };
    state.childrens.push(newChild);
  },
  [MutationType.UpdateParentForm](state, payload) {
    const { value, input } = payload;
    state.parent[input as keyof IParent] = value;
  },
};
