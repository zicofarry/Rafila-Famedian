<template>
  <div class="works" @click="handleClick">
    <div class="works__layout">
      <!-- Left: Project Image/Video -->
      <div class="works__media">
        <Transition name="slide-fade" mode="out-in">
          <div class="works__media-inner" :key="currentIndex">
            <img
              v-if="currentProject.image"
              :src="currentProject.image"
              :alt="currentProject.name"
              class="works__image"
            />
            <div v-else class="works__placeholder">
              <span class="works__placeholder-text">{{ currentProject.name }}</span>
              <span class="works__placeholder-sub">Visual Preview</span>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Right: Project Details -->
      <div class="works__details">
        <Transition name="detail-fade" mode="out-in">
          <div class="works__details-inner" :key="currentIndex">
            <div class="works__number">
              {{ String(currentIndex + 1).padStart(3, '0') }}/{{ String(projects.length).padStart(3, '0') }}
            </div>

            <div class="works__info">
              <div class="works__category">{{ currentProject.category }}</div>
              <div class="works__name">for {{ currentProject.name }}</div>
            </div>

            <div class="works__year">{{ currentProject.year }}</div>

            <div class="works__credits">
              <div class="works__credits-label">{{ currentProject.credits }}</div>
            </div>

            <div class="works__description">
              <p>{{ currentProject.description }}</p>
            </div>

            <div class="works__description-extra" v-if="currentProject.descriptionExtra">
              <p>{{ currentProject.descriptionExtra }}</p>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Cursor indicators -->
    <!-- <div class="works__nav-hint works__nav-hint--left" :class="{ visible: showLeftHint }">
      ← Prev
    </div>
    <div class="works__nav-hint works__nav-hint--right" :class="{ visible: showRightHint }">
      Next →
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = [
  {
    name: 'Rimbun',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian\nReza Firdaus',
    description: 'Rimbun is a bakery and café brand rooted in the warmth of artisan bread-making. The visual identity draws from organic textures and earthy tones, reflecting the brand\'s commitment to natural ingredients and a welcoming atmosphere. Every design element, from the logotype to the packaging, is crafted to evoke a sense of comfort and authenticity.',
    descriptionExtra: 'The project encompassed brand strategy, logo design, packaging systems, environmental graphics, and social media templates. Working closely with the founders, we developed a visual language that bridges traditional craftsmanship with contemporary design sensibility.',
    image: null
  },
  {
    name: 'Tanirra',
    category: 'Visual Identity',
    year: 2026,
    credits: 'Rafila Famedian',
    description: 'A comprehensive visual identity system for Tanirra, a modern wellness brand focused on holistic self-care products. The design language balances minimalism with organic warmth.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Mandala',
    category: 'Vernacular Typeface',
    year: 2026,
    credits: 'Rafila Famedian',
    description: 'Mandala is a vernacular typeface project exploring the intersection of traditional Sundanese script elements with contemporary type design principles.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Bikasoga',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity system for Bikasoga, a cultural heritage brand celebrating traditional Sundanese textile patterns and craftsmanship.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Atklub',
    category: 'Social Media Kickstart',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Social media kickstart package for Atklub, establishing their digital presence with cohesive visual templates and content strategy.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Stiluso',
    category: 'Brand Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Complete brand identity development for Stiluso, a contemporary fashion label focusing on sustainable streetwear.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Lemarbel',
    category: 'Brand Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Brand identity for Lemarbel, a specialty marble and stone supplier. The design system reflects the material\'s natural elegance.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'The Underdog',
    category: 'Social Media Guideline',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Comprehensive social media guidelines for The Underdog, establishing consistent visual communication across all digital platforms.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Dualogue',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Dualogue, a collaborative design studio emphasizing dialogue-driven creative processes.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Umbira',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity development for Umbira, a botanical skincare line inspired by Indonesian herbal traditions.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Aloev',
    category: 'Environmental Design',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Environmental design project for Aloev, integrating brand identity elements into physical spaces and wayfinding systems.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Courtaste',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Courtaste, a premium food court concept combining diverse culinary experiences under one cohesive brand.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Bona',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity system for Bona, a lifestyle brand focused on mindful living and sustainable consumer goods.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Bru',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Bru, a specialty coffee roaster celebrating the craft of bean-to-cup coffee culture.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Cass up!',
    category: 'Event Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Event identity for Cass up!, a youth-driven music and cultural festival in Bandung.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'BFM 3.0',
    category: 'Event Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Event identity design for BFM 3.0, the third iteration of a creative industry forum and exhibition.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Zenki',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Zenki, a modern Japanese-inspired dining concept emphasizing minimalism and attention to detail.',
    descriptionExtra: null,
    image: null
  },
  {
    name: 'Tachi',
    category: 'Social Media Kickstart',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Social media kickstart for Tachi, building a strong digital foundation with branded templates and content direction.',
    descriptionExtra: null,
    image: null
  },
]

const currentIndex = ref(0)
const showLeftHint = ref(false)
const showRightHint = ref(false)

const currentProject = computed(() => projects[currentIndex.value])

onMounted(() => {
  if (route.query.project !== undefined) {
    const idx = parseInt(route.query.project)
    if (idx >= 0 && idx < projects.length) {
      currentIndex.value = idx
    }
  }
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})

const handleMouseMove = (e) => {
  const halfWidth = window.innerWidth / 2
  // Hints are always visible on their respective sides for infinite navigation
  showLeftHint.value = e.clientX < halfWidth
  showRightHint.value = e.clientX >= halfWidth
}

const handleClick = (e) => {
  const halfWidth = window.innerWidth / 2
  if (e.clientX < halfWidth) {
    // Loop back to end if at beginning
    currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
  } else if (e.clientX >= halfWidth) {
    // Loop back to beginning if at end
    currentIndex.value = (currentIndex.value + 1) % projects.length
  }
}
</script>

<style scoped>
.works {
  padding-top: var(--nav-height);
  min-height: 100vh;
  cursor: pointer;
  user-select: none;
}

.works__layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  min-height: calc(100vh - var(--nav-height));
}

.works__media {
  padding: 10px;
  padding-left: var(--page-padding-x);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.works__media-inner {
  width: 100%;
  height: calc(100vh - var(--nav-height) - 20px);
}

.works__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.works__placeholder {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.works__placeholder-text {
  font-size: var(--font-size-xl);
  color: #444;
  font-weight: 700;
}

.works__placeholder-sub {
  font-size: var(--font-size-sm);
  color: #555;
}

.works__details {
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
}

.works__details-inner {
  width: 100%;
}

.works__number {
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-weight: 500;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px dotted #ccc; /* Updated to dotted to match Index page */
}

.works__info {
  margin-bottom: 6px;
}

.works__category {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-black);
}

.works__name {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-black);
}

.works__year {
  font-size: var(--font-size-xs);
  font-weight: 700;
  color: var(--color-black);
  margin-bottom: 20px;
}

.works__credits {
  margin-bottom: 20px;
}

.works__credits-label {
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-weight: 600;
  white-space: pre-line;
  line-height: 1.6;
}

.works__description {
  margin-bottom: 16px;
}

.works__description p,
.works__description-extra p {
  font-size: var(--font-size-xs);
  color: var(--color-black);
  line-height: 1.7;
}

.works__description-extra {
  margin-bottom: 16px;
}

/* Navigation hints */
/* .works__nav-hint {
  position: fixed;
  bottom: 30px;
  font-size: var(--font-size-xs);
  color: var(--color-gray);
  opacity: 0;
  transition: opacity var(--transition-fast);
  pointer-events: none;
  z-index: 50;
}

.works__nav-hint.visible {
  opacity: 1;
}

.works__nav-hint--left {
  left: 30px;
}

.works__nav-hint--right {
  right: 30px;
} */

/* Slide fade transition for media (opacity only) */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.35s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/* Detail fade transition (opacity only) */
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: opacity 0.35s ease;
}

.detail-fade-enter-from,
.detail-fade-leave-to {
  opacity: 0;
}
</style>
