<template>
  <h1>Passengers</h1>

  <StepButtons
    @prevPage="$emit('prev-page', { pageIdx: 2 })"
    @nextPage="$emit('next-page', { pageIdx: 2 })"
    :idx="2"
    direction="back"
  />
</template>
