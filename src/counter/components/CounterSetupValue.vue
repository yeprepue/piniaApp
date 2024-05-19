
<script setup lang="ts">
import { useCounterSetupStore } from '@/store/CounterSetup';

const counter = useCounterSetupStore();
</script>
<template>
    <h1>El valor es: {{ counter.count }}</h1>
    <h3>Último cambio:  {{ counter.lastChange  }}</h3>
</template>
<style scoped>

    </style>