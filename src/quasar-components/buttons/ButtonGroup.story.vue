<template>
  <Story
    title="QUASAR COMPONENTS/BUTTONS/Button Group"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Standard">
      <q-btn-group push>
        <q-btn
          color="yellow"
          glossy
          text-color="black"
          push
          label="First"
          icon="verified_user"
        />
        <q-btn color="amber" glossy text-color="black" push label="Second" />
        <q-btn color="orange" glossy text-color="black" push label="Third" />
      </q-btn-group>
    </Variant>
    <Variant title="With dropdown">
      <q-btn-group rounded>
        <q-btn rounded color="primary" label="One" />

        <q-btn rounded color="primary" label="Two" />

        <q-btn-dropdown auto-close rounded color="primary" label="Three" split>
          <!-- dropdown content goes here -->
          <q-list padding style="width: 250px">
            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="folder" color="purple" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Photos</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="folder" color="purple" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Videos</q-item-label>
                <q-item-label caption>London</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>

            <q-separator inset />
            <q-item-label header>Files</q-item-label>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="assignment" color="teal" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>London</q-item-label>
                <q-item-label caption>March 1st, 2018</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-avatar icon="assignment" color="teal" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Paris</q-item-label>
                <q-item-label caption>January 22nd, 2017</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" color="amber" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-btn-group>
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Button Group](https://quasar.dev/vue-components/button-group).
</docs>
