import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "about",
    component: () => import("./components/pages/About"),
    props: true,
  },
  {
    path: "/reviews",
    name: "reviews",
    component: () => import("./components/pages/Reviews"),
    props: true,
  },
  {
    path: "/works",
    name: "works",
    component: () => import("./components/pages/Works"),
    props: true,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  // mode: "history",
  routes,
});

export default router;
