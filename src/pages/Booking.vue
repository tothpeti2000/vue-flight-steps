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
]);

const formObject = ref({});

const nextPage = (event: any) => {
  console.log(event);

  for (let field in event.formData) {
    //formObject.value[field] = event.formData[field];
  }

  router.push(steps.value[event.pageIndex + 1].to);
};

const prevPage = (event: any) => {
  router.push(steps.value[event.pageIndex - 1].to);
};
</script>

<template>
  <Card class="mb-2">
    <template #content>
      <Steps :model="steps" :readonly="true" />
    </template>
  </Card>

  <RouterView
    v-slot="{ Component }"
    :formData="formObject"
    @prevPage="prevPage($event)"
    @nextPage="nextPage($event)"
  >
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>
