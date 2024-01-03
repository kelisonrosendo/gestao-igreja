<template>
  <v-form ref="form" @submit.prevent>
    <section>
      <h1 class="text-primary mb-4">Informações gerais</h1>

      <v-row>
        <v-col cols="4">
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
            persistent-placeholder
            label="Data de nascimento"
            placeholder="dd/mm/aaaa"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-select
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
            persistent-placeholder
            label="E-mail"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            persistent-placeholder
            label="Telefone"
            placeholder="(##) ####-####"
            :rules="[required]"
          />
        </v-col>
      </v-row>
    </section>

    <section class="mt-4 mb-24">
      <h1 class="text-primary mb-4">Endereço</h1>

      <v-row>
        <v-col cols="12" sm="12" md="8">
          <v-text-field
            persistent-placeholder
            label="Endereço"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
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
            persistent-placeholder
            label="Bairro"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-text-field
            persistent-placeholder
            label="Cidade"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-select
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
            persistent-placeholder
            label="CEP"
            placeholder="#####-###"
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <v-text-field
            persistent-placeholder
            label="Complemento"
            placeholder="Preencher"
            :rules="[required]"
          />
        </v-col>
      </v-row>
    </section>

    <client-only>
      <Teleport to="body">
        <v-footer app id="footer" elevation="5" height="60" class="px-10">
          <v-spacer />
          <v-btn color="primary" variant="outlined"> Salvar Informações </v-btn>
        </v-footer>
      </Teleport>
    </client-only>
  </v-form>
</template>

<script setup lang="ts">
const props = defineProps({
  membroId: Number,
});

const membroStore = useMembroStore();
const { formData } = storeToRefs(membroStore);
</script>
