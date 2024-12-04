<script setup lang="ts">
import { useRoute } from "vue-router";
import HeroProducts from "../components/HeroProducts.vue";

const route = useRoute();

import type { Product } from "../types/interface";
import { useFetch } from "@vueuse/core";

const { data, error, isFetching } = useFetch<Product[]>(
  "https://fakestoreapi.com/products"
).json<Product[]>();
</script>

<template>
  <main>
    <div class="about">
    <h1>Utvald kollektion av bästsäljare</h1>

    <HeroProducts v-if="route.path === '/'" :products="data" />

  </div>
  </main>
</template>
