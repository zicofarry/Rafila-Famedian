<template>
  <div class="index-page">
    <div class="index-page__grid">
      <div class="index-page__table">
        <div
          class="index-page__row"
          v-for="(project, idx) in projects"
          :key="idx"
          @click="goToProject(idx)"
        >
          <div class="index-page__col index-page__col--number">
            {{ String(idx + 1).padStart(3, '0') }}/{{ String(projects.length).padStart(3, '0') }}
            <span class="index-page__dots"></span>
          </div>
          
          <div class="index-page__col index-page__col--name">
            {{ project.name }}
            <span class="index-page__dots"></span>
          </div>

          <div class="index-page__col index-page__col--category">
            {{ project.category }}
            <span class="index-page__dots"></span>
          </div>

          <div class="index-page__col index-page__col--year">
            {{ project.year }}
          </div>
        </div>
      </div>

      <div class="index-page__footer">
        <p class="index-page__footer-text">
          a directory of all archive entries from 2025 to 2026. this section provides direct access to
          visual previews and technical documentations, categorized by core disciplines.
        </p>
      </div>
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
  { name: 'Aloev', category: 'Environmental Design', year: 2025 },
  { name: 'Bikasoga', category: 'Visual Identity', year: 2025 },
  { name: 'Atklub', category: 'Social Media Kickstart', year: 2025 },
  { name: 'Stiluso', category: 'Brand Identity', year: 2025 },
  { name: 'Lemarbel', category: 'Brand Identity', year: 2025 },
  { name: 'Cass Up!', category: 'Event Identity', year: 2025 },
  { name: 'Umbira', category: 'Visual Identity', year: 2025 },
  { name: 'Dualoque', category: 'Visual Identity', year: 2025 },
  { name: 'Bona', category: 'Visual Identity', year: 2025 },
  { name: 'The Underdog Podcast', category: 'Social Media Guideline', year: 2025 },
  { name: 'BFM 3.0', category: 'Event Identity', year: 2025 },
  { name: 'Bru', category: 'Visual Identity', year: 2025 },
  { name: 'Zenki', category: 'Visual Identity', year: 2025 },
  { name: 'Courtaste', category: 'Visual Identity', year: 2025 },
  { name: 'Tachi', category: 'Social Media Kickstart', year: 2025 },
]

const goToProject = (idx) => {
  router.push({ path: '/works', query: { project: idx } })
}
</script>

<style scoped>
.index-page {
  padding-top: calc(var(--nav-height) + 70px);
  padding-left: var(--grid-margin);
  padding-right: var(--grid-margin);
  height: 100vh;
  overflow: hidden;
}

.index-page__grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: 0 var(--grid-gutter);
}

.index-page__table {
  grid-column: 6 / 11;
}

.index-page__row {
  display: grid;
  grid-template-columns: 80px 1fr 1fr 50px; 
  gap: 15px;
  padding: 7px 0 0px 0;
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='10' fill='none' stroke='%23ff48ee' stroke-width='2'/%3E%3C/svg%3E") 12 12, pointer;
  align-items: baseline;
  transition: color var(--transition-fast);
  border-bottom: 2px dotted #ccc;
}

.index-page__row:hover {
  color: var(--color-pink);
}

.index-page__row:hover .index-page__col {
  color: var(--color-pink);
}

.index-page__col {
  font-size: 11px;
  color: var(--color-black); 
  font-weight: 800;
  white-space: nowrap;
  display: flex;
  align-items: baseline;
  width: 100%;
  overflow: hidden;
  line-height: 1.3;
  transform: translateY(1.8px);
  transition: color var(--transition-fast);
}

.index-page__col--name {
  color: var(--color-black);
  font-weight: 800;
}

.index-page__dots {
  display: none; 
}
.index-page__col--year .index-page__dots {
  display: none;
}

.index-page__col--year {
  justify-content: flex-end;
}

.index-page__footer {
  grid-column: 6 / 10;
  margin-top: 30px;
}

.index-page__footer-text {
  font-size: 11px;
  color: var(--color-black);
  line-height: 1.5;
}

/* ============================================
   TABLET (768px – 1279px)
   ============================================ */
@media (max-width: 1279px) and (min-width: 768px) {
  .index-page {
    padding-top: calc(var(--nav-height) + 50px);
  }

  .index-page__table {
    grid-column: 3 / 9;
  }

  .index-page__footer {
    grid-column: 3 / 8;
  }

  .index-page__row {
    grid-template-columns: 65px 1fr 1fr 45px;
    gap: 10px;
  }
}

/* ============================================
   MOBILE (<768px)
   ============================================ */
@media (max-width: 767px) {
  .index-page {
    padding-top: calc(var(--nav-height) + 30px);
    height: auto;
    overflow: visible;
  }

  .index-page__grid {
    display: block;
  }

  .index-page__table {
    width: 100%;
  }

  .index-page__row {
    grid-template-columns: 45px 1fr 40px; 
    gap: 8px;
    padding: 6px 0;
  }

  .index-page__col--category {
    display: none;
  }

  .index-page__footer {
    margin-top: 30px;
  }
}
</style>
