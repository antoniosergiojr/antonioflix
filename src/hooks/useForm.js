import { useState } from "react";

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValor(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
  }

  function limparForm() {
    setValores(valoresIniciais);
  }

  return {
    valores,
    handleChange,
    limparForm,
  };
}

export default useForm;
