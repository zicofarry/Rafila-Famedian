<template>
  <div class="about page-container">
    <div class="about__content">
      <!-- Skills List -->
      <div class="about__skills">
        <div class="about__skill" v-for="(skill, index) in skills" :key="index">
          <span class="about__skill-number">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="about__skill-name">{{ skill }}</span>
        </div>
      </div>

      <!-- Portrait Photo -->
      <div class="about__photo">
        <img :src="portraitUrl" alt="Rafila Famedian" />
      </div>
    </div>

    <!-- Bio Section -->
    <div class="about__bio">
      <p class="about__bio-text">
        my name is rafila billy famedian. currently navigating my way through visual
        communication in bandung. for me, design is less about imposing a style and
        more about responding to narratives through a thoughtful, reflective
        process. i value the journey as much as the result, positioning myself as a
        collaborative partner who listens and contributes to every project's essential.
      </p>
      <p class="about__bio-text">
        my practice is centered around core disciplines. i help brands and individuals
        find their voice through graphic design and the development of distinct
        visual identity systems. i also find rhythm in editorial design, where content
        meets structure, and occasionally explore the craft of type design to give
        words a specific resonance. ultimately, i am here to provide creative
        direction. to connecting raw ideas into a finished, intentional vision.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = [
  'Graphic Design',
  'Visual Identity',
  'Editorial Design',
  'Type Design',
  'Creative Direction'
]

// Placeholder portrait — will be replaced with actual photo
const portraitUrl = ref('data:image/svg+xml,' + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="340" viewBox="0 0 260 340">
  <rect width="260" height="340" fill="#222"/>
  <circle cx="130" cy="120" r="55" fill="#444"/>
  <ellipse cx="130" cy="280" rx="75" ry="90" fill="#444"/>
  <text x="130" y="330" text-anchor="middle" fill="#888" font-family="Manrope, sans-serif" font-size="11">Portrait Photo</text>
</svg>
`))
</script>

<style scoped>
.about {
  padding-top: calc(var(--nav-height) + 50px);
}

.about__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

.about__skills {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 30%;
}

.about__skill {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.about__skill-number {
  font-size: var(--font-size-xs);
  color: var(--color-orange);
  font-weight: 500;
  vertical-align: super;
  position: relative;
  top: -8px;
}

.about__skill-name {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-black);
  line-height: 1.3;
}

.about__photo {
  width: 200px;
  flex-shrink: 0;
}

.about__photo img {
  width: 100%;
  height: auto;
  filter: grayscale(100%);
  object-fit: cover;
}

.about__bio {
  display: flex;
  gap: 60px;
  margin-top: 80px;
  padding-left: 30%;
  padding-right: 10%;
}

.about__bio-text {
  font-size: var(--font-size-sm);
  color: var(--color-black);
  line-height: 1.7;
  max-width: 420px;
}
</style>
