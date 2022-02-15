<template>
    <div
        v-for="(value,key) in half"
        :key="key"
    >
        {{ value }}
    </div>
</template>

<script setup>
import {
    defineProps
} from 'vue';

defineProps({
    half: {
        type: Object,
        required: true
    }
});

</script>

<style scoped></style>
