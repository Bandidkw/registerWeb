import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../view/HomePage.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../view/HomePage.vue"),
    },
    {
      path: "/register/landlord",
      name: "register-landlord",
      component: () => import("../components/register/LandlordView.vue"),
    },
    {
      path: "/register/investor",
      name: "register-investor",
      component: () => import("../components/register/InvestorView.vue"),
    },
    {
      path: "/register/outlay",
      name: "register-outlay",
      component: () => import("../components/register/OutlayView.vue"),
    },
    {
      path: "/otp/phone",
      name: "otp-phone",
      component: () => import("../components/platform/OTPView.vue"),
    },
    {
      path: "/counselor",
      name: "counselor",
      component: () => import("../components/platform/CounselorView.vue"),
    },
    {
      path: "/platform",
      name: "platform",
      component: () => import("../components/platform/PlatformView.vue"),
    },
  ],
});
export default router;
