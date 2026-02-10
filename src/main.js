import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import i18n from './i18n/index.js';
import './assets/scss/main.scss'

createApp(App)
  .use(i18n)
  .use(router)
  .use(store)
  .mount('#app');