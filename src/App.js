import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Mapa from "./components/Mapa";
import "./assets/styles/App.scss";
import logo from "./assets/img/powerpdf-logo.png";

const App = () => {
  const [cliente, setCliente] = useState(null);

  const handleFormSubmit = (dados) => {
    setCliente(dados);
  };

  return (
    <div className="container">
      <section className="head">
        <img src={logo} alt="Logo" title="Logo da pagina PowerPDF"/>
      </section>
      <section className="forms">
        <Formulario></Formulario>
      </section>
      <section className="list">

      </section>
      <section className="footer">
        <img src={logo} alt="Logo" title="Logo da pagina PowerPDF"/>
      </section>
    </div>
  );
};

export default App;
