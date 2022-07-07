<script setup lang="ts">
import type { FormData } from "@/interfaces/formData";

const data: FormData = {
  firstName: "",
  lastName: "",
  age: 0,
};
</script>

<template>
  <Card>
    <template v-slot:title> Personal Information </template>
    <template v-slot:subtitle> Enter your personal information </template>

    <template v-slot:content>
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

    <template v-slot:footer>
      <div class="grid grid-nogutter justify-content-between">
        <i></i>
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
