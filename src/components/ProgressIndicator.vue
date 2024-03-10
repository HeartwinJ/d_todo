<script setup lang="ts">
import { computed } from "vue";
import { IconSparkles } from "@tabler/icons-vue";
import Card from "@/components/Card.vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

const completedPercentage = computed(() => {
  return (todoStore.completedTodos.length / todoStore.todos.length) * 100;
});
</script>
<template>
  <Card>
    <div class="text-sm mb-3">Progress</div>
    <div class="relative pb-10">
      <div class="absolute w-full h-10 bg-pink-200 rounded-full shadow"></div>
      <div
        class="absolute h-10 bg-pink-500 rounded-full"
        :style="{ width: `${completedPercentage}%` }"
      >
        <div class="relative">
          <div
            class="absolute right-0 bg-white p-1 rounded-full"
            v-if="completedPercentage"
          >
            <IconSparkles class="h-8 w-8 text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
