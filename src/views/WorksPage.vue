<template>
  <div class="works" @click="handleClick">
    <!-- [PAUSE] cursor follower -->
    <div
      v-show="isPaused"
      class="works__pause-cursor"
      :style="{ left: pauseCursorX + 'px', top: pauseCursorY + 'px' }"
    >
      [PAUSE]
    </div>

    <div class="works__layout">
      <!-- Left: Project Image/Video -->
      <div
        class="works__media"
        :class="{ 'cursor-pause': isPaused }"
        @mouseenter="pauseSlideshow"
        @mouseleave="resumeSlideshow"
        @mousemove="trackPauseCursor"
      >
        <Transition name="slide-fade" mode="out-in">
          <div class="works__media-inner" :key="currentIndex + '-' + currentMediaIndex">
            <!-- Video media -->
            <video
              v-if="currentMediaItem && currentMediaItem.type === 'video'"
              ref="videoRef"
              :src="currentMediaItem.src"
              autoplay
              muted
              playsinline
              class="works__video"
              @ended="onVideoEnded"
            ></video>
            <!-- Image media -->
            <img
              v-else-if="currentMediaItem && currentMediaItem.type === 'image'"
              :src="currentMediaItem.src"
              :alt="currentProject.name"
              class="works__image"
            />
            <!-- No media placeholder -->
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const projects = [
  {
    name: 'Rimbun',
    category: 'Visual Identity',
    year: 2026,
    credits: 'Rafila Famedian\nReza Firdaus',
    description: 'Rimbun is a bakery and café brand rooted in the warmth of artisan bread-making. The visual identity draws from organic textures and earthy tones, reflecting the brand\'s commitment to natural ingredients and a welcoming atmosphere. Every design element, from the logotype to the packaging, is crafted to evoke a sense of comfort and authenticity.',
    descriptionExtra: 'The project encompassed brand strategy, logo design, packaging systems, environmental graphics, and social media templates. Working closely with the founders, we developed a visual language that bridges traditional craftsmanship with contemporary design sensibility.',
    media: [
      { type: 'image', src: '/Works/Rimbun/01.png' },
      { type: 'image', src: '/Works/Rimbun/02.png' },
      { type: 'image', src: '/Works/Rimbun/03.png' },
      { type: 'image', src: '/Works/Rimbun/04.png' },
      { type: 'image', src: '/Works/Rimbun/05.png' },
      { type: 'image', src: '/Works/Rimbun/06.png' },
    ]
  },
  {
    name: 'Tanirra',
    category: 'Visual Identity',
    year: 2026,
    credits: 'Rafila Famedian',
    description: 'A comprehensive visual identity system for Tanirra, a modern wellness brand focused on holistic self-care products. The design language balances minimalism with organic warmth.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Tanirra/1.png' },
      { type: 'image', src: '/Works/Tanirra/2.png' },
      { type: 'image', src: '/Works/Tanirra/3.png' },
      { type: 'image', src: '/Works/Tanirra/4.png' },
      { type: 'image', src: '/Works/Tanirra/5.png' },
      { type: 'image', src: '/Works/Tanirra/6.png' },
    ]
  },
  {
    name: 'Mandala',
    category: 'Vernacular Typeface',
    year: 2026,
    credits: 'Rafila Famedian',
    description: 'Mandala is a vernacular typeface project exploring the intersection of traditional Sundanese script elements with contemporary type design principles.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Mandala/1.png' },
      { type: 'image', src: '/Works/Mandala/2.png' },
      { type: 'image', src: '/Works/Mandala/3.png' },
      { type: 'image', src: '/Works/Mandala/4.png' },
      { type: 'image', src: '/Works/Mandala/5.png' },
    ]
  },
  {
    name: 'Aloev',
    category: 'Environmental Design',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Environmental design project for Aloev, integrating brand identity elements into physical spaces and wayfinding systems.',
    descriptionExtra: null,
    media: [
      { type: 'video', src: '/Works/Aloev/1.mov' },
    ]
  },
  {
    name: 'Bikasoga',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity system for Bikasoga, a cultural heritage brand celebrating traditional Sundanese textile patterns and craftsmanship.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Bikasoga/1.png' },
      { type: 'image', src: '/Works/Bikasoga/2.png' },
      { type: 'image', src: '/Works/Bikasoga/3.png' },
      { type: 'image', src: '/Works/Bikasoga/4.png' },
      { type: 'image', src: '/Works/Bikasoga/5.png' },
      { type: 'image', src: '/Works/Bikasoga/6.png' },
      { type: 'image', src: '/Works/Bikasoga/7.png' },
    ]
  },
  {
    name: 'Atklub',
    category: 'Social Media Kickstart',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Social media kickstart package for Atklub, establishing their digital presence with cohesive visual templates and content strategy.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Atklub/1.png' },
      { type: 'image', src: '/Works/Atklub/2.png' },
      { type: 'image', src: '/Works/Atklub/3.png' },
      { type: 'image', src: '/Works/Atklub/4.png' },
    ]
  },
  {
    name: 'Stiluso',
    category: 'Brand Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Complete brand identity development for Stiluso, a contemporary fashion label focusing on sustainable streetwear.',
    descriptionExtra: null,
    media: [
      { type: 'video', src: '/Works/Stiluso/01.mov' },
    ]
  },
  {
    name: 'Lemarbel',
    category: 'Brand Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Brand identity for Lemarbel, a specialty marble and stone supplier. The design system reflects the material\'s natural elegance.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Lemarbel/1.png' },
      { type: 'image', src: '/Works/Lemarbel/2.png' },
      { type: 'image', src: '/Works/Lemarbel/3.png' },
      { type: 'image', src: '/Works/Lemarbel/4.png' },
      { type: 'image', src: '/Works/Lemarbel/5.png' },
      { type: 'image', src: '/Works/Lemarbel/6.png' },
    ]
  },
  {
    name: 'Cass Up',
    category: 'Event Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Event identity for Cass Up, a youth-driven music and cultural festival in Bandung.',
    descriptionExtra: null,
    media: [
      { type: 'video', src: '/Works/Cass Up!/01.mov' },
    ]
  },
  {
    name: 'Umbira',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity development for Umbira, a botanical skincare line inspired by Indonesian herbal traditions.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Umbira/1.png' },
      { type: 'image', src: '/Works/Umbira/2.png' },
      { type: 'image', src: '/Works/Umbira/3.png' },
      { type: 'image', src: '/Works/Umbira/4.png' },
    ]
  },
  {
    name: 'Dualoque',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Dualoque, a collaborative design studio emphasizing dialogue-driven creative processes.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Dualoque/1.png' },
      { type: 'image', src: '/Works/Dualoque/2.png' },
      { type: 'image', src: '/Works/Dualoque/3.png' },
      { type: 'image', src: '/Works/Dualoque/4.png' },
    ]
  },
  {
    name: 'Bona',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity system for Bona, a lifestyle brand focused on mindful living and sustainable consumer goods.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Bona/1.png' },
      { type: 'image', src: '/Works/Bona/2.png' },
      { type: 'image', src: '/Works/Bona/3.png' },
      { type: 'image', src: '/Works/Bona/4.png' },
      { type: 'image', src: '/Works/Bona/5.png' },
    ]
  },
  {
    name: 'The Underdog Podcast',
    category: 'Social Media Guideline',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Comprehensive social media guidelines for The Underdog Podcast, establishing consistent visual communication across all digital platforms.',
    descriptionExtra: null,
    media: [
      { type: 'video', src: '/Works/The Underdog/01.mov' },
    ]
  },
  {
    name: 'BFM 3.0',
    category: 'Event Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Event identity design for BFM 3.0, the third iteration of a creative industry forum and exhibition.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/BFM 3.0/1.png' },
    ]
  },
  {
    name: 'Bru',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Bru, a specialty coffee roaster celebrating the craft of bean-to-cup coffee culture.',
    descriptionExtra: null,
    media: []
  },
  {
    name: 'Zenki',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Zenki, a modern Japanese-inspired dining concept emphasizing minimalism and attention to detail.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Zenki/1.png' },
      { type: 'image', src: '/Works/Zenki/2.png' },
      { type: 'image', src: '/Works/Zenki/3.png' },
      { type: 'image', src: '/Works/Zenki/4.png' },
      { type: 'image', src: '/Works/Zenki/5.png' },
    ]
  },
  {
    name: 'Courtaste',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Visual identity for Courtaste, a premium food court concept combining diverse culinary experiences under one cohesive brand.',
    descriptionExtra: null,
    media: []
  },
  {
    name: 'Tachi',
    category: 'Social Media Kickstart',
    year: 2025,
    credits: 'Rafila Famedian',
    description: 'Social media kickstart for Tachi, building a strong digital foundation with branded templates and content direction.',
    descriptionExtra: null,
    media: [
      { type: 'image', src: '/Works/Tachi/01.png' },
    ]
  },
]

const getInitialIndex = () => {
  if (route.query.project !== undefined) {
    const idx = parseInt(route.query.project)
    if (idx >= 0 && idx < projects.length) {
      return idx
    }
  }
  return 0
}

const currentIndex = ref(getInitialIndex())
const currentMediaIndex = ref(0)
const showLeftHint = ref(false)
const showRightHint = ref(false)
const isPaused = ref(false)
const videoRef = ref(null)
const pauseCursorX = ref(0)
const pauseCursorY = ref(0)
let imageTimer = null

const currentProject = computed(() => projects[currentIndex.value])
const currentMediaItem = computed(() => {
  const media = currentProject.value.media
  if (!media || media.length === 0) return null
  return media[currentMediaIndex.value] || null
})

const startImageTimer = () => {
  clearImageTimer()
  const media = currentProject.value.media
  if (!media || media.length === 0) return
  const item = media[currentMediaIndex.value]
  if (item && item.type === 'image' && media.length > 1) {
    imageTimer = setTimeout(() => {
      currentMediaIndex.value = (currentMediaIndex.value + 1) % media.length
      startImageTimer()
    }, 3000)
  }
}

const clearImageTimer = () => {
  if (imageTimer) {
    clearTimeout(imageTimer)
    imageTimer = null
  }
}

const onVideoEnded = () => {
  const media = currentProject.value.media
  if (media && media.length > 1) {
    currentMediaIndex.value = (currentMediaIndex.value + 1) % media.length
  }
}

const pauseSlideshow = () => {
  isPaused.value = true
  clearImageTimer()
  if (videoRef.value) {
    videoRef.value.pause()
  }
}

const resumeSlideshow = () => {
  isPaused.value = false
  if (videoRef.value) {
    videoRef.value.play()
  }
  startImageTimer()
}

const trackPauseCursor = (e) => {
  pauseCursorX.value = e.clientX
  pauseCursorY.value = e.clientY
}

// Watch for project changes to reset media index and timer
watch(currentIndex, () => {
  currentMediaIndex.value = 0
  clearImageTimer()
  startImageTimer()
})

// Watch for media index changes to restart timer on image items
watch(currentMediaIndex, () => {
  const item = currentMediaItem.value
  if (item && item.type === 'image') {
    // Timer already managed by startImageTimer
  }
})

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  startImageTimer()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  clearImageTimer()
})

const handleMouseMove = (e) => {
  const halfWidth = window.innerWidth / 2
  showLeftHint.value = e.clientX < halfWidth
  showRightHint.value = e.clientX >= halfWidth
}

const handleClick = (e) => {
  const halfWidth = window.innerWidth / 2
  if (e.clientX < halfWidth) {
    currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
  } else if (e.clientX >= halfWidth) {
    currentIndex.value = (currentIndex.value + 1) % projects.length
  }
}
</script>

<style scoped>
.works {
  padding-top: calc(var(--nav-height) + 50px);
  min-height: 100vh;
  cursor: pointer;
  user-select: none;
}

.works__pause-cursor {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  font-family: 'Alte Haas Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: var(--color-pink);
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.works__layout {
  display: grid;
  grid-template-columns: 3.3fr 1fr;
  min-height: calc(100vh - (var(--nav-height) + 50px));
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
}

.works__image {
  width: 100%;
  height: auto;
  display: block;
}

.works__video {
  width: 100%;
  height: auto;
  display: block;
}

.works__placeholder {
  width: 100%;
  height: 93%;
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
  border-bottom: 2px dotted #ccc;
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.35s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: opacity 0.35s ease;
}

.detail-fade-enter-from,
.detail-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .works {
    padding-top: 40px;
  }
  
  .works__layout {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-bottom: 60px;
  }
  
  .works__media {
    padding-left: var(--page-padding-x);
    padding-right: var(--page-padding-x);
    justify-content: center;
  }
  
  .works__media-inner {
    height: 45vh; 
  }
  
  .works__details {
    padding: 30px var(--page-padding-x);
  }
  
  .works__number {
    margin-bottom: 30px;
  }
  
  .works__year, .works__credits {
    margin-bottom: 25px;
  }
  
  .works__name {
    font-size: var(--font-size-lg);
  }
}
</style>
