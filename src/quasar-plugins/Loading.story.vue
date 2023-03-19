<script setup lang="ts">
import { useQuasar, QSpinnerFacebook } from 'quasar';
import { onBeforeUnmount } from 'vue';

const $q = useQuasar();

function showLoading() {
  $q.loading.show();

  // hiding in 2s
  setTimeout(() =>  $q.loading.hide(), 2000);
}

function showLoadingWithMessage() {
  $q.loading.show({
    message: 'Some important process  is in progress. Hang on...',
  });
  //setTimeout(() =>  $q.loading.hide(), 2000)
}  
  // hiding in 2s

function showLoadingCustomized() {
  $q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: 'yellow',
    spinnerSize: 140,
    backgroundColor: 'purple',
    message: 'Some important process is in progress. Hang on...',
    messageColor: 'black',
  });

  setTimeout(() =>  $q.loading.hide(), 3000)
}
</script>

<template>
  <Story
    title="QUASAR PLUGINS/Loading"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Default options">
      <q-btn
        color="purple"
        @click="showLoading"
        label="Show Loading"
      />
    </Variant>

    <Variant title="With message">
      <q-btn
        color="purple"
        @click="showLoadingWithMessage"
        label="Show Loading"
      />
    </Variant>

    <Variant title="Customized">
      <q-btn color="red" @click="showLoadingCustomized" label="Show Loading" />
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Loading](https://quasar.dev/quasar-plugins/loading).

### Warning

Loading must be imported and enabled in src/histoire.setup.ts
</docs>
