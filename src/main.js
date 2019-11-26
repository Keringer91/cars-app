import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import AppCars from './components/AppCars.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { name: "index", path: "/", redirect: "/cars" },
  { name: "cars", path: "/cars", component: AppCars },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");