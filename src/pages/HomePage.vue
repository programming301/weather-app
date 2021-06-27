<template>
  <div class="home-page">
    <app-logo size="large"></app-logo>
    <search-input></search-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLogo from '@/components/AppLogo.vue';
import SearchInput from '@/components/SearchInput.vue';

export default defineComponent({
  name: 'HomePage',
  components: { AppLogo, SearchInput },
});
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 100px;
  padding-top: 10%;
}
</style>
