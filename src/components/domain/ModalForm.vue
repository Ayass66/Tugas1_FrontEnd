<script setup>
import { ref } from 'vue'

// ✅ IMPORT DARI SHADCN
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const open = ref(false)

// contoh fungsi submit
const submit = () => {
  alert('Data berhasil disimpan!')
  open.value = false
}
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    
    <!-- Tombol buka modal -->
    <Dialog v-model:open="open">
      
      <DialogTrigger as-child>
        <Button>Buka Form</Button>
      </DialogTrigger>

      <!-- Isi Modal -->
      <DialogContent class="sm:max-w-md">
        
        <DialogHeader>
          <DialogTitle>Tambah Produk</DialogTitle>
        </DialogHeader>

        <!-- FORM -->
        <div class="space-y-4 mt-4">
          <Input placeholder="Nama Produk" />
          <Input placeholder="Harga Produk" type="number" />
        </div>

        <!-- FOOTER -->
        <DialogFooter class="mt-4">
          <Button variant="secondary" @click="open = false">
            Batal
          </Button>
          <Button @click="submit">
            Simpan
          </Button>
        </DialogFooter>

      </DialogContent>

    </Dialog>

  </div>
</template>