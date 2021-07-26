import { createApp } from 'vue';
import AppLogo from '@/components/shared/AppLogo.vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .component('AppLogo', AppLogo)
  .use(router)
  .mount('#app');
