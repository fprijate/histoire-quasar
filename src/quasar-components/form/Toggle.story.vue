<script setup>
import { ref } from 'vue';
const value = ref(false);
</script>

<template>
  <Story
    title="QUASAR COMPONENTS/FORM COMPONENTS/Toggle"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Basic">
      <q-toggle v-model="value" color="green" />
    </Variant>
    <Variant title="With labels">
      <q-toggle v-model="value" label="On Left" left-label />
    </Variant>
    <Variant title="With icons">
      <q-toggle v-model="value" icon="alarm" />
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Toggle](https://quasar.dev/vue-components/toggle).
</docs>

<style lang="scss" scooped>
.div {
  border: 1px solid;
  padding: 5px;
  margin-bottom: 15px;
}
</style>
