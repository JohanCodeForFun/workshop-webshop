<script setup lang="ts">
import { RouterView } from "vue-router";


import TheHeader from "./components/TheHeader.vue";
import HeroProducts from "./components/HeroProducts.vue";

import { useUserStore } from "./stores/userStore";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { name } = storeToRefs(userStore);

// fetch('https://fakestoreapi.com/products')


</script>

<template>
  <header>
    <TheHeader :user="name"/>
  </header>

  <main>
    <p>home{{ $route.fullPath }}</p>
    <h1>{{ message }}</h1>

    <HeroProducts :products="data"/>
    
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
