<template>
  <app-header></app-header>
  <router-view/>
  <app-footer></app-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default defineComponent({
  name: 'App',
  components: { AppHeader, AppFooter },
});
</script>

<style>
body {
  margin: 0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
