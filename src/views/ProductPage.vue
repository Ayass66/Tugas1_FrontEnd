<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import ProductCard from '@/components/domain/ProductCard.vue'
</script>

<template>
  <DashboardLayout>

    <div class="mb-6">
      <h1 class="text-3xl font-bold">
        📦 Product Page
      </h1>

      <p class="text-gray-500 mt-2">
        Contoh implementasi Product Card
      </p>
    </div>

    <div class="flex flex-wrap gap-6">

      <ProductCard
        name="Laptop Gaming"
        :price="15000000"
      />

      <ProductCard
        name="Mechanical Keyboard"
        :price="850000"
      />

      <ProductCard
        name="Wireless Mouse"
        :price="350000"
      />

    </div>

  </DashboardLayout>
</template>