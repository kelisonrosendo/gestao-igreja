<template>
  <v-app>
    <v-app-bar elevation="0" class="bg-slate-200">
      <ui-menu />
    </v-app-bar>

    <v-main>
      <div class="p-10 h-screen overflow-y-auto">
        <section class="flex items-center gap-4 mb-6 text-slate-800">
          <v-btn
            v-if="route.meta.pageBack"
            icon
            prepend-icon="mdi-arrow-left"
            variant="tonal"
            color="primary"
            size="small"
            @click="navigateTo(route.meta.pageBack)"
          >
            <v-icon> mdi-arrow-left </v-icon>
          </v-btn>

          <div>
            <h1
              v-if="route.meta.title"
              class="text-primary text-lg font-semibold"
            >
              {{ route.meta.title }}
            </h1>
            <h2 v-if="route.meta.subtitle" class="font-light text-sm">
              {{ route.meta.subtitle }}
            </h2>
          </div>
        </section>

        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const route = useRoute();
</script>
