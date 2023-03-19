<template>
  <q-card class="my-card">    
    <div class="q-gutter-md row items-start">
      <q-date v-model="date" />
      <q-date v-model="date" minimal />
    </div>
</q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref('2019/02/01');
</script>


<style lang="scss" scooped>
.my-card {
  width: 100%;
  max-width: 800px;
  padding: 30px;
}
</style>