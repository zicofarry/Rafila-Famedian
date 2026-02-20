<template>
  <nav class="navbar" :class="{ 'navbar--open': isMenuOpen }">
    <router-link to="/" class="navbar__logo" @click="closeMenu">
      <span class="navbar__logo-desktop">REPOSITORY. ARCHIVE. 25-26</span>
      <span class="navbar__logo-mobile">REPOSITORY</span>
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
        <div class="navbar__mobile-copyright">
          ©2026 Rafila Famedian
        </div>
      </div>
    </div>

    <div class="navbar__copyright">
      ©2026 Rafila Famedian
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // Prevent scrolling when menu is open
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 20px var(--page-padding-x) 0 var(--page-padding-x);
  background-color: var(--color-white);
  height: var(--nav-height);
  transition: background-color 0.3s ease;
}

.navbar__logo { justify-self: start; }
.navbar__links { justify-self: center; margin-left: 100px; }
.navbar__copyright { justify-self: end; }

.navbar__logo {
  font-family: 'Alte Haas Grotesk', sans-serif;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-pink);
  text-transform: uppercase;
  white-space: nowrap;
  transition: opacity var(--transition-fast);
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

/* Hamburger Styles */
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
  display: flex;
  align-items: center;
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
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-weight: 400;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 0 var(--page-padding-x);
    background-color: var(--color-white);
  }

  .navbar__logo-desktop { display: none; }
  .navbar__logo-mobile { display: inline; font-size: 20px; }
  
  .navbar__toggle {
    display: block;
  }

  .navbar__links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    flex-direction: column;
    justify-content: center;
    gap: 0;
    margin: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    padding: 80px var(--page-padding-x);
  }

  .navbar__links--open {
    opacity: 1;
    visibility: visible;
  }

  .navbar__links-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    margin-top: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    opacity: 0;
    transition: opacity 0.5s ease;
    transition-delay: 0.4s;
  }

  .navbar__links--open .navbar__mobile-footer {
    opacity: 1;
  }

  .navbar__mobile-copyright {
    font-size: 11px;
    color: var(--color-gray);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .navbar__copyright {
    display: none;
  }
}
</style>
