<template>
    <div class="h-screen">
        <Navbar />
        <div class="w-full">
            <router-view />
        </div>
    </div>
</template>

<script setup>

import Navbar from '@/components/Navbar.vue';

</script>

<style scoped>

.routerViewHeight{
    height: calc(100%-2.5rem);
}

</style>
