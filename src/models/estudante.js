let proximoId = 1;

module.exports = (body, id = proximoId++) => {
  if (
    body.nome != "" &&
    body.nome != undefined &&
    body.matricula != "" &&
    body.matricula != undefined &&
    body.ano != undefined &&
    !isNaN(body.ano) &&
    body.ano > 0 &&
    body.curso != "" &&
    body.curso != undefined
  ) {
    return {
      id: id,
      nome: body.nome,
      matricula: body.matricula,
      curso: body.curso,
      ano: body.ano,
    };
  }
};
