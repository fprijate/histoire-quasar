<script setup>
import { ref } from 'vue';
const bar = ref(null);

// we manually trigger it (this is not needed if we
// don't skip Ajax calls hijacking)
function trigger() {
  const barRef = bar.value;
  barRef.start();

  setTimeout(() => {
    const barRef = bar.value;
    if (barRef) {
      barRef.stop();
    }
  }, Math.random() * 3000 + 1000);
}

</script>

<template>
  <Story title="QUASAR COMPONENTS/Ajax Bar">
      <q-ajax-bar
        ref="bar"
        position="bottom"
        color="accent"
        size="10px"
        skip-hijack
      />

      <q-btn color="primary" label="Trigger" @click="trigger" />
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Ajax Bar](https://quasar.dev/vue-components/ajax-bar).
</docs>
