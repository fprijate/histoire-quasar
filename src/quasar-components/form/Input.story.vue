<script setup>
import { variableDeclaration } from '@babel/types';
import { ref } from 'vue';
const text = ref('');
</script>

<template>
  <Story
    title="QUASAR COMPONENTS/FORM COMPONENTS/Input"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Filled">
      <q-input
        color="teal"
        filled
        v-model="text"
        label="Label"
        style="width: 400px"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
    </Variant>

    <Variant title="Outlined">
      <q-input
        outlined
        bottom-slots
        v-model="text"
        label="Label"
        counter
        maxlength="12"
        style="width: 400px"        
      >
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:hint> Field hint </template>

        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input>
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Input](https://quasar.dev/vue-components/input).
</docs>
