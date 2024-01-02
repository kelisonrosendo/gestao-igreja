<template>
  <membros-crud-form :membro-id="membroId" />
</template>

<script setup lang="ts">
definePageMeta({
  title: "Membros",
  subtitle: "Editar cadastro de membro",
  pageBack: "/cadastros/membros",
});

const route = useRoute();
const membroId = +route.params.id;
</script>
