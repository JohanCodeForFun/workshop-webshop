<script setup lang="ts">
import { RouterView } from "vue-router";

import TheHeader from "./components/TheHeader.vue";

// fetch('https://fakestoreapi.com/products')

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <main>
    <p>home{{ $route.fullPath }}</p>
    <h1>{{ message }}</h1>
    <div class="hero-products" v-if="data && data.length > 15">
      <div class="product-card">
        <img :src="data[15].image" width="300" height="auto" alt="" />
        <p>{{ data[15].title }}</p>
        <p>{{ data[15].description }}</p>
        <p>
          <span>
            Price: {{ data[5].price }}
            <button>Add to cart</button>
          </span>
        </p>
      </div>
      <div class="product-card">
        <img :src="data[2].image" width="300" height="auto" alt="" />
        <p>{{ data[2].title }}</p>
        <p>{{ data[2].description }}</p>
        <p>
          <span>
            Price: {{ data[5].price }}
            <button>Add to cart</button>
          </span>
        </p>
      </div>
      <div class="product-card">
        <img :src="data[5].image" width="300" height="auto" alt="" />
        <p>{{ data[5].title }}</p>
        <p>{{ data[5].description }}</p>
        <p>
          <span>
            Price: {{ data[5].price }}
            <button>Add to cart</button>
          </span>
        </p>
      </div>
    </div>
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
