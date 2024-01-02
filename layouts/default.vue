<template>
  <v-app>
    <v-app-bar elevation="0" class="bg-slate-200">
      <ui-menu />
    </v-app-bar>

    <v-main>
      <div class="p-10 h-screen overflow-y-auto">
        <v-btn
          v-if="route.meta.pageBack"
          prepend-icon="mdi-arrow-left"
          variant="tonal"
          size="small"
          color="primary"
          class="mb-4"
          @click="navigateTo(route.meta.pageBack)"
        >
          Voltar
        </v-btn>

        <section class="mb-6 text-slate-800">
          <h1
            v-if="route.meta.title"
            class="text-primary text-lg font-semibold"
          >
            {{ route.meta.title }}
          </h1>
          <h2 v-if="route.meta.subtitle" class="font-light text-sm">
            {{ route.meta.subtitle }}
          </h2>
        </section>

        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
