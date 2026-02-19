<template>
  <div class="landing">
    <!-- Hero section - large white space -->
    <div class="landing__hero"></div>

    <!-- Text section -->
    <div class="landing__text-section">
      <p class="landing__disclaimer">
        some mockup photographs are used for illustrative purpose only.
        i do not own the rights to these images, all copyrights belong to their
        respective creators.
      </p>
      <p class="landing__description">
        this is rafila famedian's visual archive. a recapitulation of selected processes
        and projects developed between 2025 and 2026. the collection functions as
        a technical documentation of my practice, focusing on the construction of
        graphic design, visual identity, and editorial systems.
      </p>
    </div>

    <!-- Experimental Visual Section -->
    <div class="landing__visual">
      <div class="landing__visual-canvas">
        <div class="blob blob--1"></div>
        <div class="blob blob--2"></div>
        <div class="blob blob--3"></div>
        <div class="blob blob--4"></div>
        <div class="blob blob--5"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.to('.blob--1', {
    x: '+=40', y: '+=30', scale: 1.15,
    duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
  gsap.to('.blob--2', {
    x: '-=50', y: '+=20', scale: 0.9,
    duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
  gsap.to('.blob--3', {
    x: '+=30', y: '-=40', scale: 1.1,
    duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
  gsap.to('.blob--4', {
    x: '-=35', y: '+=45', scale: 1.2,
    duration: 9, repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
  gsap.to('.blob--5', {
    x: '+=25', y: '-=30', scale: 0.85,
    duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut'
  })
})
</script>

<style scoped>
.landing {
  padding-top: var(--nav-height);
}

.landing__hero {
  height: 40vh;
}

.landing__text-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px var(--page-padding-x);
}

.landing__disclaimer {
  font-size: var(--font-size-xs);
  color: var(--color-gray);
  max-width: 280px;
  line-height: 1.5;
}

.landing__description {
  font-size: var(--font-size-sm);
  color: var(--color-black);
  max-width: 400px;
  line-height: 1.6;
  /* Align with "About" nav link */
  margin-left: calc(50vw - var(--content-offset));
  margin-right: 0;
}

/* Experimental Visual - Fluid Blobs */
.landing__visual {
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
}

.landing__visual-canvas {
  position: relative;
  width: 100%;
  height: 300px;
  background: var(--color-white);
  overflow: hidden;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.85;
}

.blob--1 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #b44dff 0%, #7a1fa0 40%, #5a0f8a 70%, transparent 100%);
  top: -30px;
  left: 20%;
}

.blob--2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #d76dff 0%, #9933cc 40%, #6b1f99 70%, transparent 100%);
  top: 20px;
  left: 40%;
}

.blob--3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #e88dff 0%, #aa44dd 40%, #8822bb 70%, transparent 100%);
  top: -60px;
  left: 60%;
}

.blob--4 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, #c055ff 0%, #8833bb 40%, #661199 70%, transparent 100%);
  top: 40px;
  left: 10%;
}

.blob--5 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, #dd77ff 0%, #9944cc 40%, #7722aa 70%, transparent 100%);
  top: -20px;
  left: 75%;
}
</style>
