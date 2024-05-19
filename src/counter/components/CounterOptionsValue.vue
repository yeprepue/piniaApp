
<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/CounterOptions';

const counter = useCounterOptionsStore();
</script>
<template>
    <h1>El valor es: {{ counter.count }}</h1>
    <h3>Último cambio:  {{ counter.lastChange  }}</h3>
</template>
<style scoped>

    </style>