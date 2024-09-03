let proximoId = 1;

module.exports = (body, id = proximoId++) => {
  if (
    body.titulo != "" &&
    body.titulo != undefined &&
    body.autor != "" &&
    body.autor != undefined &&
    body.ano != undefined &&
    !isNaN(body.ano) &&
    body.genero != "" &&
    body.genero != undefined
  ) {
    return {
      id: id,
      titulo: body.titulo,
      autor: body.autor,
      ano: body.ano,
      genero: body.genero
    };
  }
};
