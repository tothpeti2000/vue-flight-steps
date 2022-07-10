import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
const BookingProgress = () => import("../pages/booking/BookingProgress.vue");
const Start = () => import("../pages/booking/Start.vue");
const Flights = () => import("../pages/booking/Flights.vue");
const Passengers = () => import("../pages/booking/Passengers.vue");

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
      component: BookingProgress,
      children: [
        {
          path: "start",
          name: "bookingStart",
          component: Start,
        },
        {
          path: "flights",
          name: "bookingFlights",
          component: Flights,
        },
        {
          path: "passengers",
          name: "passengers",
          component: Passengers,
        },
      ],
    },
  ],
});

export default router;
