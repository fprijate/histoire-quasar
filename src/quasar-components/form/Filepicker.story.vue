<script setup>
import { ref } from 'vue';
const model = ref(false);
</script>

<template>
  <Story
    title="QUASAR COMPONENTS/FORM COMPONENTS/File Picker"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Standard">
      <q-file outlined v-model="model" label="Outlined" style="width: 400px" />
    </Variant>
    <Variant title="Decorators">
      <q-file
        filled
        bottom-slots
        v-model="model"
        label="Label"
        counter
        style="width: 400px"
      >
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop.prevent />
        </template>
        <template v-slot:append>
          <q-icon
            name="close"
            @click.stop.prevent="model = null"
            class="cursor-pointer"
          />
        </template>

        <template v-slot:hint> Field hint </template>
      </q-file>
    </Variant>
    <Variant title="Coloring">
      <q-file
        color="grey-3"
        outlined
        label-color="orange"
        v-model="model"
        label="Label"
        style="width: 400px"
      >
        <template v-slot:append>
          <q-icon name="attachment" color="orange" />
        </template>
      </q-file>
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[File Picker](https://quasar.dev/vue-components/file-picker).
</docs>

<style lang="scss" scooped>
.div {
  border: 1px solid;
  padding: 5px;
  margin-bottom: 15px;
}
</style>
