// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import PageView from "../components/PageView.vue";
import AllRegister from "../components/Register/AllRegister.vue";
import CapitalRegister from "../components/Register/CapitalRegister.vue";
import PlaceRegister from "../components/Register/PlaceRegister.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: PageView },
    { path: "/allregister", component: AllRegister },
    { path: "/capitalregister", component: CapitalRegister },
    { path: "/placeregister", component: PlaceRegister },
  ],
});
export default router;