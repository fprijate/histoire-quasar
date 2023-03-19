<script setup lang="ts">
import { ref } from 'vue';
const lorem = ref(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
</script>

<template>
  <Story title="QUASAR COMPONENTS/Card">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Card](https://quasar.dev/vue-components/card).
</docs>

<style lang="scss" scooped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
