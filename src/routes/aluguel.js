const express = require("express");
const router = express.Router();
const aluguel_controller = require("../controllers/aluguel.js");

router.post("/", (req, res) => {
  const body = req.body;
  const code = aluguel_controller.store(body);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const elementos = aluguel_controller.index();
  res.json(elementos);
});

router.get("/:id", (req, res) => {
  const elemento = aluguel_controller.show();
  res.json(elemento);
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const code = aluguel_controller.update(body, req.params.id);
  res.status(code);
});

router.delete("/:id", (req, res) => {
  aluguel_controller.destroy(req.params.id);
  res.json();
});
