<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  idx: number;
  direction: "next" | "back" | "both";
}>();

defineEmits(["prev-page", "next-page"]);

const justify = computed(() => {
  const option =
    props.direction === "next"
      ? "end"
      : props.direction === "back"
      ? "start"
      : "between";

  return `justify-content-${option}`;
});
</script>

<template>
  <div class="flex flex-1" :class="justify">
    <Button
      v-if="direction !== 'next'"
      label="Prev"
      @click="$emit('prev-page', { pageIdx: idx })"
    />
    <Button
      v-if="direction !== 'back'"
      label="Next"
      @click="$emit('next-page', { pageIdx: idx })"
    />
  </div>
</template>
