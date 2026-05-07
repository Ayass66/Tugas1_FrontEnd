<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="w-64 min-h-screen bg-gray-900 text-white p-6">

    <!-- Title -->
    <h2 class="text-2xl font-bold mb-8">
      Dashboard
    </h2>

    <!-- Menu -->
    <nav class="flex flex-col gap-3">

      <RouterLink
        to="/"
        class="px-4 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        🏠 Showcase
      </RouterLink>

      <RouterLink
        to="/product"
        class="px-4 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        📦 Product
      </RouterLink>

      <RouterLink
        to="/user"
        class="px-4 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        👤 User
      </RouterLink>

      <RouterLink
        to="/login"
        class="px-4 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        🔐 Login
      </RouterLink>

      <RouterLink
        to="/table"
        class="px-4 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        📊 Table
      </RouterLink>

      <RouterLink
        to="/modal"
        class="px-4 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        🪟 Modal
      </RouterLink>

    </nav>

  </aside>
</template>