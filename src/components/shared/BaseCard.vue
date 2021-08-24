<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseCard',
});
</script>

<style scoped>
.base-card {
  background-color: #eaeaea;
  border-radius: 20px;
  box-shadow: 5px 5px #989898;
  padding: 20px;
  width: 200px;
  height: 200px;
}
</style>
