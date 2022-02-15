import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
import '@/assets/css/tailwind.css';
import router from './router';

const emitter = mitt();

createApp(App).provide('emitter', emitter).use(router).mount('#app');
