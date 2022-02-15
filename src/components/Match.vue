<template>
    <div class="bg-blue-600 w-full px-2 py-1 flex justify-between">
        <span
            class="font-bold text-white cursor-pointer hover:text-yellow-300"
        >  Markets</span>
    </div>

    <div
        v-for="(value, key) in markets"
        :key="key"
    >
        <div class="flex flex-col w-full justify-evenly items-center">
            <div
                class="font-bold cursor-pointer bg-gray-500 w-full flex px-2"
                @click="getDataFromNestedJson(value)"
            >
                {{ key }}
            </div>
            {{ }}
        </div>
    </div>
</template>

<script setup>
import {
    defineProps
} from 'vue';
// import Half from '@/components/Half.vue';

defineProps({
    markets: {
        type: Object,
        required: true
    }
});

const getDataFromNestedJson = markets => {
    const half = [];
    Object.entries(markets).forEach(k => {
        console.log(k[1]);
        half.push(k[1]);
    });

    console.log(half);
};

// const check = ref(true);
// const half1Data = ref([]);

// const iterator = half => {
//     if (check.value) {
//         const keys = Object.keys(half);
//         keys.forEach(key => {
//             console.log(half[key]);
//             half1Data.value.push(half[key]);
//         });
//         check.value = false;
//     }
// };

</script>

<style scoped></style>
