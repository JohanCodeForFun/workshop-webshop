<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "./components/TheHeader.vue";

import { useUserStore } from "./stores/userStore";
import { storeToRefs } from "pinia";
import { provide } from "vue";

const userStore = useUserStore();
const { name } = storeToRefs(userStore);
provide('user', name)

const message = "Välkommen till Häng På Kroken";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <p>home{{ $route.fullPath }}</p>
    <h1>{{ message }}</h1>

    <RouterView />
  </main>
</template>

<style scoped>
  .hero-products {
    padding: 1rem 0;
  }

  .product-card {
    margin: 2rem 0;
  }
</style>
