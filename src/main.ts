import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCookies from "vue-cookies"
import {firebaseApp} from "../firebase"

Vue.config.productionTip = false
firebaseApp;
Vue.use(VueCookies);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
