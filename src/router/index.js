// src/router/index.js — tambahkan route katalog
import { createRouter, createWebHistory } from 'vue-router'
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