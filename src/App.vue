<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";

import TheHeader from "./components/TheHeader.vue";
import HeroProducts from "./components/HeroProducts.vue";

import { useUserStore } from "./stores/userStore";
import { storeToRefs } from "pinia";
import { provide } from "vue";

const userStore = useUserStore();
const { name } = storeToRefs(userStore);
provide('user', name)

const message = "Välkommen till Häng På Kroken";

import type { Product } from "./types/interface";
import { useFetch } from "@vueuse/core";

const { data, error, isFetching } = useFetch<Product[]>(
  "https://fakestoreapi.com/products"
).json<Product[]>();

const route = useRoute();
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <p>home{{ $route.fullPath }}</p>
    <h1 v-if="route.path === '/'">{{ message }}</h1>

    <HeroProducts v-if="route.path === '/'" :products="data" />

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
