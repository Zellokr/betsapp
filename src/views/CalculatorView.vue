<template>
    <div class="flex justify-center m-4 p-4">
        <h1 class="font-sans text-3xl subpixel-antialiased font-bold ">
            Calculadora Surebets
        </h1>
    </div>
    <div class="flex items-center justify-evenly flex-wrap">
        <Calculator />
        <div class="w-2/3 lg:w-1/3">
            <DataTable
                :data="cuotas"
            />
        </div>
    </div>
</template>

<script setup>
import { cuotas } from '@/utils';

import DataTable from '@/components/DataTable.vue';
import Calculator from '@/components/Calculator.vue';
</script>

<style scoped></style>
