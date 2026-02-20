<template>
  <div class="about page-container">
    <div class="about__content">
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

</script>

<style scoped>
.about {
  padding-top: calc(var(--nav-height) + 80px);
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
  padding-left: calc(50vw - var(--content-offset));
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
  width: 168px;
  flex-shrink: 0;
}

.about__photo img {
  width: 100%;
  aspect-ratio: 3 / 4; /* Portrait 3x4 */
  object-fit: cover;
  object-position: 40% center; /* Adjust this percentage to shift the photo left/right */
}

.about__bio {
  display: flex;
  flex-direction: column; /* Stacked paragraphs */
  gap: 20px; /* Adjusted gap for vertical stack */
  margin-top: 30px;
  padding-left: calc(50vw - var(--content-offset));
  padding-right: 10%;
}

.about__bio-text {
  font-size: var(--font-size-xs);
  color: var(--color-black);
  line-height: 1.3;
  max-width: 390px;
}

@media (max-width: 768px) {
  .about {
    padding-top: 40px;
  }
  
  .about__content {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  
  .about__skills {
    padding-left: 0;
    width: 100%;
    align-items: center;
  }
  
  .about__skill {
    justify-content: center;
  }
  
  .about__skill-name {
    font-size: var(--font-size-xl);
  }
  
  .about__photo {
    width: 140px;
    order: -1; 
  }
  
  .about__bio {
    padding-left: 0;
    padding-right: 0;
    margin-top: 40px;
    text-align: center;
    align-items: center;
  }
  
  .about__bio-text {
    max-width: 100%;
    font-size: var(--font-size-sm);
  }
}
</style>
