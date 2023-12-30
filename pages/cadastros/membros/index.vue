<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <v-btn color="primary" variant="outlined"> Novo registro </v-btn>
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
      <v-col> Tabela </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Membros",
  subtitle: "Cadastro de membros",
});
</script>
