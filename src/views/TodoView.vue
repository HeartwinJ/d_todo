<script setup lang="ts">
import { computed } from "vue";

import TodoItem from "@/components/TodoItem.vue";
import AddComponent from "@/components/AddComponent.vue";

import { useTodoStore } from "@/stores/todoStore";
import type Todo from "@/models/Todo";

const todoStore = useTodoStore();

const sortedTodos = computed(() => {
  return JSON.parse(JSON.stringify(todoStore.todos)).sort(
    (a: Todo, b: Todo) => {
      return Number(a.completed) - Number(b.completed);
    }
  );
});
</script>
<template>
  <div>
    <div class="flex flex-col gap-3">
      <TodoItem
        v-for="todo in sortedTodos"
        :key="todo.id"
        :title="todo.title"
        :completed="todo.completed"
        @toggle="todoStore.toggleTodo(todo.id)"
      />
    </div>
    <AddComponent />
  </div>
</template>
