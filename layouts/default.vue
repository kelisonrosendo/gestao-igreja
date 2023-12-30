<template>
  <v-app>
    <v-toolbar>
      <ui-menu />
    </v-toolbar>

    <v-main class="p-6">
      <v-btn
        v-if="route.meta.pageBack"
        prepend-icon="mdi-arrow-left"
        variant="plain"
        @click="$router.back()"
      >
        Voltar
      </v-btn>

      <section class="mb-6 text-slate-800">
        <h1 v-if="route.meta.title" class="text-primary text-lg font-semibold">
          {{ route.meta.title }}
        </h1>
        <h2 v-if="route.meta.subtitle" class="font-light text-sm">
          {{ route.meta.subtitle }}
        </h2>
      </section>

      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
