import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import { store } from "@/store/index";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes, // short for routes: routes
});
Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
  console.log(to.name);
  console.log(store.state.loggedIn);
  console.log(store.getters.userAuth);
  console.log(localStorage.getItem('authIdentity'));
  if (
    to.name !== "Login" &&
    localStorage.getItem('authIdentity') == null 
  ) {
    next({ name: "Login" });
  }
  else if (
    to.name !== "Login" &&
    localStorage.getItem('authIdentity') != null &&
    (localStorage.getItem('authIdentity') == false)
  ) {
    next({ name: "Login" });
  } else if (to.name === "Login" && 
  localStorage.getItem('authIdentity') != null &&
  localStorage.getItem('authIdentity') == true) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
