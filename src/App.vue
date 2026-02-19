<template>
  <div id="app-root">
    <Navbar />
    <router-view v-slot="{ Component, route }">
      <Transition name="page-fade" mode="out-in" @before-enter="onBeforeEnter" @after-enter="onAfterEnter" @before-leave="onBeforeLeave">
        <component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import gsap from 'gsap'

const onBeforeEnter = (el) => {
  gsap.set(el, { opacity: 0, y: 12 })
}

const onAfterEnter = (el) => {
  gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
}

const onBeforeLeave = (el) => {
  gsap.to(el, { opacity: 0, y: -12, duration: 0.4, ease: 'power2.in' })
}
</script>

<style scoped>
#app-root {
  min-height: 100vh;
}
</style>
