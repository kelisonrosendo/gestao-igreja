<template>
  <v-form ref="form" :disabled="loading" @submit.prevent>
    <section>
      <h1 class="text-primary mb-4">Informações gerais</h1>

      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-select
            v-model="formData.situacao"
            persistent-placeholder
            return-object
            label="Situação"
            placeholder="Selecionar"
            item-value="value"
            item-title="title"
            :items="situacaoMembro"
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.nome"
            persistent-placeholder
            label="Nome completo"
            placeholder="Preencher"
            diosas_hispanas
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="formData.data_nascimento"
            v-maska:[dateMask]
            persistent-placeholder
            label="Data de nascimento"
            placeholder="dd/mm/aaaa"
            :rules="[required, date]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-select
            v-model="formData.sexo"
            persistent-placeholder
            return-object
            label="Sexo"
            placeholder="Selecionar"
            item-value="value"
            item-title="title"
            :items="sexo"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-select
            v-model="formData.estado_civil"
            persistent-placeholder
            return-object
            label="Estado civil"
            placeholder="Selecionar"
            item-value="value"
            item-title="title"
            :items="estadoCivil"
            :rules="[required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="8">
          <v-text-field
            v-model="formData.email"
            persistent-placeholder
            label="E-mail"
            placeholder="Preencher"
            :rules="[email]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="formData.telefone"
            v-maska:[phoneMask]
            persistent-placeholder
            label="Telefone"
            placeholder="(##) ####-####"
            :rules="[phone]"
          />
        </v-col>
      </v-row>
    </section>

    <section class="mt-4 mb-24">
      <h1 class="text-primary mb-4">Endereço</h1>

      <v-row>
        <v-col cols="12" sm="12" md="8">
          <v-text-field
            v-model="formData.endereco"
            persistent-placeholder
            label="Endereço"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="formData.numero"
            persistent-placeholder
            label="Número"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="formData.bairro"
            persistent-placeholder
            label="Bairro"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="formData.cidade"
            persistent-placeholder
            label="Cidade"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-select
            v-model="formData.estado"
            persistent-placeholder
            return-object
            label="Estado"
            placeholder="Selecionar"
            item-value="value"
            item-title="title"
            :items="estadoBrasil"
            :rules="[required]"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            v-model="formData.cep"
            v-maska:[cepMask]
            persistent-placeholder
            label="CEP"
            placeholder="#####-###"
            :rules="[required, cep]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <v-text-field
            v-model="formData.complemento"
            persistent-placeholder
            label="Complemento"
            placeholder="Preencher"
          />
        </v-col>
      </v-row>
    </section>

    <client-only>
      <teleport to="body">
        <v-footer app id="footer" elevation="5" height="60" class="px-10">
          <v-spacer />
          <v-btn
            type="submit"
            color="primary"
            variant="outlined"
            :loading="loading"
            @click="onSubmit"
          >
            Salvar Informações
          </v-btn>
        </v-footer>
      </teleport>
    </client-only>
  </v-form>
</template>

<script setup lang="ts">
const route = useRoute();
const membroStore = useMembroStore();

const form = ref();
const { formData, loading } = storeToRefs(membroStore);

onMounted(() => {
  if (route.params.id) {
    membroStore.loadMembro(+route.params.id);
  } else {
    membroStore.resetStateFormData();
  }
});

const onSubmit = async () => {
  const { valid } = await form.value.validate();

  if (valid) {
    formData.value.id
      ? membroStore.updateMembro(formData.value.id)
      : membroStore.createMembro();
  }
};
</script>
