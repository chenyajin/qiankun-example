import { RouteConfig } from "vue-router";
import PageOne from "../views/page_one.vue";

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "page-one",
    children: [
      {
        path: "/page-one",
        name: "page-one",
        component: PageOne,
      },

      {
        path: "/page-two",
        name: "page-two",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/page_two.vue"),
      },
    ],
  },
];
