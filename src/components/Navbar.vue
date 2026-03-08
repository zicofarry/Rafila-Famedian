<template>
  <nav class="navbar" :class="{ 'navbar--open': isMenuOpen }">
    <router-link to="/" class="navbar__logo" @click="closeMenu">
      <span class="navbar__logo-desktop">ARCHIVE / REPOSITORY<br><span class="navbar__logo-year">25 — 26</span></span>
      <img class="navbar__logo-mobile" src="/rafila.svg" alt="Rafila Famedian" />
    </router-link>

    <!-- Mobile Toggle -->
    <button class="navbar__toggle" @click="toggleMenu" :class="{ 'navbar__toggle--active': isMenuOpen }">
      <div class="hamburger">
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
        <span class="hamburger__line"></span>
      </div>
    </button>

    <div class="navbar__links" :class="{ 'navbar__links--open': isMenuOpen }">
      <div class="navbar__links-container">
        <router-link to="/about" class="navbar__link" :class="{ active: $route.path === '/about' }" @click="closeMenu" style="--i: 1">About</router-link>
        <router-link to="/index" class="navbar__link" :class="{ active: $route.path === '/index' }" @click="closeMenu" style="--i: 2">Index</router-link>
        <router-link to="/works" class="navbar__link" :class="{ active: $route.path === '/works' }" @click="closeMenu" style="--i: 3">Works</router-link>
        <router-link to="/contact" class="navbar__link" :class="{ active: $route.path === '/contact' }" @click="closeMenu" style="--i: 4">Contact</router-link>
      </div>

      <div class="navbar__mobile-footer" v-if="isMenuOpen">
        <div class="navbar__mobile-copyright">©2026 Rafila Famedian</div>
      </div>
    </div>

    <div class="navbar__copyright">©2026 Rafila Famedian</div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* ============================================
   DESKTOP (≥1280px): 12-column grid navbar
   ============================================ */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: 0 var(--grid-gutter);
  align-items: start;
  padding: 35px var(--grid-margin) 0 var(--grid-margin);
  background-color: var(--color-white);
  height: var(--nav-height);
}

.navbar__logo {
  grid-column: 1 / 5;
  font-family: 'Alte Haas Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-pink);
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 1;
}

.navbar__logo-year {
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.navbar__logo-mobile { display: none; }

.navbar__toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 10px;
}

.hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger__line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-pink);
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

.navbar__toggle--active .hamburger__line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.navbar__toggle--active .hamburger__line:nth-child(2) {
  opacity: 0;
}
.navbar__toggle--active .hamburger__line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.navbar__links {
  grid-column: 6 / 10;
  display: flex;
  align-items: flex-start;
}

.navbar__links-container {
  display: flex;
  gap: 32px;
}

.navbar__link {
  font-size: var(--font-size-base);
  font-weight: 730;
  color: var(--color-black);
  transition: color var(--transition-fast);
}

.navbar__link:hover, .navbar__link.active {
  color: var(--color-pink);
}

.navbar__copyright {
  grid-column: 11 / 13;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-weight: 400;
  white-space: nowrap;
  justify-self: end;
}

.navbar__mobile-footer { display: none; }

/* ============================================
   TABLET + MOBILE (<1280px)
   ============================================ */
@media (max-width: 1279px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 var(--grid-margin);
    background-color: var(--color-white);
  }

  .navbar__logo-desktop { display: none; }
  .navbar__logo-mobile {
    display: block;
    height: 28px;
    width: auto;
  }

  .navbar__toggle { display: block; }

  .navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    background-color: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 80px var(--grid-margin);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
  }

  .navbar__links--open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .navbar__links-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    width: 100%;
  }

  .navbar__link {
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.4s ease;
    transition-delay: calc(var(--i) * 0.08s);
  }

  .navbar__links--open .navbar__link {
    opacity: 1;
    transform: translateY(0);
  }

  .navbar__mobile-footer {
    display: block;
    margin-top: auto;
    width: 100%;
  }

  .navbar__mobile-copyright {
    font-size: 11px;
    color: var(--color-gray);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .navbar__copyright { display: none; }
}
</style>
