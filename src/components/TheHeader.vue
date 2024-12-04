<script setup lang="ts">
import TheNavbar from './TheNavbar.vue';

defineProps<{
  user: string
}>()
</script>

<template>
  <TheNavbar :user="user"/>
</template>