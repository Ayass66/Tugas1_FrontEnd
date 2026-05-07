<script setup>
defineProps({
  username: String,
  email: String
})
</script>

<template>
  <Card class="w-64">
    <CardHeader>
      <CardTitle>{{ username }}</CardTitle>
    </CardHeader>

    <CardContent>
      <p>{{ email }}</p>
    </CardContent>

    <CardFooter>
      <Button variant="secondary">Lihat Profil</Button>
    </CardFooter>
  </Card>
</template>