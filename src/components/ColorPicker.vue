<template>
  <q-card class="my-card">
    <div class="q-pa-md row q-gutter-xl">
      <q-color v-model="hex" no-header-tabs class="my-picker" />
      <q-color v-model="hex" no-footer class="my-picker" />
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const hex = ref('#FF00FF');
</script>

<style lang="scss" scooped>
.my-card {
  width: 100%;
  max-width: 800px;
  padding: 30px;
}
</style>