import { createRouter, createWebHistory } from "vue-router";
import ProfilePage from "@/views/ProfilePage.vue";

const routes = [
  {
    path: "/",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import("../views/Feed.vue"),
  },
  {
    path: "/network",
    name: "Network",
    component: () => import("../views/Network.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("../views/Jobs.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/Chat.vue"),
  },
  {
    path: "/notices",
    name: "Notices",
    component: () => import("../views/Notices.vue"),
  },

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
