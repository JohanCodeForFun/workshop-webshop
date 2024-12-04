<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue';
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <p>home{{ $route.fullPath }}</p>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
