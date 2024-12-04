<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute() 

const path = computed(() => {
  route.name === 'smycken' ? 'smycken' : route.name
})
</script>

<template>
  <div class="product">
    <h1>Utvald kollektion av {{ $route.name }} {{ path }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .product {
    display: flex;
    align-items: center;
  }
}
</style>
