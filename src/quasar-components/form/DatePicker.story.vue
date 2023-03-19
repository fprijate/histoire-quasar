<script setup>
import { ref } from 'vue';
const date = ref('2019/02/01');
</script>

<template>
  <Story
    title="QUASAR COMPONENTS/FORM COMPONENTS/Date Picker"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Basic">
      <q-date v-model="date" />
    </Variant>
    <Variant title="Minimal">
      <q-date v-model="date" minimal />
    </Variant>
    <Variant title="Landscape">
      <q-date v-model="date" landscape />
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Date Picker](https://quasar.dev/vue-components/date).
</docs>

<style lang="scss" scooped>
.div {
  border: 1px solid;
  padding: 5px;
  margin-bottom: 15px;
}
</style>
