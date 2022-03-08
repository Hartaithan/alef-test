<template>
  <div class="form">
    <h2>Персональные данные</h2>
    <div class="parent-inputs">
      <Input id="name" label="Имя" placeholder="Введите имя" v-model="name" />
      <Input id="name" label="Возраст" placeholder="Введите возраст" v-model="age" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '@/components/Input.vue';
import { MutationType } from '@/models/storeModel';
import { useStore } from '@/store';
import { computed } from 'vue';

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
</style>
