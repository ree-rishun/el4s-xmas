import Vue from "vue"
import VueRouter from "vue-router";
import Register from "../pages/Register.vue";
import RegisterResult from "../pages/RegisterResult.vue";
import Gacha from "../pages/Gacha.vue";
import GachaResult from "../pages/GachaResult.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/register",
    component: Register
  },
  {
    path: "/register_result",
    component: RegisterResult
  },
  {
    path: "/gacha",
    component: Gacha
  },
  {
    path: "/gacha_result",
    component: GachaResult
  },
  {
    path: "/create",
    name: 'create',
    component: () => import('../pages/CreateRoom')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router