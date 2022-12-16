import Vue from "vue";
import App from "./App.vue";
import {
  BootstrapVue,
  IconsPlugin,
  CardPlugin,
  FormGroupPlugin,
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import Router from "vue-router";
import routes from "./router";

(Vue.config.productionTip = false),
  Vue.use(BootstrapVue),
  Vue.use(IconsPlugin),
  Vue.use(CardPlugin),
  Vue.use(VueRouter),
  Vue.use(Router);
Vue.use(FormGroupPlugin);

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
