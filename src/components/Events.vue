<template>
    <div
        v-if="filter.length > 0"
        class="flex flex-col w-full bg-blue-400 overflow-y-auto h-screen scroller"
    >
        <div
            v-for="(item,index) in filter"
            :key="index"
        >
            <div class="flex flex-col justify-center items-center">
                <div class="bg-blue-600 w-full px-2 py-1 flex justify-between">
                    <span
                        class="font-bold text-white cursor-pointer hover:text-yellow-300"
                    >  {{ `${item.league} - ${item.team1} vs ${item.team2}` }}</span>
                    <span class="font-bold text-white cursor-pointer"> {{ item.date_start }}</span>
                </div>
                <div class="flex flex-wrap justify-evenly w-2/6  my-1 py-1">
                    <div>
                        <span class="font-bold">{{ item.team1 }}</span>
                    </div>
                    <div>
                        <span class="font-bold">VS</span>
                    </div>
                    <div>
                        <span class="font-bold">{{ item.team2 }}</span>
                    </div>
                </div>
            </div>

            <Match :markets="item.markets" />
        </div>
    </div>
    <div
        v-else
        class="flex flex-col w-full bg-blue-400 overflow-y-auto h-screen scroller"
    >
        <div
            v-for="(item,index) in eventsMatch"
            :key="index"
        >
            <div class="flex flex-col justify-center items-center">
                <div class="bg-blue-600 w-full px-2 py-1">
                    <span class="font-bold text-white cursor-pointer  hover:text-yellow-300"> {{ item.title }}</span>
                </div>
                <div class="grid grid-cols-3 gap-1 w-3/6 justify-items-center my-1 py-1">
                    <div>
                        <span class="font-bold">{{ item.team1 }}</span>
                    </div>
                    <div>
                        <span class="font-bold">VS</span>
                    </div>
                    <div>
                        <span class="font-bold">{{ item.team2 }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
    inject, ref
} from 'vue';
import Match from '@/components/Match.vue';
import { useFetch } from '@/services/API';

const config = { headers: { Authorization: `bearer ${process.env.VUE_APP_TOKEN}` } };
const { data: eventsMatch } = useFetch('https://api.betting-api.com/marathonbet/football/line/all', config);
const emitter = inject('emitter');

const filter = ref([]);

emitter.on('leagueLoaded', ({ region, league }) => {
    eventsMatch.value.forEach(element => {
        element.date_start = new Date(element.date_start).toUTCString();
    });
    filter.value = eventsMatch.value.filter(element => element.league === league && element.region === region);
});

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
}</style>
