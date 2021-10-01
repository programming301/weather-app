import { createApp } from 'vue';
import AppLogo from '@/components/shared/AppLogo.vue';
import CardsContainer from '@/components/layout/CardsContainer.vue';
import BaseCard from '@/components/shared/BaseCard.vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .component('AppLogo', AppLogo)
  .component('CardsContainer', CardsContainer)
  .component('BaseCard', BaseCard)
  .use(router)
  .mount('#app');
