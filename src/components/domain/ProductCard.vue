<script setup>
defineProps({
  name: String,
  price: Number
})
</script>

<template>
  <Card class="w-64">
    <CardHeader>
      <CardTitle>{{ name }}</CardTitle>
    </CardHeader>

    <CardContent>
      <p>Harga: Rp {{ price }}</p>
    </CardContent>

    <CardFooter>
      <Button>Beli</Button>
    </CardFooter>
  </Card>
</template>