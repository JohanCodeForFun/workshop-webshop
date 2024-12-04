<template>
  <nav class="navbar">
    <div class="nav-links">
      <RouterLink to="/">Hem</RouterLink>
      <RouterLink to="/dam">Dam</RouterLink>
      <RouterLink to="/herr">Herr</RouterLink>
      <RouterLink to="/smycken">Smycken</RouterLink>
    </div>
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