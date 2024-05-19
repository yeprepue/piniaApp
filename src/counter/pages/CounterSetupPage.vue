<script setup>
import { useCounterSetupStore } from "../../store/CounterSetup";
import { storeToRefs } from "pinia";
import CounterSetupValue from "../components/CounterSetupValue.vue";


// Crear instancia de la tienda
const counterStore = useCounterSetupStore();
const { count, squaredCount } = storeToRefs(counterStore);

// Funciones de la tienda
const increment = counterStore.increment;
const incrementBy = counterStore.incrementBy;
</script>

<template>
  <h1>Pinia Setup</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squaredCount }}</h4>
  <br />
  <button @click="increment">+1</button>
  <button @click="incrementBy(2)">+2</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="counterStore.$reset()">Reset</button>
  <br>
  <CounterSetupValue />
</template>

<style scoped>
button {
  margin-right: 5px;
}
</style>
