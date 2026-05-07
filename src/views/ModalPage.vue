<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import ModalForm from '@/components/domain/ModalForm.vue'
</script>

<template>
  <DashboardLayout>

    <div class="mb-6">
      <h1 class="text-3xl font-bold">
        🪟 Modal Form
      </h1>

      <p class="text-gray-500 mt-2">
        Contoh implementasi dialog/modal menggunakan shadcn-vue
      </p>
    </div>

    <div class="bg-white p-10 rounded-2xl shadow flex justify-center">

      <ModalForm />

    </div>

  </DashboardLayout>
</template>