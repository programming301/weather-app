<template>
  <header>
    <app-logo v-if="showLogo" size="small"></app-logo>
    <div v-if="currentCity">{{ currentCity }}</div>
    <div v-else class="app-name">{{ appName }}</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import appName from '@/consts/app-name.const';

export default defineComponent({
  name: 'AppHeader',
  data() {
    return {
      appName,
    };
  },
  props: {
    currentCity: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    showLogo(): boolean {
      return this.$route.fullPath !== '/';
    },
  },
});
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  text-align: center;
  line-height: 60px;
  background-color: grey;
}

img {
  height: 32px;
  position: absolute;
  left: 40px;
  top: 14px;
}

.app-name {
  font-weight: bold;
}
</style>
