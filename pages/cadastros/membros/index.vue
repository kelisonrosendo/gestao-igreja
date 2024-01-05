<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <v-btn
          color="primary"
          variant="outlined"
          @click="navigateTo('/cadastros/membros/novo')"
        >
          Novo registro
        </v-btn>
      </v-col>
      <v-col cols="12" md="4" offset-md="4" sm="6">
        <v-text-field
          hide-details
          append-inner-icon="mdi-magnify"
          placeholder="Pesquisar..."
          @input="debounceSearch"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ui-table
          :headers="headers"
          :server-items="serverItems"
          :search="search"
          :page="pageNumber"
          :items-per-page="size"
          :total-items="total"
          :loading="loading"
          @update-options="membroStore.loadMembros"
        >
          <template v-slot:item.situacao="{ item }">
            <v-chip variant="outlined" :color="item.situacao.color">
              {{ item.situacao.title }}
            </v-chip>
          </template>

          <template v-slot:item.acoes="{ item }">
            <div class="flex gap-4">
              <v-btn
                icon
                size="x-small"
                color="primary"
                variant="tonal"
                @click="onEditMembro(item.id)"
              >
                <v-icon size="18"> mdi-note-edit-outline </v-icon>
                <v-tooltip activator="parent"> Editar </v-tooltip>
              </v-btn>

              <v-btn
                icon
                size="x-small"
                color="red"
                variant="tonal"
                :loading="loading"
                @click="onToggleConfirmModal(item.id)"
              >
                <v-icon size="18">mdi-trash-can-outline</v-icon>
                <v-tooltip activator="parent"> Excluir </v-tooltip>
              </v-btn>
            </div>
          </template>
        </ui-table>
      </v-col>
    </v-row>

    <ui-confirm-modal
      :show="showConfirmModal"
      @close="onToggleConfirmModal"
      @confirm="onDeleteMembro"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Membros",
  subtitle: "Lista de membros",
});

import { debounce } from "lodash";

const membroStore = useMembroStore();
const { headers, serverItems, pageNumber, size, total, loading, search } =
  storeToRefs(membroStore);

const showConfirmModal = ref<boolean>(false);
const membroId = ref<number | null>(null);

const debounceSearch = debounce((event) => {
  search.value = event.target.value;
}, 500);

const onEditMembro = (membroId: number) => {
  navigateTo(`/cadastros/membros/${membroId}`);
};

const onToggleConfirmModal = (id: number) => {
  membroId.value = id;
  showConfirmModal.value = !showConfirmModal.value;
};

const onDeleteMembro = () => {
  showConfirmModal.value = false;

  if (membroId.value) {
    membroStore.deleteMembro(membroId.value);
  }
};
</script>
