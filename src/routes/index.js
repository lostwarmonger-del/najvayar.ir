import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../App.vue")
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("../components/terms.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router