// src/router/index.js — tambahkan route katalog
import { createRouter, createWebHistory } from 'vue-router'
// import halaman
import Showcase from '@/views/Showcase.vue'
import ProductPage from '@/views/ProductPage.vue'
import UserPage from '@/views/UserPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import TablePage from '@/views/TablePage.vue'
import ModalPage from '@/views/ModalPage.vue'
const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),
 routes: [
 {
 path: '/',
 name: 'home',
 component: () => import('../views/HomeView.vue'),
 meta: { title: 'Beranda' }
 },
 {
 path: '/katalog',
 name: 'katalog',
 component: () => import('../views/KatalogView.vue'),
 meta: { title: 'Katalog Buku' }
 },
 {
 path: '/formBuku',
 name: 'formBuku',
 component: () => import('../views/FormBukuView.vue'),
 meta: { title: 'Form Buku' }
 },
{
    path: '/test-shadcn',
    name: 'TestShadcn',
    component: () => import('../views/TestShadcn.vue'),
    meta: { title: 'Test Shadcn' }
},
{
    path: '/showcase',
    name: 'Showcase',
    component: () => import('../views/Showcase.vue'),
    meta: { title: 'Showcase' }
},
 { path: '/', component: Showcase },
  { path: '/product', component: ProductPage },
  { path: '/user', component: UserPage },
  { path: '/login', component: LoginPage },
  { path: '/table', component: TablePage },
  { path: '/modal', component: ModalPage },
 // Route lain ditambahkan di Bab 4
 ],
 scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
})
// Update title halaman otomatis
router.afterEach((to) => {
 document.title = to.meta.title
 ? `${to.meta.title} — SiPerpus`
 : 'SiPerpus'
})
export default router