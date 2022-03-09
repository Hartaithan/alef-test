<template>
  <p :class="classObject">{{ props.value }}</p>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: true,
  },
  background: {
    type: Boolean,
    required: false,
  },
});

const classObject = computed(() => ({
  'preview-item__parent': props.type === 'parent',
  'preview-item__child': props.type === 'child',
  background: props.background
}))
</script>

<style scoped lang="scss">
p {
  color: #111111;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  width: fit-content;
  &.background {
    padding: 10px 20px;
    background: #f1f1f1;
    border-radius: 5px;
  }
}
.preview-item {
  &__parent {
    margin-bottom: 60px;
  }
  &__child {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>