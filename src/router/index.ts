import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import SearchResults from "../views/SearchResults.vue";
import WorkShow from "../views/WorkShow.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/catalog",
    name: "SearchResults",
    component: SearchResults
  },
  {
    path: "/catalog/:ark",
    name: "WorkShow",
    component: WorkShow
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;