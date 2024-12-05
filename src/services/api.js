import axios from "axios";

// Função para pegar os dados da API de clientes
export const getClientes = () => {
  const busca = axios.get("http://localhost:3001/api/clientes");
  return busca
};

// Função para pegar dados do endereço via CEP
export const getEnderecoPorCep = (cep) => {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
};
