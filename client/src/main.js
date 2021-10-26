import { createApp } from "vue";
import Vue from 'vue'
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import VueAxios from 'vue-axios';


import PrimeVue from 'primevue/config';//icons
import PrimeVueButton from 'primevue/button';
import PrimeVueInputText from 'primevue/inputtext';
import PrimeVueDialog from 'primevue/dialog';
import PrimeVueChip from 'primevue/chip';
import PrimeVueMultiSelect from 'primevue/multiselect';



import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'



let app = createApp(App);
    
app.use(VueAxios, axios)

app.use(router);

app.use(PrimeVue);

app.component('PrimeVueInputText', PrimeVueInputText);
app.component('PrimeVueButton', PrimeVueButton);
app.component('PrimeVueDialog', PrimeVueDialog);
app.component('PrimeVueChip', PrimeVueChip);
app.component('PrimeVueMultiSelect', PrimeVueMultiSelect);

app.mount("#app");


