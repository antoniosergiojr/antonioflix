import config from "../config";

const urlCategorias = `${config.urlDefault}/categorias`;

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

export default { getAll, getAllWithVideos };
