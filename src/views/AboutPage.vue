<template>
  <div class="about">
    <div class="about__grid">
      <!-- Skills List -->
      <div class="about__skills">
        <div class="about__skill" v-for="(skill, index) in skills" :key="index">
          <span class="about__skill-number">{{ index + 1 }}</span>
          <span class="about__skill-name">{{ skill }}</span>
        </div>
      </div>

      <!-- Portrait Photo -->
      <div class="about__photo">
        <img src="/profile.png" alt="Rafila Famedian" />
      </div>

      <!-- Bio Section -->
      <div class="about__bio">
        <p class="about__bio-text">
          my name is rafila billy famedian. practicing visual communication based in bandung,
          indonesia. my approach centers on responding to narratives through a systematic,
          humanistic and reflective process. i position myself as a collaborative partner, who
          prioritizing value of the architecture of a project as much as its final output.
        </p>
        <p class="about__bio-text">
          my practice is centered around core disciplines to helping brands and individuals find their
          voice through distinct visual identity systems. i find rhythm in editorial design where content
          meets structure and occasionally explore type design to give words a specific resonance.
          ultimately, my role is to provide creative direction, to translating raw ideas into an intentional
          vision.
        </p>
      </div>
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

</script>

<style scoped>
.about {
  padding-top: calc(var(--nav-height) + 80px);
  padding-left: var(--grid-margin);
  padding-right: var(--grid-margin);
  min-height: 100vh;
}

.about__grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: 0 var(--grid-gutter);
}

.about__skills {
  grid-column: 6 / 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.about__skill {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.about__skill-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border: 1px solid var(--color-pink);
  border-radius: 100%;
  font-size: 9px;
  color: var(--color-pink);
  flex-shrink: 0;
  position: relative;
  top: -12px;
}

.about__skill-name {
  font-size: var(--font-size-2xl);
  font-weight: 500;
  color: var(--color-black);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.about__photo {
  grid-column: 11 / 13;
  grid-row: 1;
  width: 100%;
}

.about__photo img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: 40% center;
}

.about__bio {
  grid-column: 6 / 10;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

.about__bio-text {
  font-size: var(--font-size-xs);
  color: var(--color-black);
  line-height: 1.3;
  max-width: 390px;
}

/* ============================================
   TABLET (768px – 1279px)
   ============================================ */
@media (max-width: 1279px) and (min-width: 768px) {
  .about {
    padding-top: calc(var(--nav-height) + 60px);
  }

  .about__skills {
    grid-column: 3 / 7;
  }

  .about__photo {
    grid-column: 7 / 9;
  }

  .about__bio {
    grid-column: 3 / 7;
  }

  .about__skill-name {
    font-size: var(--font-size-xl);
  }
}

/* ============================================
   MOBILE (<768px)
   ============================================ */
@media (max-width: 767px) {
  .about {
    padding-top: calc(var(--nav-height) + 40px);
  }

  .about__grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .about__photo {
    width: 140px;
    order: -1;
  }

  .about__skills {
    width: 100%;
    align-items: center;
  }

  .about__skill {
    justify-content: center;
  }

  .about__skill-name {
    font-size: var(--font-size-xl);
  }

  .about__bio {
    margin-top: 10px;
    text-align: center;
    align-items: center;
  }

  .about__bio-text {
    max-width: 100%;
    font-size: var(--font-size-sm);
  }
}
</style>
