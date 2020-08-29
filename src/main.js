// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


/* use iview*/
import ViewUI from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

/*全局加载axios拦截器---配置axios的原型链*/
import './axios/axios'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
