<script setup lang="ts">
import type { Flight } from "@/interfaces/booking";

defineProps<{
  flight: Flight;
}>();
</script>

<template>
  <Card>
    <template #header>
      <h2>{{ flight.fromAirport }} to {{ flight.toAirport }}</h2>
    </template>
    <template #content> Flight duration: {{ flight.flightTime }} min </template>
  </Card>
</template>
