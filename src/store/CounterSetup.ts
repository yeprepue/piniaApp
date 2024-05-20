import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterSetupStore = defineStore('CounterSetup', () => {
    const count = ref<number>(0);
    const lastChange = ref<Date>();
    
    const incrementBy = (value: number) => {
        count.value += value;
        lastChange.value = new Date();
    }

    const reset = () => {
        count.value = 0;
        lastChange.value = undefined;
    };

    return  {
        // Propiedades
        count,
        lastChange,

        // Getters
        squaredCount: computed(() => count.value * count.value),

        // Acciones
        incrementBy,
        increment: () => incrementBy(1),
        $reset: reset
    }
});
