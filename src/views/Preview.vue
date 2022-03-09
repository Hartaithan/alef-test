<template>
  <div class="preview">
    <h2>Персональные данные</h2>
    <PreviewItem v-if="parent.age && parent.name" type="parent" :value="getValue(parent)" />
    <p class="empty" v-else>Информация о родителе еще не добавлена</p>
    <h2>Дети</h2>
    <template v-if="childrens.length > 0">
      <PreviewItem
        type="child"
        v-for="child in childrens"
        :key="child.id"
        :value="getValue(child)"
        background
      />
    </template>
    <p class="empty" v-else>Информация о детях еще не добавлена</p>
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
.empty {
  margin-bottom: 20px;
}
h2 {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #111111;
  margin-bottom: 20px;
}
</style>

