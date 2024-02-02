// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import "@headlessui/vue";
import "./style.css";
import router from "./router/router";
import PrimeVue from "primevue/config";
// main.js or equivalent
import "primevue/resources/themes/saga-blue/theme.css"; // Theme
import "primevue/resources/primevue.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons

import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component("Dropdown", Dropdown);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);

app.mount("#app");
