import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../pages/Register.vue";
import RegisterResult from "../pages/RegisterResult.vue";
import Gacha from "../pages/Gacha.vue";
import GachaResult from "../pages/GachaResult.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/room/:roomId/register",
    component: Register,
  },
  {
    path: "/room/:roomId/register_result",
    component: RegisterResult,
  },
  {
    path: "/room/:roomId/gacha",
    component: Gacha,
  },
  {
    name: "gachaResult",
    path: "/room/:roomId/gacha_result",
    component: GachaResult,
  },
  {
    // グループ作成
    path: "/room/:roomId/create",
    name: "create",
    component: () => import("../pages/CreateRoom"),
  },
  {
    // グループのリンク表示
    path: "/room/:roomId/create/result",
    name: "createResult",
    component: () => import("../pages/CreateResult"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
