<template>
  <Story
    title="QUASAR COMPONENTS/BUTTONS/Button"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Standard">
      <q-btn color="primary" label="Primary" />
    </Variant>
    <Variant title="Custom Colors">
      <q-btn
        color="grey-4"
        text-color="purple"
        glossy
        unelevated
        icon="camera_enhance"
        label="Purple text"
      />
    </Variant>
    <Variant title="With icon">
      <q-btn
        color="red"
        icon="mail"
        icon-right="send"
        label="On Left and Right"
      />
    </Variant>
    <Variant title="Round">
      <q-btn round color="primary" icon="mail" />
    </Variant>
    <Variant title="Custom content">
      <q-btn color="teal">
        <q-icon left size="3em" name="map" />
        <div>Label</div>
      </q-btn>
    </Variant>
    <Variant title="With tooltip">
      <q-btn color="primary" label="With Tooltip" class="q-mt-md">
        <q-tooltip class="bg-accent">I'm a tooltip</q-tooltip>
      </q-btn>
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Button](https://quasar.dev/vue-components/button).
</docs>
