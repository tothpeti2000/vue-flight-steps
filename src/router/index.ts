import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
const Booking = () => import("../pages/Booking.vue");
const Options = () => import("../components/Options.vue");
const Flights = () => import("../components/Flights.vue");

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
      children: [
        {
          path: "start",
          name: "bookingStart",
          component: Options,
        },
        {
          path: "flights",
          name: "bookingFlights",
          component: Flights,
        },
      ],
    },
  ],
});

export default router;
