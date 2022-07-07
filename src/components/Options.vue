<script setup lang="ts">
import type { FormData } from "@/interfaces/formData";

const data: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
};

defineEmits(["next-page"]);
</script>

<template>
  <Card>
    <template #title> Personal Information </template>
    <template #subtitle> Enter your personal information </template>

    <template #content>
      <div class="p-fluid">
        <div class="field">
          <label for="firstname">Firstname</label>
          <InputText id="firstname" v-model="data.firstName" />
        </div>

        <div class="field">
          <label for="lastname">Lastname</label>
          <InputText id="lastname" v-model="data.lastName" />
        </div>

        <div class="field">
          <label for="age">Age</label>
          <InputNumber id="age" v-model="data.age" />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="flex justify-content-end">
        <Button
          label="Next"
          @click="
            $emit('next-page', {
              data,
              pageIndex: 0,
            })
          "
          icon="pi pi-angle-right"
          iconPos="right"
        />
      </div>
    </template>
  </Card>
</template>
