import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes'

import App from '@/components/app.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    components: { App },
    router
});
