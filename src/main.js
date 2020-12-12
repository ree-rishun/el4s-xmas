import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Register from "./pages/Register.vue";
import RegisterResult from "./pages/RegisterResult.vue";
import Gacha from "./pages/Gacha.vue";
import GachaResult from "./pages/GachaResult.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/register", component: Register },
  { path: "/register_result", component: RegisterResult },
  { path: "/gacha", component: Gacha },
  { path: "/gacha_result", component: GachaResult },
];
const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
