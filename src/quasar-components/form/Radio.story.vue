<script setup>
import { ref } from 'vue';
const shape = ref(false);
const color = ref(false);
</script>

<template>
  <Story
    title="QUASAR COMPONENTS/FORM COMPONENTS/Radio"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Standard">
      <q-radio v-model="shape" val="line" label="Line" />
    </Variant>

    <Variant title="Coloring">
      <q-radio keep-color v-model="color" val="red" label="Red" color="red" />
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Radio](https://quasar.dev/vue-components/radio).
</docs>

<style lang="scss" scooped>
.div {
  border: 1px solid;
  padding: 5px;
  margin-bottom: 15px;
}
</style>
