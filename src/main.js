import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import VueCodemirror from "vue-codemirror"
import axios from "axios"

Vue.prototype.$http = axios
// require styles
import "codemirror/lib/codemirror.css"

// require more codemirror resource...

// you can set default global options and events when use
Vue.use(VueCodemirror)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
