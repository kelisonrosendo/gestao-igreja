<template>
  <v-dialog v-model="isOpen" persistent width="550">
    <v-card class="p-6">
      <v-card-text class="flex flex-col items-center">
        <v-icon size="60" color="primary"> mdi-shield-alert-outline </v-icon>

        <span class="text-lg font-semibold mt-4">
          Tem certeza que deseja realizar esta ação?
        </span>

        <span class="text-center">
          As informações serão apagadas permanentemente!
        </span>
      </v-card-text>

      <v-card-actions class="flex justify-center">
        <v-btn variant="outlined" color="primary" @click="$emit('confirm')">
          Sim
        </v-btn>

        <v-btn variant="outlined" @click="$emit('close')"> Não </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
  show: Boolean,
});

const isOpen = computed<boolean>(() => props.show);
</script>
