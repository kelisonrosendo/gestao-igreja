<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <v-btn
          color="primary"
          variant="outlined"
          @click="navigateTo('/cadastros/membros/crud')"
        >
          Novo registro
        </v-btn>
      </v-col>
      <v-col cols="12" md="4" offset-md="4" sm="6">
        <v-text-field
          hide-details
          append-inner-icon="mdi-magnify"
          placeholder="Pesquisar..."
          @input="onInput"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ui-table
          :search="search"
          :headers="headers"
          :server-items="membros"
          :total-items="total"
          :loading="loading"
          @update-options="membroStore.loadMembros"
        >
          <template v-slot:item.acoes="{ item }">
            <div class="flex gap-4">
              <v-btn icon size="x-small" color="primary" variant="tonal">
                <v-icon size="18">mdi-note-edit-outline</v-icon>

                <v-tooltip activator="parent"> Editar </v-tooltip>
              </v-btn>

              <v-btn icon size="x-small" color="red" variant="tonal">
                <v-icon size="18">mdi-trash-can-outline</v-icon>

                <v-tooltip activator="parent"> Excluir </v-tooltip>
              </v-btn>
            </div>
          </template>
        </ui-table>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Membros",
  subtitle: "Lista de membros",
});

const membroStore = useMembroStore();
const { headers, membros, total, loading, search } = storeToRefs(membroStore);

const onInput = (event: any) => {
  const timeoutId = window.setTimeout(() => {}, 0);
  for (let id = timeoutId; id >= 0; id -= 1) {
    window.clearTimeout(id);
  }

  setTimeout(() => {
    search.value = event.target.value;
  }, 500);
};
</script>
