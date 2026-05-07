<script setup>
import DashboardLayout from '@/components/layout/DashboardLayout.vue'
import UserCard from '@/components/domain/UserCard.vue'
</script>

<template>
  <DashboardLayout>

    <div class="mb-6">
      <h1 class="text-3xl font-bold">
        👤 User Page
      </h1>

      <p class="text-gray-500 mt-2">
        Contoh implementasi User Card
      </p>
    </div>

    <div class="flex flex-wrap gap-6">

      <UserCard
        username="Anggi Larasati"
        email="anggi@email.com"
      />

      <UserCard
        username="Budi Santoso"
        email="budi@email.com"
      />

    </div>

  </DashboardLayout>
</template>