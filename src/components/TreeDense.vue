<template>
  <q-card class="my-card">
    <q-tree
      :nodes="simple"
      dense
      node-key="label"
      v-model:expanded="expanded"
    />
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const expanded = ref([
  'Satisfied customers (with avatar)',
  'Good food (with icon)',
]);

const simple = [
  {
    label: 'Satisfied customers (with avatar)',
    avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
    children: [
      {
        label: 'Good food (with icon)',
        icon: 'restaurant_menu',
        children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }],
      },
      {
        label: 'Good service (disabled node with icon)',
        icon: 'room_service',
        disabled: true,
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: 'Pleasant surroundings (with icon)',
        icon: 'photo',
        children: [
          {
            label: 'Happy atmosphere (with image)',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
          },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' },
        ],
      },
    ],
  },
];
</script>

<style lang="scss" scooped>
.my-card {
  width: 100%;
  max-width: 800px;
  padding: 30px;
}
</style>