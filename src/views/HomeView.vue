<script setup lang="ts">
import Card from "@/components/Card.vue";
import ProgressIndicator from "@/components/ProgressIndicator.vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="grid grid-cols-2 gap-3">
      <Card>
        <div class="text-sm mb-3">Total</div>
        <div class="text-center font-bold text-4xl">
          {{ todoStore.todos.length }}
        </div>
      </Card>
      <Card>
        <div class="text-sm mb-3">Completed</div>
        <div class="text-center font-bold text-4xl">
          {{ todoStore.completedTodos.length }}
        </div></Card
      >
    </div>
    <div>
      <ProgressIndicator />
    </div>
  </div>
</template>
