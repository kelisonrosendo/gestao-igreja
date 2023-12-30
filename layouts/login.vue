<template>
  <v-app>
    <div
      class="h-screen w-screen bg-slate-100 flex items-center justify-center"
    >
      <v-card class="w-[380px] p-10" rounded="lg" elevation="2">
        <div class="text-center text-2xl mb-12">
          <span>Gestão</span>
          <span class="text-primary font-bold">Igreja</span>
        </div>

        <v-form ref="form" @submit.prevent>
          <v-row>
            <v-col>
              <v-text-field
                persistent-placeholder
                label="E-mail"
                placeholder="Preencher"
                density="comfortable"
                prepend-inner-icon="mdi-email-outline"
                :rules="[required]"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                persistent-placeholder
                label="Senha"
                placeholder="Preencher"
                density="comfortable"
                prepend-inner-icon="mdi-lock-outline"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                :rules="[required]"
                @click:append-inner="visible = !visible"
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn
                block
                type="submit"
                variant="tonal"
                color="primary"
                size="large"
                :loading="isLoading"
                @click="onSubmit"
              >
                Fazer login
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script setup lang="ts">
const form = ref();
const visible = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const onSubmit = async () => {
  isLoading.value = true;

  const { valid } = await form.value.validate();

  if (valid) {
    alert("Form validado!");
  }

  isLoading.value = false;
};
</script>
