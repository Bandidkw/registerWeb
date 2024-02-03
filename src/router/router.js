// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register.vue";
import PageView from "../components/PageView.vue";
import AllRegister from "../components/Register/AllRegister.vue";
import CapitalRegister from "../components/Register/CapitalRegister.vue";
import PlaceRegister from "../components/Register/PlaceRegister.vue";
import RegisterLand from "../components/RegisterLand.vue";
import RegisterInves from "../components/RegisterInves.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: PageView },
    //ผู้แนะนำ
    { path: "/register", component: Register }, //มีทั้ง2
    { path: "/registerland", component: RegisterLand }, //มีที่
    { path: "/registerinves", component: RegisterInves }, //มีทุน
    //สมัคร
    { path: "/allregister", component: AllRegister }, //มีทั้ง2
    { path: "/capitalregister", component: CapitalRegister }, //มีที่
    { path: "/placeregister", component: PlaceRegister }, //มีทุน
  ],
});
export default router;
