<!-- src/views/TestShadcn.vue — Halaman test verifikasi shadcn -->
<template>
 <div class="container mx-auto p-8 space-y-6">
 <h1 class="text-3xl font-bold text-primary">Test shadcn-vue ✓</h1>
 <p class="text-muted-foreground">
 Jika judul di atas berwarna biru dan tombol berikut tampil dengan
benar,
 instalasi shadcn-vue berhasil!
 </p>
 <!-- Test Button variants -->
 <div class="flex flex-wrap gap-3">
 <Button>Default</Button>
 <Button variant="secondary">Secondary</Button>
 <Button variant="outline">Outline</Button>
 <Button variant="destructive">Destructive</Button>
 <Button variant="ghost">Ghost</Button>
 </div>
 <!-- Test Card -->
 <Card class="max-w-sm">
 <CardHeader>
 <CardTitle>Card Test</CardTitle>
 <CardDescription>Komponen Card shadcn-vue berfungsi</CardDescription>
 </CardHeader>
 <CardContent>
 <p class="text-sm text-muted-foreground">
 Tailwind CSS dan CSS variables bekerja dengan benar.
 </p>
 </CardContent>
 </Card>
 <!-- Test Badge -->
 <div class="flex gap-2">
 <Badge>Default</Badge>
 <Badge variant="secondary">Secondary</Badge>
 <Badge variant="destructive">Destructive</Badge>
 <Badge variant="outline">Outline</Badge>
 </div>
 </div>
</template>
<script setup>
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription,
 CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
</script>