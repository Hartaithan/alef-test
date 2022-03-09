<template>
  <div class="preview">
    <h2>Персональные данные</h2>
    <PreviewItem type="parent" :value="getValue(parent)" />
    <h2>Дети</h2>
    <PreviewItem
      type="child"
      v-for="child in childrens"
      :key="child.id"
      :value="getValue(child)"
      background
    />
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { computed } from 'vue';
import PreviewItem from '@/components/PreviewItem.vue';
import { IChildren, IParent } from '@/models/storeModel';

const store = useStore();

const parent = computed(() => store.state.parent)
const childrens = computed(() => store.state.childrens)

const getValue = (value: IParent | IChildren) => {
  return `${value.name}, ${value.age}`
}
</script>

<style scoped lang="scss">
.preview {
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

