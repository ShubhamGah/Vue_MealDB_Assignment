import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ErrorPage from "../components/ErrorPage";
import PageNotFound from "../components/PageNotFound";
import MealDetails from "../components/MealDetails";
import Search from "../components/Search";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/error",
    name: "ErrorPage",
    component: ErrorPage,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/mealdetails/:id",
    name: "MealDetails",
    component: MealDetails,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
