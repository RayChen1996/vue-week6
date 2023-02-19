import { createApp } from "vue";
import { createPinia } from "pinia";

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from "./App.vue";
import router from "./router";
//引入SweetAlert及其附帶的css
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "./assets/all.scss"


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios)
app.use(VueSweetalert2)
// app.component('VForm', VeeValidate.Form);
// app.component('VField', VeeValidate.Field);
// app.component('ErrorMessage', VeeValidate.ErrorMessage);
app.mount("#app");
