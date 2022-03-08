<template>
  <button type="button" class="btn" :class="{ outline: outline, transparent: transparent }">
    <svg
      v-if="props.icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z"
        :fill="props.outline ? '#01A7FD' : '#FFFFFF'"
      />
    </svg>
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: Boolean,
    required: false,
  },
  outline: {
    type: Boolean,
    required: false,
  },
  transparent: {
    type: Boolean,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: fit-content;
  height: 44px;
  border: none;
  background: #01a7fd;
  border-radius: 100px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  &.outline {
    border: 2px solid #01a7fd;
    background: transparent;
    color: #01a7fd;
  }
  &.transparent {
    height: fit-content;
    padding: 0;
    background: transparent;
    color: #01a7fd;
  }
  &:hover {
    opacity: 0.8;
  }
}
svg {
  margin-right: 4px;
}
</style>