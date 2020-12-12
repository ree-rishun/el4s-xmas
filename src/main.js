import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Register from "./pages/Register.vue";

Vue.use(VueRouter);

const routes = [{ path: "/register", component: Register }];
const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
