<template>
  <div class="container mx-auto p-8 space-y-10">

    <!-- HEADER -->
    <div>
      <h1 class="text-3xl font-bold text-primary">Showcase Components</h1>
      <p class="text-muted-foreground">
        Halaman ini menampilkan semua komponen dalam project.
      </p>
    </div>

    <!-- ===================== -->
    <!-- SHADCN COMPONENTS -->
    <!-- ===================== -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Shadcn Components</h2>

      <!-- Button -->
      <div class="space-y-2">
        <h3 class="font-medium">Button</h3>
        <div class="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <!-- Card -->
      <div class="space-y-2 mt-6">
        <h3 class="font-medium">Card</h3>
        <Card class="max-w-sm">
          <CardHeader>
            <CardTitle>Card Test</CardTitle>
            <CardDescription>
              Komponen Card dari shadcn-vue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground">
              Ini contoh penggunaan card.
            </p>
          </CardContent>
        </Card>
      </div>

      <!-- Badge -->
      <div class="space-y-2 mt-6">
        <h3 class="font-medium">Badge</h3>
        <div class="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <!-- Input -->
      <div class="space-y-2 mt-6 max-w-sm">
        <h3 class="font-medium">Input</h3>
        <Input placeholder="Masukkan teks..." />
      </div>
    </div>

    <!-- ===================== -->
    <!-- CUSTOM COMPONENTS -->
    <!-- ===================== -->
    <div>
      <h2 class="text-2xl font-semibold mb-4">Custom Components</h2>

      <!-- App Header -->
      <div class="space-y-2">
        <h3 class="font-medium">App Header</h3>
        <AppHeader />
      </div>

      <!-- Theme Switcher -->
      <div class="space-y-2 mt-6">
        <h3 class="font-medium">Theme Switcher</h3>
        <ThemeSwitcher />
      </div>

      <!-- Data List -->
      <div class="space-y-2 mt-6">
        <h3 class="font-medium">Data List</h3>
        <DataList />
      </div>

      <!-- Kartu Buku -->
      <div class="space-y-2 mt-6">
        <h3 class="font-medium">Kartu Buku</h3>
        <div class="flex gap-4 flex-wrap">
          <KartuBuku />
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
// =====================
// SHADCN COMPONENTS
// =====================
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

// =====================
// CUSTOM COMPONENTS (SESUAI PUNYAMU)
// =====================
import AppHeader from '@/components/layout/AppHeader.vue'
import KartuBuku from '@/components/buku/KartuBuku.vue'
import DataList from '@/components/ui/DataList.vue'
import ThemeSwitcher from '@/components/ui/ThemeSwitcher.vue'
</script>