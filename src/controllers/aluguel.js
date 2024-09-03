const db = [];
const model = require("../models/aluguel.js");

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 200;
  }
  return 400;
};

const show = (id) => db.find((el) => el.id == id);

const index = () => db;

const update = (body, id) => {
  const index = db.findIndex((el) => id == el.id);
  const alterado = model(body, parseInt(id));
  if (index != -1 && alterado) {
    db[index] = alterado;
    return 200;
  }
  return 400;
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);
  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
  store,
  show,
  index,
  update,
  destroy,
};
