<template>
  <div class="index-page page-container">
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
  padding-top: calc(var(--nav-height) + 70px);
  height: 100vh;
  overflow: hidden;
}

.index-page__table {
  /* Calculated alignment: 50vw - half_of_navbar_buttons_width (approx 135px) */
  /* Aligned with Navbar 'About' using global variable */
  margin-left: calc(50vw - var(--content-offset)); 
  max-width: 430px;
}

.index-page__row {
  display: grid;
  grid-template-columns: 80px 1fr 1fr 50px; 
  gap: 15px;
  padding: 7px 0 0px 0; /* More space on top, dots closer to text on bottom */
  cursor: pointer;
  align-items: baseline;
  transition: opacity var(--transition-fast);
  border-bottom: 2px dotted #ccc;
}

.index-page__col {
  font-size: 11px; /* Slightly smaller font */
  color: var(--color-black); 
  font-weight: 800;
  white-space: nowrap;
  display: flex;
  align-items: baseline;
  width: 100%;
  overflow: hidden;
  line-height: 1.3; /* Shrinks the text container from within */
  transform: translateY(1.8px); /* Physically moves text down towards the border */
}

.index-page__col--name {
  color: var(--color-black);
  font-weight: 800;
}

/* Dots removed as requested */
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
  margin-top: 30px; /* Reduced margin */
  margin-left: calc(50vw - var(--content-offset)); /* Align with table */
  max-width: 450px;
}

.index-page__footer-text {
  font-size: 11px;
  color: var(--color-black);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .index-page {
    padding-top: 40px;
    height: auto; /* Allow scroll on mobile */
    overflow: visible;
  }
  
  .index-page__table {
    margin-left: 0;
    max-width: 100%;
  }
  
  .index-page__row {
    grid-template-columns: 45px 1fr 40px; 
    gap: 8px;
    padding: 6px 0; /* More padding for mobile touch */
  }
  
  .index-page__col--category {
    display: none;
  }
  
  .index-page__footer {
    margin-left: 0;
    max-width: 100%;
    margin-top: 30px;
  }
}
</style>
