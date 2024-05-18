<script setup>
import { useCounterOptionsStore } from "../../store/CounterOptions";
const counterOptions = useCounterOptionsStore();
</script>

<template>
    <h1>Pinia Options</h1>
  <h4>Counter 1 Page: {{ counterOptions.count }}</h4>
  <h4>Square: {{ counterOptions.squaredCount }}</h4>
</template>

<style scoped></style>
