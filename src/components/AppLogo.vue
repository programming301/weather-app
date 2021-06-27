<template>
  <img :class="['logo', size]" alt="App logo" src="../assets/logo.png">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import allowedSizes from '@/consts/allowed-sizes.const';

export default defineComponent({
  props: {
    size: {
      type: String,
      required: false,
      default: 'small',
      validator: (value: string) => allowedSizes.includes(value),
    },
  },
});
</script>

<style scoped>
.logo.small {
  width: 32px;
}

.logo.medium {
  width: 64px;
}

.logo.large {
  width: 128px;
}
</style>
