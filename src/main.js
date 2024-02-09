import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";

//Prime Template
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-purple/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
//prime flex
import "primeflex/primeflex.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";

const app = createApp(App);

app.use(PrimeVue);

app.component("InputText", InputText);
app.component("Button", Button);

app.mount("#app");
