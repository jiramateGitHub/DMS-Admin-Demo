import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Chartist from "chartist";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import { VuejsDatatableFactory } from 'vuejs-datatable';

Vue.use(VuejsDatatableFactory);

import routes from "./routes/routes";
const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: "active",
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});



import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";
Vue.component('v-select', vSelect)

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
    store,
    el: "#app",
    render: h => h(App),
    router,
    data: {
        Chartist: Chartist
    },
})