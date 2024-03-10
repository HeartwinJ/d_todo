<script setup lang="ts">
import Card from "@/components/Card.vue";
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="grid grid-cols-2 gap-3">
      <Card> Card 1 </Card>
      <Card> Card 1 </Card>
    </div>
    <Card class="w-full"> Card 3 </Card>
    <Card class="w-full"> Card 4 </Card>
  </div>
</template>
