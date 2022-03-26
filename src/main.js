import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import App from "@/layouts/Default.vue";
import router from "@/router";
// import apiCalls from "@/api";
// import functions from "@/functions";

const app = createApp(App);

export const apiUrl = "https://api.coindesk.com/v1";
app.config.globalProperties.axios = axios.create({
  baseURL: apiUrl,
});

app.use(createPinia());
app.use(router);

// app.mixin(apiCalls);
// app.mixin(functions);

app.mount("#app");
