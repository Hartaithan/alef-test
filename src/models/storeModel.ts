import { CommitOptions, Store as VuexStore } from "vuex";

export type Store = Omit<VuexStore<State>, "commit"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

export interface IParent {
  name: string;
  age: number | null;
}

export interface IChildren {
  name: string;
  age: number | null;
}

export type State = {
  parent: IParent;
  childrens: IChildren[];
};

export enum MutationType {
  AddChildren = "ADD_CHILDREN",
}

export type Mutations = {
  [MutationType.AddChildren](state: State): void;
};
