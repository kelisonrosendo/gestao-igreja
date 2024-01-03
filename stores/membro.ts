export const useMembroStore = defineStore("membros", () => {
  interface Membro {
    id: number;
    nome: string;
    data_nascimento: string;
  }

  interface Pagination {
    page: number;
    itemsPerPage: number;
  }

  const formData = reactive({
    id: null,
    nome: null,
    data_nascimento: null,
    situacao: searchInConstants(situacaoMembro, "ATIVO"),
  });

  const loading = ref<boolean>(false);
  const total = ref<number>(0);
  const search = ref<string>("");

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
      key: "data_nascimento",
      title: "Data nascimento",
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

  const membros = ref<Membro[]>([]);

  const loadMembros = async ({ page, itemsPerPage }: Pagination) => {
    loading.value = true;

    const { from, to } = getPagination(page - 1, itemsPerPage);

    await $fetch(
      `/api/membro/paged?from=${from}&to=${to}&search=${search.value}`
    )
      .then(({ data, count }: any) => {
        membros.value = data ?? [];
        total.value = count ?? 0;
      })
      .catch((error) => {
        console.log(error);
        // $toast.error({
        //   description: error.message,
        // });
      });

    loading.value = false;
  };

  const createMembro = () => {};
  const updateMembro = () => {};
  const deleteMembro = () => {};

  return {
    headers,
    membros,
    total,
    loading,
    search,
    formData,
    loadMembros,
    createMembro,
    updateMembro,
    deleteMembro,
  };
});
