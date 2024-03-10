<script setup lang="ts">
import { ref } from "vue";
import { Dialog } from "@headlessui/vue";
import {
  IconMenu2,
  IconHome,
  IconCalendarWeek,
  IconChecklist,
	IconInfoCircle,
} from "@tabler/icons-vue";

const links = [
  { name: "Home", icon: IconHome, to: "/" },
  { name: "To Dos", icon: IconChecklist, to: "/todo" },
  { name: "Weekly Planner", icon: IconCalendarWeek, to: "/week" },
  { name: "About", icon: IconInfoCircle, to: "/about" },
];

const showMenu = ref(false);
</script>
<template>
  <div class="h-full flex flex-col">
    <div class="flex items-center p-5 text-pink-600">
      <div class="grow text-3xl font-medium">D's ToDo</div>
      <div>
        <button class="p-3" @click="showMenu = true">
          <IconMenu2 class="h-6 w-6" />
        </button>
      </div>
    </div>
    <div class="grow p-3">
      <slot></slot>
    </div>
    <Dialog :open="showMenu" @close="showMenu = false">
      <div
        class="fixed inset-0 bg-white/70"
        aria-hidden="true"
        @click="showMenu = false"
      ></div>
      <div
        class="bg-pink-500 min-w-64 text-white p-3 fixed right-0 top-0 bottom-0 h-screen"
      >
        <div class="flex flex-col gap-3">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="p-3 flex gap-3 items-center"
            active-class="font-bold rounded-full bg-white text-pink-500"
            @click="showMenu = false"
          >
            <component :is="link.icon" class="h-6 w-6" />
            <span>{{ link.name }}</span>
          </RouterLink>
        </div>
      </div>
    </Dialog>
  </div>
</template>
