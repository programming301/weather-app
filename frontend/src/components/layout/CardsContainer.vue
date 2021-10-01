<template>
  <div class="cards-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardsContainer',
});
</script>

<style scoped>
.cards-container {
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  justify-content: space-around;
}
</style>
