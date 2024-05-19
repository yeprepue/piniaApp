import { defineStore } from "pinia";

// Definir el estado de la tienda con tipado
interface CounterOptionsState {
    count: number;
    lastChange?: Date;  
}

// Definir y exportar la tienda
export const useCounterOptionsStore = defineStore('counterOptions', {
    state: (): CounterOptionsState => ({
        count: 0,
        lastChange: undefined,
    }),
    getters: {
        squaredCount: (state): number => state.count * state.count,
    },
    actions: {
        incrementBy(value: number) {
            this.count += value;
            this.lastChange = new Date();
        },
        increment() {
            this.incrementBy(1);
        },
        reset() {
            this.count = 0;
            this.lastChange = undefined;
        }
    }
});
