export const sexo = [
  { title: "Masculino", value: "MA" },
  { title: "Feminino", value: "FE" },
];

export const estadoCivil = [
  { title: "Solteiro(a)", value: "SOLTEIRO" },
  { title: "Casado(a)", value: "CASADO" },
  { title: "Divorciado(a)", value: "DIVORCIADO" },
  { title: "Viúvo(a)", value: "VIUVO" },
];

export const situacaoMembro = [
  { title: "Ativo", value: "ATIVO", color: "primary" },
  { title: "Inativo", value: "INATIVO", color: "red" },
  { title: "Afastado", value: "AFASTADO", color: "grey-darken-2" },
];

export const estadoBrasil = [
  { title: "Acre", value: "AC" },
  { title: "Alagoas", value: "AL" },
  { title: "Amapá", value: "AP" },
  { title: "Amazonas", value: "AM" },
  { title: "Bahia", value: "BA" },
  { title: "Ceará", value: "CE" },
  { title: "Distrito Federal", value: "DF" },
  { title: "Espírito Santo", value: "ES" },
  { title: "Goiás", value: "GO" },
  { title: "Maranhão", value: "MA" },
  { title: "Mato Grosso", value: "MT" },
  { title: "Mato Grosso do Sul", value: "MS" },
  { title: "Minas Gerais", value: "MG" },
  { title: "Pará", value: "PA" },
  { title: "Paraíba", value: "PB" },
  { title: "Paraná", value: "PR" },
  { title: "Pernambuco", value: "PE" },
  { title: "Piauí", value: "PI" },
  { title: "Rio de Janeiro", value: "RJ" },
  { title: "Rio Grande do Norte", value: "RN" },
  { title: "Rio Grande do Sul", value: "RS" },
  { title: "Rondônia", value: "RO" },
  { title: "Roraima", value: "RR" },
  { title: "Santa Catarina", value: "SC" },
  { title: "São Paulo", value: "SP" },
  { title: "Sergipe", value: "SE" },
  { title: "Tocantins", value: "TO" },
];

export const dateMask = { mask: "##/##/####" };
export const phoneMask = { mask: "(##) #####-####" };
export const cepMask = { mask: "#####-###" };

export const pagination = {
  defaultPage: 1,
  defaultSize: 5,
};

export const searchInConstants = (constant: any, value: string | number) => {
  return constant.find((item: any) => item.value === value);
};
