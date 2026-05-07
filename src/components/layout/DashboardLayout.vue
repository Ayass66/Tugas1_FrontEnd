<script setup>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div class="flex bg-gray-100">

    <!-- Sidebar -->
    <Sidebar />

    <!-- Main -->
    <div class="flex-1 flex flex-col min-h-screen">

      <!-- Navbar -->
      <Navbar />

      <!-- Content -->
      <main class="p-6">
        <slot />
      </main>

    </div>

  </div>
</template>