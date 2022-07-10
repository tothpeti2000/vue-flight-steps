<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const steps = ref([
  {
    label: "Start",
    to: "/booking/start",
  },
  {
    label: "Flights",
    to: "/booking/flights",
  },
  {
    label: "Passengers",
    to: "/booking/passengers",
  },
]);

const nextPage = (event: any) => {
  console.log(event);

  router.push(steps.value[event.pageIdx + 1].to);
};

const prevPage = (event: any) => {
  router.push(steps.value[event.pageIdx - 1].to);
};
</script>

<template>
  <Card class="mb-2">
    <template #content>
      <Steps :model="steps" :readonly="true" />
    </template>
  </Card>

  <Card>
    <template #content>
      <RouterView
        v-slot="{ Component }"
        @prevPage="prevPage($event)"
        @nextPage="nextPage($event)"
      >
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </template>
  </Card>
</template>
