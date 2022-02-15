<template>
    <div class="grid grid-cols-2">
        <div class="bg-gray-900  border-b border-gray-100  border-solid w-full h-full text-center text-white font-semibold pb-1">
            Cuota 1
        </div>
        <div class="bg-gray-900 border-b  border-gray-100 border-solid w-full h-full text-center text-white font-semibold pb-1">
            Cuota 2
        </div>
    </div>
    <div class="grid grid-cols-2 h-64 lg:h-96 overflow-y-auto bg-[#2A2B24] border border-gray-600 border-solid place-items-center">
        <template
            v-for="({cuot1,cuot2},index) in data"
            :key="index"
        >
            <div
                class="border-b border-gray-100  border-solid w-full h-full text-center text-white font-semibold pb-1"
            >
                {{ cuot1 }}
            </div>
            <div
                class="border-b  border-gray-100  border-solid w-full h-full text-center text-white font-semibold pb-1"
            >
                {{ cuot2 }}
            </div>
        </template>
    </div>
</template>

<script setup>
import {
    defineProps
} from 'vue';

defineProps({
    data: {
        type: Array,
        required: true
    }

});

</script>

<style scoped>

</style>
