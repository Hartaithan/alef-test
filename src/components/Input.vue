<template>
  <div class="input-group">
    <label class="input-group__label" :for="props.id">Имя</label>
    <input
      :id="props.id"
      class="input-group__input"
      type="text"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      v-on:input="updateValue($event)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped lang="scss">
.input-group {
  height: 56px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 8px 16px 6px 16px;
  label {
    font-size: 13px;
    line-height: 16px;
    display: flex;
    color: rgba(17, 17, 17, 0.48);
  }
  input {
    font-size: 14px;
    line-height: 24px;
    color: #111111;
    border: none;
    outline: none;
  }
}
</style>