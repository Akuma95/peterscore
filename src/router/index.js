import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EngineView from '../views/EngineView.vue'
import ArtView from '../views/ArtView.vue'
import SocialsView from '../views/SocialsView.vue'
import FriendsView from '../views/FriendsView.vue'
import ImprintView from '../views/ImprintView.vue'
import DataProtectionView from '../views/DataProtectionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/engine',
    name: 'engine',
    component: EngineView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: ArtView
  },
  {
    path: '/socials',
    name: 'socials',
    component: SocialsView
  },
  {
    path: '/friends',
    name: 'friends',
    component: FriendsView
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: ImprintView
  },
  {
    path: '/dataprotection',
    name: 'dataprotection',
    component: DataProtectionView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
