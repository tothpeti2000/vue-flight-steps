<script setup lang="ts">
import { ref } from "vue";

const flights = ref([
  {
    flightID: 1,
    fromAirport: "Budapest",
    toAirport: "Pasadena",
    flightTime: 100,
  },
  {
    flightID: 2,
    fromAirport: "Budapest",
    toAirport: "Pasadena",
    flightTime: 200,
  },
]);

const returnFlights = ref([
  {
    flightID: 10,
    fromAirport: "Pasadena",
    toAirport: "Budapest",
    flightTime: 150,
  },
  {
    flightID: 11,
    fromAirport: "Pasadena",
    toAirport: "Budapest",
    flightTime: 250,
  },
]);

const emit = defineEmits(["prev-page", "next-page"]);

const validate = () => {
  emit("next-page", { pageIdx: 1 });
};
</script>

<template>
  <FlightList :flights="flights" />
  <FlightList :flights="returnFlights" isReturn />

  <StepButtons
    @prevPage="$emit('prev-page', { pageIdx: 1 })"
    @nextPage="validate"
    :idx="1"
    direction="both"
  />
</template>
