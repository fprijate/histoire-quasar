<script setup>
import { ref } from 'vue';
const checked = ref(false);
</script>

<template>
  <Story
    title="QUASAR COMPONENTS/FORM COMPONENTS/Checkbox"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Standard">
      <q-checkbox
        v-model="checked"
        label="check me"

      />
    </Variant>
    <Variant title="Custom icons">
      <q-checkbox
        v-model="checked"
        checked-icon="star"
        unchecked-icon="star_border"
        indeterminate-icon="help"
      />
    </Variant>
    <Variant title="Coloring"> 
      <q-checkbox keep-color v-model="checked" label="Orange" color="orange" />
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Checkbox](https://quasar.dev/vue-components/checkbox).
</docs>

<style lang="scss" scooped>
.div {
  border: 1px solid;
  padding: 5px;
  margin-bottom: 15px;
}
</style>
