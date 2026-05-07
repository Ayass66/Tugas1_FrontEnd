<script setup>
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'
defineProps({
  items: Array
})
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Nama</TableHead>
        <TableHead>Harga</TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow v-for="item in items" :key="item.id">
        <TableCell>{{ item.name }}</TableCell>
        <TableCell>{{ item.price }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>