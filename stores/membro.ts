import Vue from "vue";
import { useToast } from "vue-toastification";

export const useMembroStore = defineStore("membros", () => {
  const toast = useToast();
  interface Membro {
    id: number;
    situacao: string;
    nome: string;
    data_nascimento: string;
    sexo: string;
    estado_civil: string;
    email: string;
    telefone: string;
    endereco: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
  }

  interface Pagination {
    page: number;
    itemsPerPage: number;
  }

  const pageNumber = ref<number>(pagination.defaultPage);
  const size = ref<number>(pagination.defaultSize);
  const total = ref<number>(0);

  const loading = ref<boolean>(false);
  const search = ref<string>("");
  const membros = ref<Membro[]>([]);

  const headers = ref([
    {
      key: "nome",
      title: "Nome",
      sortable: false,
    },
    {
      key: "data_nascimento",
      title: "Data nascimento",
      sortable: false,
    },
    {
      key: "telefone",
      title: "Telefone",
      sortable: false,
    },
    {
      key: "situacao",
      title: "Situação",
      sortable: false,
      align: "center",
    },
    {
      key: "acoes",
      title: "Ações",
      sortable: false,
      align: "center",
      width: 10,
    },
  ]);

  const serverItems = computed(() =>
    membros.value.map((membro: Membro) => ({
      ...membro,
      data_nascimento: formatDate(membro.data_nascimento),
      situacao: searchInConstants(situacaoMembro, membro.situacao),
    }))
  );

  const formData = reactive({
    id: null,
    situacao: searchInConstants(situacaoMembro, "ATIVO"),
    nome: null,
    data_nascimento: null,
    sexo: null,
    estado_civil: null,
    email: null,
    telefone: null,
    endereco: null,
    numero: null,
    bairro: null,
    cidade: null,
    estado: searchInConstants(estadoBrasil, "MG"),
    cep: null,
    complemento: null,
  });

  const initialStateFormData = structuredClone(toRaw(formData));

  const payloadCrud = computed(() => ({
    ...formData,
    situacao: formData.situacao ? formData.situacao?.value : null,
    data_nascimento: formData.data_nascimento
      ? formatDateRestore(formData.data_nascimento)
      : null,
    sexo: formData.sexo ? formData.sexo.value : null,
    estado_civil: formData.estado_civil ? formData.estado_civil.value : null,
    estado: formData.estado ? formData.estado.value : null,
  }));

  const loadMembros = async ({ page, itemsPerPage }: Pagination) => {
    pageNumber.value = page;
    size.value = itemsPerPage;

    loading.value = true;
    const { from, to } = getPagination(page - 1, itemsPerPage);

    await $fetch(
      `/api/membro/paged?from=${from}&to=${to}&search=${search.value}`
    )
      .then(({ data, count }: any) => {
        membros.value = data ?? [];
        total.value = count ?? 0;
      })
      .catch((error) => toast.error(error.message));

    loading.value = false;
  };

  const loadMembro = async (membroId: number) => {
    loading.value = true;

    await $fetch(`/api/membro/${membroId}`)
      .then(({ data: membro }: any) => {
        Object.assign(formData, {
          ...membro,
          situacao: searchInConstants(situacaoMembro, membro.situacao),
          data_nascimento: formatDate(membro.data_nascimento),
          sexo: searchInConstants(sexo, membro.sexo),
          estado_civil: searchInConstants(estadoCivil, membro.estado_civil),
          estado: searchInConstants(estadoBrasil, membro.estado),
        });
      })
      .catch((error) => toast.error(error.message));

    loading.value = false;
  };

  const createMembro = async () => {
    loading.value = true;
    const { id, ...rest } = payloadCrud.value;

    await $fetch("/api/membro", {
      method: "POST",
      body: rest,
    })
      .then(() => {
        toast.success("Registro inserido com sucesso");
        navigateTo("/cadastros/membros");
      })
      .catch((error) => toast.error(error.message));

    loading.value = false;
  };

  const updateMembro = async (membroId: number) => {
    loading.value = true;

    await $fetch(`/api/membro/${membroId}`, {
      method: "PUT",
      body: payloadCrud.value,
    })
      .then(() => {
        toast.success("Registro atualizado com sucesso");
        navigateTo("/cadastros/membros");
      })
      .catch((error) => toast.error(error.message));

    loading.value = false;
  };

  const deleteMembro = async (membroId: number) => {
    loading.value = true;

    await $fetch(`/api/membro/${membroId}`, {
      method: "DELETE",
    })
      .then(() => {
        toast.success("Registro removido com sucesso");
        resetLoadMembros();
      })
      .catch((error) => toast.error(error.message));

    loading.value = false;
  };

  const resetStateFormData = () => {
    Object.assign(formData, initialStateFormData);
  };

  const resetLoadMembros = () => {
    loadMembros({
      page: pagination.defaultPage,
      itemsPerPage: pagination.defaultSize,
    });
  };

  return {
    headers,
    serverItems,
    pageNumber,
    size,
    total,
    search,
    loading,
    membros,
    formData,
    loadMembros,
    loadMembro,
    createMembro,
    updateMembro,
    deleteMembro,
    resetStateFormData,
    resetLoadMembros,
  };
});
