<script setup lang="ts">
import { defineProps } from 'vue';
import type { Product } from '@/types/interface';

const props = defineProps<{
  products: Product[] | null;
}>();
</script>

<template>
  <div class="hero-products" v-if="props.products && props.products.length > 15">
      <div class="product-card">
        <img :src="props.products[15].image" width="300" height="auto" alt="" />
        <p>{{ props.products[15].title }}</p>
        <p>{{ props.products[15].description }}</p>
        <p>
          <span>
            Price: {{ props.products[5].price }}
            <button>Add to cart</button>
          </span>
        </p>
      </div>
      <div class="product-card">
        <img :src="props.products[2].image" width="300" height="auto" alt="" />
        <p>{{ props.products[2].title }}</p>
        <p>{{ props.products[2].description }}</p>
        <p>
          <span>
            Price: {{ props.products[5].price }}
            <button>Add to cart</button>
          </span>
        </p>
      </div>
      <div class="product-card">
        <img :src="props.products[5].image" width="300" height="auto" alt="" />
        <p>{{ props.products[5].title }}</p>
        <p>{{ props.products[5].description }}</p>
        <p>
          <span>
            Price: {{ props.products[5].price }}
            <button>Add to cart</button>
          </span>
        </p>
      </div>
    </div>
</template>