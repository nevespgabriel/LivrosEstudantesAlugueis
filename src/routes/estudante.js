const express = require("express");
const router = express.Router();
const estudante_controller = require("../controllers/estudante.js");

router.post("/", (req, res) => {
  const body = req.body;
  const code = estudante_controller.store(body);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const elementos = estudante_controller.index();
  res.json(elementos);
});

router.get("/:id", (req, res) => {
  const elemento = estudante_controller.show();
  res.json(elemento);
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const code = estudante_controller.update(body, req.params.id);
  res.status(code);
});

router.delete("/:id", (req, res) => {
  estudante_controller.destroy(req.params.id);
  res.json();
});