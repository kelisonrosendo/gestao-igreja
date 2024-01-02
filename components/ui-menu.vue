<template>
  <nav class="w-full h-full flex items-center justify-center">
    <ul class="flex items-center gap-6">
      <li v-for="item in menuItems" :key="item.key">
        <v-menu v-if="item.items">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              color="primary"
              append-icon="mdi-chevron-down"
              :prepend-icon="item.icon"
            >
              {{ item.label }}
            </v-btn>
          </template>

          <v-list slim elevation="2" class="p-0">
            <v-list-item
              v-for="(item, index) in item.items"
              class="border-b last:border-b-0"
              :value="item"
              :to="item.to"
              :key="index"
            >
              <template v-slot:prepend>
                <v-icon size="20" :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title class="text-sm">
                {{ item.label }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn v-else color="primary" :prepend-icon="item.icon" :to="item.to">
          {{ item.label }}
        </v-btn>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menuItems = ref([
  {
    key: "DASHBOARD",
    label: "Dashboard",
    icon: "mdi-chart-bar",
    to: "/",
  },
  {
    key: "CADASTRO",
    label: "Cadastros",
    icon: "mdi-pencil-plus-outline",
    items: [
      {
        key: "MEMBRO",
        label: "Membros",
        icon: "mdi-account-group",
        to: "/cadastros/membros",
      },
      // {
      //   key: "CARGO",
      //   label: "Cargos",
      //   icon: "mdi-account-tie",
      //   to: "/cadastros/cargos",
      // },
    ],
  },
  {
    key: "FINANCEIRO",
    label: "Financeiro",
    icon: "mdi-finance",
    items: [
      // {
      //   key: "DIZIMO",
      //   label: "Dízimos e ofertas",
      //   icon: "mdi-currency-usd",
      //   to: "/financeiro/dizimos-ofertas",
      // },
    ],
  },
]);
</script>
