<template>
  <v-data-table-server
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :search="search"
    :page="page"
    :items-per-page="itemsPerPage"
    :loading="loading"
    no-data-text="Nenhum registro encontrado"
    loading-text="Carregando..."
    items-per-page-text="Itens por página:"
    page-text="{0}-{1} de {2}"
    :items-per-page-options="[5, 10, 15, 20]"
    @update:options="(value) => $emit('update-options', value)"
  >
    <template
      v-for="(_, scopedSlotName) in $slots"
      v-slot:[scopedSlotName]="slotData"
    >
      <slot v-bind="slotData" :name="scopedSlotName" />
    </template>
  </v-data-table-server>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
  serverItems: {
    type: Array,
    default: () => [],
  },
  page: {
    type: Number,
    default: 1,
  },
  itemsPerPage: {
    type: Number,
    default: 5,
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  search: {
    type: String,
    default: "",
  },
  loading: Boolean,
});
</script>

<style lang="scss" scoped>
:deep(tbody tr:nth-of-type(odd)) {
  @apply bg-slate-100;
}

:deep(tbody tr) {
  &:hover {
    @apply shadow-[inset_0_0_0_1px]
    shadow-slate-200
    bg-slate-200
    cursor-pointer;
  }
}
</style>
