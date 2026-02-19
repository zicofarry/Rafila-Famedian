<template>
  <div class="index-page page-container">
    <div class="index-page__table">
      <div
        class="index-page__row"
        v-for="(project, idx) in projects"
        :key="idx"
        @click="goToProject(idx)"
      >
        <span class="index-page__number">{{ String(idx + 1).padStart(3, '0') }}/{{ String(projects.length).padStart(3, '0') }}</span>
        <span class="index-page__name">{{ project.name }}</span>
        <span class="index-page__category">{{ project.category }}</span>
        <span class="index-page__year">{{ project.year }}</span>
      </div>
    </div>

    <div class="index-page__footer">
      <p class="index-page__footer-text">
        a quick directory of all entries works from 2025 to 2026. this section provides
        direct access to the visual preview and technical documentations within the
        archive, categorized by core disciplines.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const projects = [
  { name: 'Rimbun', category: 'Visual Identity', year: 2026 },
  { name: 'Tanirra', category: 'Visual Identity', year: 2026 },
  { name: 'Mandala', category: 'Vernacular Typeface', year: 2026 },
  { name: 'Bikasoga', category: 'Visual Identity', year: 2025 },
  { name: 'Atklub', category: 'Social Media Kickstart', year: 2025 },
  { name: 'Stiluso', category: 'Brand Identity', year: 2025 },
  { name: 'Lemarbel', category: 'Brand Identity', year: 2025 },
  { name: 'The Underdog', category: 'Social Media Guideline', year: 2025 },
  { name: 'Dualogue', category: 'Visual Identity', year: 2025 },
  { name: 'Umbira', category: 'Visual Identity', year: 2025 },
  { name: 'Aloev', category: 'Environmental Design', year: 2025 },
  { name: 'Courtaste', category: 'Visual Identity', year: 2025 },
  { name: 'Bona', category: 'Visual Identity', year: 2025 },
  { name: 'Bru', category: 'Visual Identity', year: 2025 },
  { name: 'Cass up!', category: 'Event Identity', year: 2025 },
  { name: 'BFM 3.0', category: 'Event Identity', year: 2025 },
  { name: 'Zenki', category: 'Visual Identity', year: 2025 },
  { name: 'Tachi', category: 'Social Media Kickstart', year: 2025 },
]

const goToProject = (idx) => {
  router.push({ path: '/works', query: { project: idx } })
}
</script>

<style scoped>
.index-page {
  padding-top: calc(var(--nav-height) + 40px);
}

.index-page__table {
  max-width: 700px;
  margin: 0 auto;
}

.index-page__row {
  display: grid;
  grid-template-columns: 80px 140px 1fr 60px;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
  align-items: center;
  cursor: pointer;
  transition: opacity var(--transition-fast);
}

.index-page__row:hover {
  opacity: 0.6;
}

.index-page__row:first-child {
  border-top: 1px solid var(--color-border);
}

.index-page__number {
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

.index-page__name {
  font-size: var(--font-size-sm);
  color: var(--color-orange);
  font-weight: 600;
}

.index-page__category {
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-weight: 400;
}

.index-page__year {
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-weight: 400;
  text-align: right;
}

.index-page__footer {
  margin-top: 60px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.index-page__footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-orange);
  line-height: 1.7;
}
</style>
