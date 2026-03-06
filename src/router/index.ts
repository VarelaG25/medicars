import { createRouter, createWebHashHistory } from 'vue-router'

// IMPORTACIÓN ESTÁTICA (Elimina el lazy loading que está fallando)
import HomePage from '@/views/home/HomePage.vue'
import LoginPage from '@/views/login/LoginPage.vue'
import RegisterPage from '@/views/register/RegisterPage.vue'
import SinistersPage from '@/views/sinisters/SinistersPage.vue'
import TrackingPage from '@/views/tracking/TrackingPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/sinisters', component: SinistersPage },
  { path: '/reports', component: TrackingPage },
]

const router = createRouter({
  history: createWebHashHistory('/medicars/'), // Asegura la base aquí también
  routes,
})

export default router