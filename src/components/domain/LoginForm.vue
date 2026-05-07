<script setup>
import { ref } from 'vue'

// import shadcn components
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const email = ref('')
const password = ref('')

const login = () => {
  alert(`Login berhasil sebagai ${email.value}`)
}
</script>

<template>
  <Card class="w-full max-w-md shadow-xl border-0 rounded-2xl">
    
    <!-- Header -->
    <CardHeader class="space-y-2 text-center">
      <div class="flex justify-center">
        <div class="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center text-2xl">
          🔐
        </div>
      </div>

      <CardTitle class="text-2xl font-bold">
        Welcome Back
      </CardTitle>

      <p class="text-sm text-gray-500">
        Silakan login untuk melanjutkan
      </p>
    </CardHeader>

    <!-- Form -->
    <CardContent class="space-y-4">

      <!-- Email -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">
          Email
        </label>

        <Input
          v-model="email"
          type="email"
          placeholder="Masukkan email"
          class="h-11 rounded-xl"
        />
      </div>

      <!-- Password -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700">
          Password
        </label>

        <Input
          v-model="password"
          type="password"
          placeholder="Masukkan password"
          class="h-11 rounded-xl"
        />
      </div>

      <!-- Remember -->
      <div class="flex items-center justify-between text-sm">
        <label class="flex items-center gap-2 text-gray-600">
          <input type="checkbox" class="rounded">
          Remember me
        </label>

        <a href="#" class="text-gray-900 font-medium hover:underline">
          Forgot password?
        </a>
      </div>

    </CardContent>

    <!-- Footer -->
    <CardFooter class="flex flex-col gap-4">

      <Button
        class="w-full h-11 rounded-xl text-base"
        @click="login"
      >
        Login
      </Button>

      <p class="text-sm text-gray-500 text-center">
        Belum punya akun?
        <span class="font-semibold text-gray-900 cursor-pointer hover:underline">
          Register
        </span>
      </p>

    </CardFooter>

  </Card>
</template>