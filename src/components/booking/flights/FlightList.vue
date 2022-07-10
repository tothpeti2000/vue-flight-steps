<script setup lang="ts">
import type { Flight } from "@/interfaces/booking";

const props = defineProps<{
  flights: Flight[];
  isReturn?: boolean;
}>();

const title = `${props.isReturn ? "Return" : ""} Flights available`;
</script>

<template>
  <h1>{{ title }}</h1>

  <FlightCard
    v-for="flight in flights"
    :key="flight.flightID"
    :flight="flight"
  />
</template>
