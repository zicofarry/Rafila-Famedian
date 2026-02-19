<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__logo">
      REPOSITORY. ARCHIVE. 25-26
    </router-link>

    <div class="navbar__links">
      <router-link to="/about" class="navbar__link" :class="{ active: $route.path === '/about' }">About</router-link>
      <router-link to="/index" class="navbar__link" :class="{ active: $route.path === '/index' }">Index</router-link>
      <router-link to="/works" class="navbar__link" :class="{ active: $route.path === '/works' }">Works</router-link>
      <router-link to="/contact" class="navbar__link" :class="{ active: $route.path === '/contact' }">Contact</router-link>
    </div>

    <div class="navbar__copyright">
      ©2026 Rafila Famedian
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px var(--page-padding-x);
  background-color: var(--color-white);
  height: var(--nav-height);
}

.navbar__logo {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: var(--color-pink);
  text-transform: uppercase;
  white-space: nowrap;
  transition: opacity var(--transition-fast);
}

.navbar__logo:hover {
  opacity: 0.8;
}

.navbar__links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.navbar__link {
  font-size: var(--font-size-base);
  font-weight: 500;
  color: var(--color-black);
  transition: color var(--transition-fast);
  position: relative;
}

.navbar__link:hover {
  color: var(--color-orange);
}

.navbar__link.active {
  color: var(--color-orange);
}

.navbar__copyright {
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-weight: 400;
  white-space: nowrap;
}
</style>
