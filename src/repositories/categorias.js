import config from "../config";

const urlCategorias = `${config.urlDefault}/categorias`;

function create(objetoDaCategoria) {
  return fetch(`${urlCategorias}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objetoDaCategoria),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error("Não foi possível cadastrar os dados :(");
  });
}

function getAll() {
  return fetch(urlCategorias).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error("Não foi possível pegar os dados :(");
  });
}

function getAllWithVideos() {
  return fetch(`${urlCategorias}?_embed=videos`).then(
    async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error("Não foi possível pegar os dados :(");
    }
  );
}

export default { create, getAll, getAllWithVideos };
