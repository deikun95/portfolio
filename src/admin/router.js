import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () => import("./components/pages/About"),
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: () => import("./components/pages/Reviews"),
  },
  {
    path: "/works",
    name: "Works",
    component: () => import("./components/pages/Works"),
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes,
});

export default router;
