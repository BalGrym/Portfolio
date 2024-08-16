import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import BentoWrapper from "./components/bento/BentoWrapper.vue";
import Contact from "./components/contact/Contact.vue";

const routes = [
  { path: "/", component: BentoWrapper },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
