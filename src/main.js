import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

//Prime Template
import PrimeVue from "primevue/config";

import "primevue/resources/themes/lara-light-purple/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
//prime flex
import "primeflex/primeflex.css";

// component PrimVue ตัวเสริมที่ใช้บ่อยๆ ให้อัพที่นี่
import ConfirmationService from "primevue/confirmationservice";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
import Card from "primevue/card";
import Dropdown from "primevue/dropdown";
import InputMask from "primevue/inputmask";

const app = createApp(App);

app.use(ConfirmationService);
app.use(ToastService);
app.use(PrimeVue);
app.use(router);

app.component("ConfirmDialog", ConfirmDialog);
app.component("Toast", Toast);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Image", Image);
app.component("Card", Card);
app.component("Dropdown", Dropdown);
app.component("InputMask", InputMask);

app.mount("#app");
