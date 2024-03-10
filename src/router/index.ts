import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodoView from "@/views/TodoView.vue";
import WeeklyPlannerView from "@/views/WeeklyPlannerView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/todo", component: TodoView },
    { path: "/week", component: WeeklyPlannerView },
    { path: "/about", component: AboutView },
  ],
});

export default router;
