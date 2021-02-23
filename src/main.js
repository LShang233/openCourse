// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import axios from 'axios'

Vue.use(ViewUI);

Vue.prototype.$http = axios;
Vue.prototype.domain = 'http://39.98.41.126:30004'
Vue.config.productionTip = false;

//  忽略警告
Vue.config.silent = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
