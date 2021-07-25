<template>
  <footer>
    <a href="https://programming301.com" target="_blank">Programming301</a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
});
</script>

<style scoped>
footer {
  width: 100%;
  height: 40px;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 40px;
  background-color: grey;
}

a {
  color: black;
}
</style>
