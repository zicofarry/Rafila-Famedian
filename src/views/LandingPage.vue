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
  position: relative; /* Required for absolute child */
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
  /* Align with "About" nav link using absolute positioning to avoid flex gap issues */
  position: absolute;
  top: 30px; /* Aligns with padding top */
  left: calc(50vw - var(--content-offset));
  
  margin-left: 110px; 
  
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;
}

/* Video Visual */
.landing__visual {
  position: fixed; /* Fixed to cover bottom or specific area */
  top: 70vh; /* Start halfway down the screen */
  left: 0;
  width: 100%;
  height: 30vh; /* Cover the remaining 30% */
  overflow: hidden;
  z-index: -1; 
}

.landing__video {
  width: 100%;
  height: 100%;
  object-fit: fill; /* Forces video to stretch/squash to fill the area */
  display: block;
}
</style>
