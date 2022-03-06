import Vue from "vue"
import App from "./App.vue"
import VueTypedJs from "vue-typed-js"
import AOS from "aos"
import "aos/dist/aos.css"

Vue.use(VueTypedJs)
Vue.use(AOS)
AOS.init()
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")
