<template>
  <div class="form">
    <Input id="name" placeholder="Введите имя" v-model="name" />
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
    store.commit(MutationType.UpdateForm, value);
  }
});

</script>

<style scoped lang="scss">
.form {
  background: transparent;
}
</style>
