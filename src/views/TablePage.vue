<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import DataTableWrapper from '@/components/domain/DataTableWrapper.vue'

const data = [
  {
    id: 1,
    name: 'Laptop',
    price: 10000000
  },
  {
    id: 2,
    name: 'Mouse',
    price: 250000
  },
  {
    id: 3,
    name: 'Keyboard',
    price: 500000
  },
  {
    id: 4,
    name: 'Monitor',
    price: 2500000
  }
]
</script>

<template>
  <DashboardLayout>

    <div class="mb-6">
      <h1 class="text-3xl font-bold">
        📊 Data Table
      </h1>

      <p class="text-gray-500 mt-2">
        Contoh implementasi tabel menggunakan shadcn-vue
      </p>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow">

      <DataTableWrapper :items="data" />

    </div>

  </DashboardLayout>
</template>