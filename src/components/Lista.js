import React, { useEffect, useState } from "react";
import { getClientes } from "../services/api";

const Lista = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await getClientes();
        console.log(response);
        setClientes(response.data);
      } catch (error) {
        console.log("Erro ao buscar clientes:");
      }
    };
    fetchClientes();
  }, []);

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome_cliente} - {cliente.peso_kg}kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
