import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";

import BentoWrapper from "./components/bento/BentoWrapper.vue";
import Contact from "./components/contact/Contact.vue";
import Projets from "./components/projets/Projets.vue";
import About from "./components/About/About.vue";

const routes = [
  { path: "/", component: BentoWrapper },
  { path: "/contact", component: Contact },
  { path: "/projets", component: Projets },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
