import { createRouter, createWebHistory } from "vue-router";

import resumeView from "@/views/resumeView.vue";
import reportView from "@/views/reportView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    redirect: { name: "resume" },
  },
  {
    path: "/resume",
    name: "resume",
    component: resumeView,
  },
  {
    path: "/report",
    name: "report",
    component: reportView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
