<template>
  <Header />
  <div class="body">
    <router-view />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
