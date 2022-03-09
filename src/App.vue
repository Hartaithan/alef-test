<template>
  <Header />
  <div class="main">
    <router-view />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { onBeforeMount } from 'vue';
import { useStore } from './store';
import { MutationType } from './models/storeModel';

const store = useStore();

onBeforeMount(() => {
  store.commit(MutationType.InitialiseStore);
})
</script>
