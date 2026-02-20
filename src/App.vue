<template>
  <div id="app-root">
    <div ref="cursorDot" class="custom-cursor-dot"></div>
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <Transition name="page-fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursorDot = ref(null)

const moveCursor = (e) => {
  if (cursorDot.value) {
    gsap.to(cursorDot.value, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,  
      ease: 'power2.out'
    })
  }
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
})
</script>

<style scoped>
#app-root {
  min-height: 100vh;
}
</style>
