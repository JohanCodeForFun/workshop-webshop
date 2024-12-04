<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { Product } from '@/types/interface';

const { data, error, isFetching } = useFetch<Product[]>(
  "https://fakestoreapi.com/products"
).json<Product[]>();

const route = useRoute();

const filteredProducts = computed(() => {
  if (!data.value) return [];

  switch (route.path) {
    case '/dam':
      return data.value.filter(product => product.category === "women's clothing");
    case '/herr':
      return data.value.filter(product => product.category === "men's clothing");
    case '/smycken':
      return data.value.filter(product => product.category === "jewelery");
    default:
      return data.value;
  }
});
</script>

<template>
  <div class="hero-products">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <img :src="product.image" width="300" height="auto" alt="" />
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <p>
          <span>
            Price: {{ product.price }}
            <button>Add to cart</button>
          </span>
        </p>
      </div>
    </div>
</template>