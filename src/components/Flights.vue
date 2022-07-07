<script setup lang="ts">
import type { FormData } from "@/interfaces/formData";

const formData: FormData | any = {};
defineEmits(["prev-page", "complete"]);
</script>

<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> Confirmation </template>

      <template v-slot:content>
        <div class="field col-12">
          <label for="class">Name</label>
          <b
            >{{ formData.firstName ? formData.firstName : "-" }}
            {{ formData.lastName ? formData.lastName : "-" }}</b
          >
        </div>
        <div class="field col-12">
          <label for="Age">Age</label>
          <b>{{ formData.age ? formData.age : "-" }}</b>
        </div>
      </template>

      <template v-slot:footer>
        <div class="grid grid-nogutter justify-content-between">
          <Button
            label="Back"
            @click="$emit('prev-page', { pageIndex: 1 })"
            icon="pi pi-angle-left"
          />
          <Button
            label="Complete"
            @click="$emit('complete')"
            icon="pi pi-check"
            iconPos="right"
            class="p-button-success"
          />
        </div>
      </template>
    </Card>
  </div>
</template>
