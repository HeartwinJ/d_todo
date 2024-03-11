<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import { Dialog } from "@headlessui/vue";
import { IconPlus, IconX } from "@tabler/icons-vue";

import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();
const showAddDialog = ref(false);
const todoTitle = ref("");

function addTodo() {
  todoStore.addTodo({
    id: uuidv4(),
    title: todoTitle.value,
    completed: false,
  });
  todoTitle.value = "";
  showAddDialog.value = false;
}
</script>
<template>
  <div class="fixed bottom-4 right-4">
    <button
      class="text-white bg-pink-600 rounded-xl p-3 shadow"
      @click="showAddDialog = true"
    >
      <IconPlus class="h-8 w-8"></IconPlus>
    </button>
  </div>
  <Dialog :open="showAddDialog" @close="showAddDialog = false">
    <div
      class="fixed inset-0 bg-white/70"
      aria-hidden="true"
      @click="showAddDialog = false"
    ></div>
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-white p-5 min-w-64 shadow rounded-lg flex flex-col gap-3">
        <div class="flex gap-3 items-center justify-between">
          <div class="text-2xl font-bold">Add Todo</div>
          <button @click="showAddDialog = false">
            <IconX class="h-6 w-6 text-red-600" />
          </button>
        </div>
        <div>
          <input
            type="text"
            class="w-full border-b-2 border-pink-600 outline-none text-xl p-2"
            placeholder="Title"
            v-model="todoTitle"
          />
        </div>
        <div>
          <button
            class="w-full flex gap-3 items-center justify-center bg-pink-600 text-white rounded-lg px-4 py-2"
            @click="addTodo"
          >
            Add <IconPlus class="h-5 w-5"></IconPlus>
          </button>
        </div>
      </div>
    </div>
  </Dialog>
</template>
