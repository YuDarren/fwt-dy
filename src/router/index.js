import { createRouter, createWebHistory } from "vue-router";
import ProfilePage from "@/views/ProfilePage.vue";
import Feed from "@/views/Feed.vue";
import Network from "@/views/Network.vue";
import Jobs from "@/views/Jobs.vue";
import Chat from "@/views/Chat.vue";
import Notices from "@/views/Notices.vue";
import Other from "@/views/Other.vue";
const routes = [
  {
    path: "/",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
  },
  {
    path: "/network",
    name: "Network",
    component: Network,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/notices",
    name: "Notices",
    component: Notices,
  },
  {
    path: "/other",
    name: "Other",
    component: Other,
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
