<script setup lang="ts">
import type { Product } from '@/types/interface';

</script>

<template>
  <div v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" width="300" height="auto" :alt="product.title" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Rating: {{ product.rating.rate }} ({{ product.rating.count }} reviews)</p>
  </div>
  <div v-else>
    <p>Error loading product details.</p>
  </div>
</template>