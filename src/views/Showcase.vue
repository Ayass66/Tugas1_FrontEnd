<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    
    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">
        🎨 Showcase Komponen
      </h1>
      <p class="text-gray-500">
        Pilih halaman untuk melihat implementasi komponen
      </p>
    </div>

    <!-- Grid Menu -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Card Menu -->
      <router-link to="/product">
        <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 class="text-lg font-semibold mb-2">📦 Product Card</h2>
          <p class="text-sm text-gray-500">Menampilkan data produk</p>
        </div>
      </router-link>

      <router-link to="/user">
        <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 class="text-lg font-semibold mb-2">👤 User Card</h2>
          <p class="text-sm text-gray-500">Informasi pengguna</p>
        </div>
      </router-link>

      <router-link to="/login">
        <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 class="text-lg font-semibold mb-2">🔐 Login Form</h2>
          <p class="text-sm text-gray-500">Form autentikasi</p>
        </div>
      </router-link>

      <router-link to="/table">
        <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 class="text-lg font-semibold mb-2">📊 Data Table</h2>
          <p class="text-sm text-gray-500">Menampilkan data tabel</p>
        </div>
      </router-link>

      <router-link to="/modal">
        <div class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 class="text-lg font-semibold mb-2">🪟 Modal Form</h2>
          <p class="text-sm text-gray-500">Popup input data</p>
        </div>
      </router-link>

    </div>
  </div>
</template>