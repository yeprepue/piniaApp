import { defineStore } from "pinia";

interface CounterOptionsState {
    count: number;
    lastChage?: Date;

}

export const useCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({
        count: 0,
        lastChage: undefined,
    } as CounterOptionsState),
    getters: {
        squaredCount: (state) => state.count * state.count,
    },

    actions: {
        incrementBy(value: number) {
            this.count += value;
            this.lastChage = new Date();
        },
        incremet() {
            this.incrementBy(1);
        }

    }
});