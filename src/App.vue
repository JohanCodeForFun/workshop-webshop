<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "./components/TheHeader.vue";
import HeroProducts from "./components/HeroProducts.vue";

import { useUserStore } from "./stores/userStore";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { name } = storeToRefs(userStore);

const message = "Välkommen till Häng På Kroken"

import type { Product } from "./types/interface";
import { useFetch } from "@vueuse/core";

  import { onMounted, watch } from "vue";


  const { data, error, isFetching } = useFetch<Product[]>(
    "https://fakestoreapi.com/products"
  ).json<Product[]>();

  watch(isFetching, (newVal, oldVal) => {
    if (newVal && !oldVal) {
      console.log({
        watch: "Loading started",
        "Loading state": isFetching.value,
      });
    } else if (!newVal && oldVal) {
      console.log({
        watch: "Loading complete",
        "Loading state": isFetching.value,
      });
      console.log(data.value);
    }
  });

  onMounted(() => {
    if (!isFetching.value) {
      console.log("onMounted: Loading started");
    } else {
      console.log("onMounted: Loading complete");
      console.log(data.value);
    }
  });


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
