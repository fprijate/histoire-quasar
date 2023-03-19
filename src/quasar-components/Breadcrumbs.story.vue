<template>
  <Story
    title="QUASAR COMPONENTS/Breadcrumbs"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Breadcrumbs">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="Components" icon="widgets" />
        <q-breadcrumbs-el label="Breadcrumbs" />
      </q-breadcrumbs>
    </Variant>

    <Variant title="BreadcrumbsEl">
      <q-breadcrumbs-el label="Home" icon="home" />
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Breadcrumbs](https://quasar.dev/vue-components/breadcrumbs).
</docs>
