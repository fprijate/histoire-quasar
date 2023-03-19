<template>
  <Story title="QUASAR COMPONENTS/Banner">
    <q-banner class="bg-primary text-white">
      Unfortunately, the credit card did not go through, please try again.
      <template v-slot:action>
        <q-btn flat color="white" label="Dismiss" />
        <q-btn flat color="white" label="Update Credit Card" />
      </template>
    </q-banner>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Banner](https://quasar.dev/vue-components/banner).
</docs>
