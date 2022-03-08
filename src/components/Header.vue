<template>
  <div class="header">
    <img src="../assets/logo.png" alt="logo" />
    <router-link to="/">Форма</router-link>
    <router-link to="/preview">Превью</router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header {
  position: relative;
  width: 100%;
  height: 76px;
  min-height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
  background: #ffffff;
  a {
    font-size: 14px;
    line-height: 24px;
    color: rgba(17, 17, 17, 0.48);
    text-decoration: none;
    transition: 0.5s color ease-in;
    &:hover {
      color: rgba(17, 17, 17, 1);
    }
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
  img {
    position: absolute;
    top: 24px;
    left: 92px;
  }
}
</style>