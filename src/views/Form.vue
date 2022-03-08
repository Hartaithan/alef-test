<template>
  <div class="form">
    <h2>Персональные данные</h2>
    <div class="inputs__parent">
      <Input id="name" label="Имя" placeholder="Введите имя" v-model="name" />
      <Input id="name" label="Возраст" placeholder="Введите возраст" v-model="age" />
    </div>
    <div class="heading">
      <h2>Дети (макс. 5)</h2>
      <Button text="Добавить ребенка" outline icon />
    </div>
    <div class="inputs__childrens">
      <div class="inputs__childrens__child">
        <Input id="name" label="Имя" placeholder="Введите имя" v-model="name" />
        <Input id="name" label="Возраст" placeholder="Введите возраст" v-model="age" />
        <Button text="Удалить" transparent />
      </div>
    </div>
    <Button text="Сохранить" />
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/Input.vue';
import { MutationType } from '@/models/storeModel';
import { useStore } from '@/store';
import { computed } from 'vue';
import Button from '@/components/Button.vue';

const store = useStore();

const name = computed({
  get() {
    return store.state.parent.name;
  },
  set(value: string) {
    const payload = {
      value,
      input: 'name'
    }
    store.commit(MutationType.UpdateParentForm, payload);
  }
});

const age = computed({
  get() {
    return store.state.parent.age;
  },
  set(value: string) {
    const payload = {
      value,
      input: 'age'
    }
    store.commit(MutationType.UpdateParentForm, payload);
  }
});

</script>

<style scoped lang="scss">
.form {
  background: transparent;
}
h2 {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin-bottom: 20px;
}
.inputs {
  &__parent {
    margin-bottom: 33px;
  }
  &__childrens {
    margin-bottom: 30px;
    &__child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      & > .input-group {
        flex: 1;
        margin-bottom: 0;
        margin-right: 18px;
      }
    }
  }
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 11px;
  h2 {
    margin-bottom: 0;
  }
}
</style>
