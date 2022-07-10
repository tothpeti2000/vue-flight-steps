<script setup lang="ts">
import { reactive } from "vue";
import { required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const data = reactive({
  firstName: "",
  lastName: "",
});

const schema = {
  firstName: { required },
  lastName: { required },
};

const v$ = useVuelidate(schema, data);

const emit = defineEmits(["next-page"]);

const validateForm = async () => {
  const isValid = await v$.value.$validate();
  isValid && emit("next-page", { pageIdx: 0 });
};
</script>

<template>
  <div>
    <InputText v-model="v$.firstName.$model" />
    <div v-for="error of v$.firstName.$errors" :key="error.$uid">
      <div>{{ error.$message }}</div>
    </div>
  </div>

  <div>
    <InputText v-model="v$.lastName.$model" />
    <div v-for="error of v$.lastName.$errors" :key="error.$uid">
      <div>{{ error.$message }}</div>
    </div>
  </div>

  <StepButtons @nextPage="validateForm" :idx="0" direction="next" />
</template>
