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
  SetParentForm = "SET_PARENT_FORM",
  SetChildForm = "SET_CHILD_FORM",
}

export type Mutations = {
  [MutationType.SetParentForm](state: State, value: IParent): void;
  [MutationType.SetChildForm](state: State, value: IChildren[]): void;
};
