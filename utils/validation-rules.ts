export const required = (value: string) => !!value || "Campo obrigatório";

export const email = (value: string) =>
  value ? /.+@.+\..+/.test(value) || "Informe um e-mail válido" : true;

export const date = (value: string) =>
  value
    ? /^(\d{2})\/(\d{2})\/(\d{4})$/.test(value) || "Informe uma data válida"
    : true;

export const phone = (value: string) =>
  value
    ? /^\(\d{2}\) \d{5}-\d{4}$/.test(value) || "Informe uma telefone válido"
    : true;

export const cep = (value: string) =>
  value ? /^\d{5}-\d{3}$/.test(value) || "Informe um CEP válido" : true;
