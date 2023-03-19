<script setup>
import { ref } from 'vue';

const hex = ref('#FF00FF');
</script>

<template>
  <Story  title="QUASAR COMPONENTS/Color Picker">
    <q-color v-model="hex" no-header class="my-picker" />
  </Story>
</template>

<docs lang="md">
  ### Quasar documentation
  
  [Color Picker](https://quasar.dev/vue-components/color-picker).
</docs>

<style lang="scss" scooped>
.my-picker {
  width: 250px;
}
</style>
