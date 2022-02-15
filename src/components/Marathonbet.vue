<template>
    <div
        v-if="data"
        id="scrollSideBar"
        class="flex flex-col w-full h-screen overflow-y-auto scroller"
    >
        <div class="flex justify-center items-center">
            <h1 class="text-2xl font-extrabold tracking-tight text-white m-4">
                Marathonbet
            </h1>
        </div>
        <div
            v-for="(item,index1) in countryLeague"
            :key="index1"
        >
            <div class="px-1 my-1 mr-2">
                <div
                    class="bg-green-700 text-white p-4 font-bold rounded cursor-pointer"
                    @click="handleOpen(index1)"
                >
                    {{ item.region }}
                </div>
                <div
                    class="mt-4 border-2 p-2 rounded"
                    :class="id === index1 ? 'd-block' : 'hidden' "
                >
                    <div
                        v-for="(league,index2) in item.league"
                        :key="index2"
                        class="font-bold text-white"
                    >
                        <div

                            class="flex justify-between"
                            @click="getLeagueAndRegion(league,item.region)"
                        >
                            <span class="hover:text-red-400 cursor-pointer">{{ league }}</span>
                        </div>
                    </div>

                    <slot />
                </div>
            </div>
        </div>
    </div>
    <div
        v-if="error"
    >
        <div

            class="flex justify-center items-center w-full h-full bg-red-500 py-2"
        >
            <div class="h-5 w-5" />
            <span class="px-2 font-bold text-lg text-white"> {{ error }}</span>
        </div>
    </div>
    <div
        v-if="loading"
    >
        <div

            class="flex justify-center items-center w-full h-full bg-purple-500 py-2"
        >
            <div class="h-5 w-5 loader animate-spin" />
            <span class="px-2 font-bold text-lg text-white"> Processing </span>
        </div>
    </div>
</template>

<script setup>
import {
    ref, toRefs, watch,
    inject
} from 'vue';
import { useFetch } from '@/services/API';
import { orderLeaguesByCountry } from '@/utils';

const id = ref(null);
const emitter = inject('emitter');
const config = { headers: { Authorization: `bearer ${process.env.VUE_APP_TOKEN}` } };
const leagues = useFetch('https://api.betting-api.com/marathonbet/football/line/leagues', config);

const countryLeague = ref([]);
const { data, error, loading } = toRefs(leagues);

const handleOpen = idCheck => {
    id.value = idCheck === id.value ? null : idCheck;
};

watch(data, () => {
    countryLeague.value = orderLeaguesByCountry(data);
});

// watch(eventsMatch, () => {
//      console.log(eventsMatch);
// });

const getLeagueAndRegion = (league, region) => {
    emitter.emit('leagueLoaded', { league, region });
};

</script>

<style scoped>

.scroller {

  overflow-y: scroll;
  scrollbar-color: rgb(54, 66, 84) rgb(116, 123, 116);
  scrollbar-width: thin;
}

.scroller::-webkit-scrollbar {
    width: 0.45rem;
}

.scroller::-webkit-scrollbar-track-piece  {
    background-color: rgb(116, 123, 116);
}

.scroller::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: rgb(54, 66, 84);
}

.loader{
    border: solid 3px #cfd0d1;
    border-bottom-color: #FFF;
    border-radius: 50%;

}
</style>
