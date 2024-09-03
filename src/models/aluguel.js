let proximoId = 1;
const estudante = require("../controllers/estudante.js");
const livro = require("../controllers/livro.js");

module.exports = (body, id = proximoId++) => {
  if (
    body.dataAluguel != "" &&
    body.dataAluguel != undefined &&
    body.dataDevolucao != "" &&
    body.dataDevolucao != undefined &&
    estudante.show(body.idEstudante) &&
    livro.show(body.idLivro)
  ) {
    return {
      id: id,
      idLivro: body.idLivro,
      idEstudante: body.idEstudante,
      dataAluguel: body.dataAluguel,
      dataDevolucao: body.dataDevolucao,
    };
  }
};
