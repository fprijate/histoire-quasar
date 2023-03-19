<script setup lang="ts">
import { ref } from 'vue';
import {} from 'histoire';

const model = ref(null);
const options = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']);
</script>

<template>
  <Story
    title="QUASAR COMPONENTS/FORM COMPONENTS/Select"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Standard">
      <q-select v-model="model" :options="options" label="Standard" style="width: 400px" />
    </Variant>

    <Variant title="Decorators">
      <q-select
        outlined
        v-model="model"
        :options="options"
        style="width: 400px"
      >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-select>
    </Variant>

    <Variant title="Coloring">
      <q-select
        clearable
        color="orange"
        standout
        bottom-slots
        v-model="model"
        :options="options"
        label="Label"
        counter
        style="width: 400px"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="favorite" />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-select>
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Select](https://quasar.dev/vue-components/select).
</docs>
