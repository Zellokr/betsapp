<template>
    <div class="flex items-center justify-evenly flex-wrap">
        <div class="px-8 m-4">
            <div
                class="flex flex-col
                bg-[#2A2B24] text-white font-bold rounded-lg border-black border-solid border-4 p-8 shadow-md"
            >
                <div class="flex justify-evenly items-center">
                    <span class="w-1/4">
                        Inversión:
                    </span>
                    <input
                        v-model="invest"
                        type="number"
                        class="px-1 py-1 m-4 rounded w-1/4 placeholder-blue-300 border-blue-200 border-2 border-solid font-bold text-gray-700"
                    >
                </div>
                <div class="flex justify-evenly items-center">
                    <span class="w-1/4">
                        Cuota 1:
                    </span>
                    <input
                        v-model="value1"
                        type="number"
                        class="px-1 py-1 m-4 rounded w-1/4 placeholder-blue-300 border-blue-200 border-2 border-solid font-bold text-gray-700"
                    >
                </div>
                <div class="flex justify-evenly items-center">
                    <span class="w-1/4">
                        Cuota 2:
                    </span>
                    <input
                        v-model="value2"
                        type="number"
                        class="px-1 py-1 m-4 rounded w-1/4 placeholder-blue-300 border-blue-200 border-2 border-solid font-bold text-gray-700"
                    >
                </div>
                <div class="flex justify-center">
                    <button
                        class="hover:bg-blue-600  my-5 rounded border border-solid border-blue-500 bg-blue-700 w-2/4 p-2 font-sans font-semibold"
                        @click="calculateMoneyBet"
                    >
                        Calcular
                    </button>
                </div>
                <div
                    v-if="sur === true"
                    class="flex flex-col justify-center"
                >
                    <div class="flex flex-col m-2">
                        <div class="flex justify-center my-2">
                            <h1 class="text-green-600 font-bold text-2xl">
                                ¡SUREBET ENCONTRADA!
                            </h1>
                        </div>
                        <div class="flex justify-center my-2">
                            <img
                                src="https://images.emojiterra.com/google/android-11/512px/1f911.png"
                                class="w-1/12 "
                                alt=""
                            >
                        </div>
                    </div>
                    <div class="flex justify-between my-2 px-5 w-full">
                        <div
                            class="font-weight-bold"
                        >
                            Para la C1 debes apostar:
                        </div>
                        <b class="text-red-600">{{ bet1 }}€</b>
                    </div>
                    <div class="flex justify-between my-2 px-5 w-full">
                        <div
                            class="font-weight-bold"
                        >
                            Para la C2 debes apostar:
                        </div>
                        <b class="text-red-600">{{ bet2 }}€</b>
                    </div>
                    <div class="border-b border-black my-4" />
                    <div class="flex justify-evenly my-2 px-5">
                        <span class="text-3xl">BENEFICIO  </span>  <span class="text-green-600 text-3xl">{{ earning }}€</span>
                    </div>
                </div>
                <div v-else-if="sur === null" />
                <div
                    v-else
                    class="flex justify-center m-5 text-2xl text-red-600"
                >
                    ¡SUREBET NO ENCONTRADA!
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const invest = ref(0);
const prob = ref(0);
const value1 = ref(0);
const value2 = ref(0);
const sur = ref(null);
const messageError = ref('');
const bet1 = ref(0);
const bet2 = ref(0);
const total = ref(0);
const earning = ref(0);

const trunc = (x, posiciones = 2) => {
    const s = ref(x.toString());
    const decimalLength = s.value.indexOf('.') + 1;
    const numStr = s.value.substr(0, decimalLength + posiciones);
    return Number(numStr);
};

const calculateMoneyBet = () => {
    if (value1.value !== 0 && value2.value !== 0) {
        prob.value = 1 / value1.value + 1 / value2.value;
        prob.value = trunc(prob.value, 2);
        const sum = (1 / prob.value) * invest.value;
        if (prob.value < 1) {
            sur.value = true;
            bet1.value = ((1 / value1.value) * sum).toFixed(2);
            bet2.value = ((1 / value2.value) * sum).toFixed(2);
            earning.value = (bet1.value * value1.value - invest.value).toFixed(2);
            total.value = bet1.value * value1.value;
            total.value = total.value.toFixed(2);
        } else {
            sur.value = false;
        }
    } else {
        sur.value = null;
        messageError.value = 'Inserta bien los importes';
    }
};

</script>

<style scoped>
.table {
  width: 100%;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
