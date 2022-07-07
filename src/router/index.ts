import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
const Booking = () => import("../pages/Booking.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/booking",
      name: "booking",

      component: Booking,
    },
  ],
});

export default router;
