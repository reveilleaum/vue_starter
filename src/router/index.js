import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Homepage.vue"),
      name: "Homepage",
    },
    {
      path: "/page",
      component: () => import("@/views/Page.vue"),
      name: "Page",
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("@/layouts/Error.vue"),
      name: "404 Not Found",
      // redirect: '/'
    },
  ],
});

router.beforeEach((to) => {
  document.title = to.name;
});

export default router;
