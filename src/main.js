import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAyaEwaAoyIIMuSvtNj0Jlqj6l7rnvxNAU",
  authDomain: "jetlight-signup-form.firebaseapp.com",
  projectId: "jetlight-signup-form",
  storageBucket: "jetlight-signup-form.appspot.com",
  messagingSenderId: "1062722972108",
  appId: "1:1062722972108:web:e5605652d920be63cc5569"
};

firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
