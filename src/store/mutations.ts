import { MutationTree } from "vuex";
import {
  IChildren,
  Mutations,
  MutationType,
  State,
} from "../models/storeModel";

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.AddChildren](state) {
    const newChild: IChildren = {
      name: "",
      age: null,
    };
    state.childrens.push(newChild);
  },
  [MutationType.UpdateForm](state, value) {
    state.parent.name = value;
  },
};
