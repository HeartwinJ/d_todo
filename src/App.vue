<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import { useTodoStore } from "./stores/todoStore";

const todoStore = useTodoStore();

onMounted(() => {
  console.info(`D's Todo v${import.meta.env.VITE_APP_VERSION}`);
  todoStore.migrateTodos();
  todoStore.initTodos();
});
</script>

<template>
  <div class="bg-pink-100 h-screen w-screen">
    <MainLayout>
      <RouterView />
    </MainLayout>
  </div>
</template>
./stores/todoStore
