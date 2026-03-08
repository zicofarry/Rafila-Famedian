<template>
  <div class="landing">
    <!-- Hero section - large white space -->
    <div class="landing__hero"></div>

    <!-- Text section using 12-column grid -->
    <div class="landing__text-section">
      <p class="landing__disclaimer">
        external mockups and visual assets are utilized for simulation purposes. all rights and
        copyrights belong to their respective creators.
      </p>
      <p class="landing__description">
        this is rafila famedian's visual archive. a recapitulation of selected processes and projects
        developed between 2025 and 2026. the collection functions as technical documentation of
        my practice, focusing on the core disciplines of graphic design, visual identity, and editorial
        systems.
      </p>
    </div>

    <!-- Video Background Loop -->
    <div class="landing__visual">
      <video autoplay loop muted playsinline class="landing__video">
        <source src="/loop.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Video handles its own autoplay
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
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: 0 var(--grid-gutter);
  padding: 30px var(--grid-margin);
}

.landing__disclaimer {
  grid-column: 1 / 5;
  font-size: var(--font-size-xs);
  color: var(--color-gray);
  line-height: 1.5;
}

.landing__description {
  grid-column: 6 / 10;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  line-height: 1.6;
}

/* Video Visual */
.landing__visual {
  position: fixed;
  top: 70vh;
  left: 0;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  z-index: -1; 
}

.landing__video {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

/* ============================================
   TABLET (768px – 1279px)
   ============================================ */
@media (max-width: 1279px) and (min-width: 768px) {
  .landing__hero {
    height: 30vh;
  }

  .landing__disclaimer {
    grid-column: 1 / 4;
  }

  .landing__description {
    grid-column: 4 / 9;
  }

  .landing__visual {
    top: auto;
    bottom: 0;
    height: 45vh;
  }
}

/* ============================================
   MOBILE (<768px)
   ============================================ */
@media (max-width: 767px) {
  .landing {
    padding-top: 20px;
  }
  
  .landing__hero {
    height: 20vh;
  }
  
  .landing__text-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px var(--grid-margin);
  }
  
  .landing__disclaimer, .landing__description {
    max-width: 100%;
    text-align: left;
  }

  .landing__description {
    font-size: var(--font-size-base);
  }

  .landing__visual {
    top: auto;
    bottom: 0;
    height: 35vh;
  }
}
</style>
