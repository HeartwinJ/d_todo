<script setup lang="ts">
import { IconCircle, IconCircleCheckFilled } from "@tabler/icons-vue";
import Card from "./Card.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle"]);
</script>
<template>
  <Card class="cursor-pointer" @click="emit('toggle')">
    <div class="flex items-center gap-3">
      <component
        :is="props.completed ? IconCircleCheckFilled : IconCircle"
        class="h-8 w-8 text-pink-500"
      />
      <span :class="{ 'line-through decoration-pink-500': props.completed }">{{
        props.title
      }}</span>
    </div>
  </Card>
</template>
