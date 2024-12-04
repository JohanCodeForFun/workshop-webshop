<script setup lang="ts">
defineProps<{
  user: string
}>();

import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { name } = storeToRefs(userStore);

function promptForName() {
  const userName = prompt('Var vänlig ange login namn')
  if (userName) {
    userStore.setName(userName)
  }
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-links">
      <RouterLink to="/">Hem</RouterLink>
      <RouterLink to="/dam">Dam</RouterLink>
      <RouterLink to="/herr">Herr</RouterLink>
      <RouterLink to="/smycken">Smycken</RouterLink>
    </div>
    <span v-if="user">
      Välkommen, {{ user }}!
    </span>
    <span v-else>
      <button @click="promptForName" class="inline-button">Login</button>
    </span>
    <button class="inline-button">kundkorg (0)</button>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.inline-button {
  display: inline-block;
  margin-left: 1rem;
}
</style>