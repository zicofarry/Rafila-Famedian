import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutPage from '../views/AboutPage.vue'
import IndexPage from '../views/IndexPage.vue'
import WorksPage from '../views/WorksPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
    { path: '/', name: 'Landing', component: LandingPage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/index', name: 'Index', component: IndexPage },
    { path: '/works', name: 'Works', component: WorksPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router
