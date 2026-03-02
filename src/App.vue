<template>
  <div id="app-root">
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
</script>

<style scoped>
#app-root {
  min-height: 100vh;
}
</style>
