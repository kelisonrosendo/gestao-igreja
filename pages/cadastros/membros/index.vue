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
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ui-table
          v-bind="{ headers, serverItems, totalItems, loading }"
          @update-options="loadItems"
        >
          <template v-slot:item.acoes="{ item }">
            <div class="flex gap-4">
              <v-btn
                icon
                size="x-small"
                color="primary"
                variant="tonal"
                @click="editMembro(item)"
              >
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

interface ServerItems {
  id: number;
  nome: string;
}

const serverItems = ref<ServerItems[]>([]);
const totalItems = ref<number>(0);
const loading = ref<boolean>(true);

const headers = ref([
  {
    key: "id",
    title: "ID",
    sortable: false,
  },
  {
    key: "nome",
    title: "Nome",
    sortable: false,
  },
  {
    key: "acoes",
    title: "Ações",
    sortable: false,
    align: "center",
    width: 10,
  },
]);

const loadItems = () => {
  serverItems.value = [
    {
      id: 1,
      nome: "Membro 1",
    },
    {
      id: 2,
      nome: "Membro 2",
    },
    {
      id: 3,
      nome: "Membro 3",
    },
    {
      id: 4,
      nome: "Membro 4",
    },
    {
      id: 5,
      nome: "Membro 5",
    },
  ];

  totalItems.value = 5;
  loading.value = false;
};

const editMembro = (membro) => {
  console.log(membro);
  navigateTo(`/cadastros/membros/crud/${membro.id}`);
};
</script>
