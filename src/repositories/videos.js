import config from "../config";

const urlVideos = `${config.urlDefault}/videos`;

function create(objetoDoVideo) {
  return fetch(`${urlVideos}?_embed=videos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(objetoDoVideo),
  }).then(async (respostaDoServidor) => {
    if (respostaDoServidor.ok) {
      const resposta = await respostaDoServidor.json();
      return resposta;
    }
    throw new Error("Não foi possível cadastrar os dados :(");
  });
}

export default { create };
