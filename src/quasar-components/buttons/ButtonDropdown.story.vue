<script setup lang="ts">
import { ref } from 'vue';
const mobileData = ref(false);
const bluetooth = ref(false);

</script>

<template>
  <Story
    title="QUASAR COMPONENTS/BUTTONS/Button Dropdown"
    :layout="{ type: 'grid', width: '100%' }"
  >
    <Variant title="Basic">
      <q-btn-dropdown color="primary" label="Dropdown Button">
        <q-list>
          <q-item clickable v-close-popup >
            <q-item-section>
              <q-item-label>Photos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup >
            <q-item-section>
              <q-item-label>Videos</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup >
            <q-item-section>
              <q-item-label>Articles</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </Variant>
    <Variant title="Various content">
      <q-btn-dropdown class="glossy" color="purple" label="Account Settings">
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-btn-dropdown>
    </Variant>
    <Variant title="Custom button">
      <q-btn-dropdown
        split
        color="orange"
        glossy
        no-caps
        icon="folder"
        label="Dropdown Button"
   
      >
        <q-list>
          <q-item clickable v-close-popup >
            <q-item-section avatar>
              <q-avatar icon="folder" color="primary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Photos</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>

          <q-item clickable v-close-popup >
            <q-item-section avatar>
              <q-avatar
                icon="assignment"
                color="secondary"
                text-color="white"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>Vacation</q-item-label>
              <q-item-label caption>February 22, 2016</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="info" color="amber" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </Variant>
  </Story>
</template>

<docs lang="md">
### Quasar documentation

[Button Dropdown](https://quasar.dev/vue-components/button-dropdown).
</docs>
