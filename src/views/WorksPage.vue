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

            <div class="works__keywords" v-if="currentProject.keywords">
              <p>{{ currentProject.keywords }}</p>
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
    description: 'responding to the need for a sanctuary within a dense urban landscape, this project explores a visual identity rooted in the brand\'s organic essence. the application of bread fiber textures as a primary key visual aims to establish a grounded, homey atmosphere. the resulting system serves as a visual \'pause\', aligning material inspired elements with the bakery\'s core philosophy.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Packaging Design, Environmental Design',
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
    credits: 'Rafila Famedian\nReza Firdaus',
    description: 'this visual identity attempts to translate the ethereal qualities of balinese floral scents into a tangible brand system. by utilizing heritage inspired color palettes and flower centric key visuals, the design maintains a strong sense of place and tradition. the project focuses on inheriting cultural nuances while positioning the fragrance within a modern, inherited tone and manner.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Packaging Design, Editorial Design',
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
    credits: 'Rafila Famedian\nIgnatius Soekarno',
    description: 'derived from the spiritual philosophies and protective symbolism of balinese gringsing fabric, this project explores the construction of a modern vernacular typeface. the design respects the original motifs while adapting their geometry for contemporary editorial use. the intervention seeks to bridge traditional spiritual narratives with modern typographic requirements through a thoughtful editorial implementation.',
    descriptionExtra: null,
    keywords: 'Typeface, Vernacular Implementation, Editorial Design',
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
    credits: 'Vevaldy Yusuf\nEldhie Rutfi\nPutri Qori\nIsan Nurfaisal\nRafila Famedian',
    description: 'contribute as design support for aloev\'s 10th anniversary celebration, the task involved translating the studio\'s interior ethos into a cohesive exhibition identity. the process focused on the execution of environmental graphics, including curatorial wall texts and editorial layouts. the intervention ensures a consistent visual tone that honors the studio\'s decade long practice.',
    descriptionExtra: null,
    keywords: 'Environmental Design, Exhibition, Editorial Design',
    media: [
      { type: 'video', src: '/Works/Aloev/1.mov' },
    ]
  },
  {
    name: 'Bikasoga',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian\nYasmin Aulia',
    description: 'addressing a visual identity that had become disconnected from contemporary relevance, this project explores a sensitive modernization of an established community brand. the approach focuses on preserving the recognizable core essence while introducing refined visual treatments. the goal was to maintain familiarity for the existing community while subtly broadening appeal for a newer demographic.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Environmental Design, Social Media Kickstart',
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
    credits: 'Vevaldy Yusuf\nYasmin Aulia\nIsan Nurfaisal\nRafila Famedian',
    description: 'this project focuses on the practical translation of a visual identity system into a social media kickstart. the execution involves interpreting existing guidelines into specific digital layouts, consistent copywriting, and a unified instagram tone of voice. the objective was to ensure the brand\'s visual \'spirit\' remains cohesive and functional across high-speed social media touchpoints.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Social Media Guideline, Social Media Kickstart',
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
    credits: 'Vevaldy Yusuf\nAndry Januaris\nEldhie Rutfi\nPutri Qori\nRafila Famedian',
    description: 'the project focuses on documenting a leather brand\'s visual identity into a comprehensive guideline system. by standardizing the application of visual elements and social media treatments, the archive provides a disciplined framework for long term use. the result is a consolidated manual that ensures visual consistency across physical and digital touchpoints.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Brand Guideline, Social Media Guideline',
    media: [
      { type: 'video', src: '/Works/Stiluso/01.mov' },
    ]
  },
  {
    name: 'Lemarbel',
    category: 'Brand Identity',
    year: 2025,
    credits: 'Aditya Krisna\nVevaldy Yusuf\nPutri Qori\nRafila Famedian',
    description: 'consolidating the visual identity of a padel court and studio into a structured brand manual. the archive defines the parameters for visual usage, from physical media applications to systematic social media environments. this framework serves as a technical reference to maintain the brand\'s visual integrity within its specialized community.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Brand Guideline, Environmental Design',
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
    name: 'Cass Up!',
    category: 'Event Identity',
    year: 2025,
    credits: 'Rafi Naufal\nRafila Famedian\nJessica Daniela\nAdzikra Baskara\nParamitha Agustin',
    description: 'addressing the urgency of food security through the lens of diversification, this campaign identity centers on cassava as a sustainable local resource. the design employs a visual tone and messaging strategy specifically tailored to engage a younger demographic. the outcome is an efficient communication system that bridges local agricultural urgency with contemporary audience relevance.',
    descriptionExtra: null,
    keywords: 'Event Identity System, Sustainable Campaign, Social Media Kickstart',
    media: [
      { type: 'video', src: '/Works/Cass Up!/01.mov' },
    ]
  },
  {
    name: 'Umbira',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Vevaldy Yusuf\nYasmin Aulia\nAndry Januaris\nAlif Ramadhan\nRafila Famedian',
    description: 'a rebranding project tasked with transitioning a minimalist aesthetic into a vibrant, maximalist illustrative language. the intervention sought to refresh the coffee brand\'s image in response to client needs while preserving its core essence. the shift provides a more spirited and dynamic visual dialogue without disconnecting from the brand\'s established roots.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Packaging Design, Environmental Design',
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
    credits: 'Vevaldy Yusuf\nYasmin Aulia\nEldhie Rutfi\nRafila Famedian',
    description: 'translating the philanthropic spirit of a wellness hub into an empathetic visual identity system. the design focuses on the core narrative of human connectivity and the fundamental necessity of being heard. the resulting social media framework ensures that digital interactions remain consistent with the brand\'s supportive and reflective essence.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Editorial Design, Social Media Kickstart',
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
    credits: 'Putri Qori\nEldhie Rutfi\nYasmin Aulia\nNaufal Farras\nRafila Famedian',
    description: 'an exploration of integrating visual identity into environmental graphic design, with a primary focus on custom illustrations. the challenge involved developing a prestigious art style that remains consistent with the brasserie\'s core identity. this integration creates a cohesive atmospheric experience where physical space and visual narratives are intentionally aligned.',
    descriptionExtra: null,
    keywords: 'Environmental Design, Illustration, Editorial Design',
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
    credits: 'Shani Nur M.\nVevaldy Yusuf\nNaufal Farras\nRafila Famedian',
    description: 'this project focuses on the practical translation of a visual identity system into a social media kickstart. the execution involves interpreting existing guidelines into specific digital layouts, consistent copywriting, and a unified instagram tone of voice. the objective was to ensure the brand\'s visual \'spirit\' remains cohesive and functional across high-speed social media touchpoints.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Social Media Guideline, Social Media Kickstart',
    media: [
      { type: 'video', src: '/Works/The Underdog/01.mov' },
    ]
  },
  {
    name: 'BFM 3.0',
    category: 'Event Identity',
    year: 2025,
    credits: 'Aqil Maulana\nRavie Rachman\nBila Andisha\nVicky Uniqa\nIkaa Putri\nGilang\nRafila Famedian',
    description: 'contributing to the development of an event identity for the bandung flea market, this project aims to reflect the youth driven spirit of responsible consumption. the process focused on translating community values into a visual system that cultivates a sustainable culture. the resulting identity serves as a structured framework for a community-driven movement.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Photography, Packaging Design',
    media: [
      { type: 'image', src: '/Works/BFM 3.0/1.png' },
    ]
  },
  {
    name: 'Bru',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Dian Purba\nVevaldy Yusuf\nRafila Famedian',
    description: 'acting as design support for a coffee roastery, the task involved developing product and packaging systems, including can designs. the approach sought to merge informative product data with a refined aesthetic to ensure both functional clarity and visual appeal. the intervention provides a balanced experience where utility and form are intentionally aligned.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Packaging Design, Product Design',
    media: []
  },
  {
    name: 'Zenki',
    category: 'Visual Identity',
    year: 2025,
    credits: 'Rafila Famedian\nNada Syarifah',
    description: 'exploring the duality of relaxation and positive energy, this project develops a visual identity and product system for a matcha based brand. the design draws inspiration from zen stone characteristics to translate inner peace into a tangible brand experience. the resulting identity acts as a visual conduit for a relaxed, yet energized lifestyle.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Packaging Design, Editorial Design',
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
    credits: 'Shani Nur\nEldhie Rutfi\nPutri Qori\nRafila Famedian',
    description: 'navigating the concept of \'home\' within yogyakarta\'s urban landscape, this project explores a modern identity for a padel court and cafe. the design intentionally avoids traditional ornaments in favor of a contemporary aesthetic that still retains the city\'s welcoming essence. the outcome is a relevant visual system that resonates with modern urban demographics without losing its domestic warmth.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Editorial Design, Environmental Design',
    media: []
  },
  {
    name: 'Tachi',
    category: 'Social Media Kickstart',
    year: 2025,
    credits: 'Rafila Famedian\nErma Ramdayani',
    description: 'this project focuses on the practical translation of a visual identity system into a social media kickstart. the execution involves interpreting existing guidelines into specific digital layouts, consistent copywriting, and a unified instagram tone of voice. the objective was to ensure the brand\'s visual \'spirit\' remains cohesive and functional across high-speed social media touchpoints.',
    descriptionExtra: null,
    keywords: 'Visual Identity System, Social Media Guideline, Social Media Kickstart',
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
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: 0 var(--grid-gutter);
  padding-left: var(--grid-margin);
  padding-right: var(--grid-margin);
  min-height: calc(100vh - (var(--nav-height) + 50px));
}

.works__media {
  grid-column: 1 / 10;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: 10px 0;
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
  grid-column: 10 / 13;
  padding: 20px 0;
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

.works__keywords {
  margin-bottom: 16px;
}

.works__keywords p {
  font-size: var(--font-size-xs);
  color: var(--color-black);
  line-height: 1.7;
  font-style: italic;
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

/* ============================================
   TABLET (768px – 1279px)
   ============================================ */
@media (max-width: 1279px) and (min-width: 768px) {
  .works {
    padding-top: calc(var(--nav-height) + 30px);
  }

  .works__media {
    grid-column: 1 / 6;
  }

  .works__details {
    grid-column: 6 / 9;
    padding: 10px 0;
  }
}

/* ============================================
   MOBILE (<768px)
   ============================================ */
@media (max-width: 767px) {
  .works {
    padding-top: calc(var(--nav-height) + 20px);
  }

  .works__layout {
    display: flex;
    flex-direction: column;
    min-height: auto;
    padding-bottom: 60px;
  }

  .works__media {
    padding: 0;
    justify-content: center;
  }

  .works__media-inner {
    height: 45vh;
  }

  .works__details {
    padding: 30px 0;
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
