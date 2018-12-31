import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css';

import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
Vue.use(SequentialEntrance);

// import VueProgressiveImage from 'vue-progressive-image'
// Vue.use(VueProgressiveImage);

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
