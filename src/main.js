// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ViewUI from 'view-design'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import 'view-design/dist/styles/iview.css'
import axios from 'axios'

Vue.use(iView)
// Vue.use(ViewUI);

Vue.prototype.$http = axios;
Vue.prototype.domain = "http://119.3.228.123/classes"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})