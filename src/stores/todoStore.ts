import { ref, computed } from "vue";
import { defineStore } from "pinia";

import type Todo from "@/models/Todo";

export const useTodoStore = defineStore("todoStore", () => {
  const todos = ref<Todo[]>([]);

  const completedTodos = computed(() =>
    todos.value.filter((todo) => todo.completed)
  );

  function initTodos() {
    const _todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.value = _todos;
    _save();
  }

  function _save() {
    localStorage.setItem("todos", JSON.stringify(todos.value));
  }

  function addTodo(todo: Todo) {
    todos.value.push(todo);
    _save();
  }

  function toggleTodo(todoId: string) {
    const todo = todos.value.find((todo) => todo.id === todoId);
    if (todo) {
      todo.completed = !todo.completed;
      _save();
    }
  }

  return { todos, completedTodos, initTodos, addTodo, toggleTodo };
});
