import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

import App from './App.vue';
import router from './router';
import store from './store';
import firebaseConfig from './services/firebase';
import filterDate from './filters/date.filter';

Vue.use(ElementUI, { locale });
Vue.filter('filterDate', filterDate);
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
