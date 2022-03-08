import { CommitOptions, Store as VuexStore } from "vuex";

export type Store = Omit<VuexStore<State>, "commit"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

export interface IParent {
  name: string;
  age: string;
}

export interface IChildren {
  id: number;
  name: string;
  age: string;
}

export type State = {
  parent: IParent;
  childrens: IChildren[];
};

export enum MutationType {
  AddChildren = "ADD_CHILDREN",
  UpdateParentForm = "UPDATE_PARENT_FORM",
}

export interface IUpdateParentFormPayload {
  value: string;
  input: string;
}

export type Mutations = {
  [MutationType.AddChildren](state: State): void;
  [MutationType.UpdateParentForm](
    state: State,
    payload: IUpdateParentFormPayload
  ): void;
};
