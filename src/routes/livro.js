const express = require("express");
const router = express.Router();
const livro_controller = require("../controllers/livro.js");

router.post("/", (req, res) => {
  const body = req.body;
  const code = livro_controller.store(body);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const elementos = livro_controller.index();
  res.json(elementos);
});

router.get("/:id", (req, res) => {
  const elemento = livro_controller.show();
  res.json(elemento);
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const code = livro_controller.update(body, req.params.id);
  res.status(code);
});

router.delete("/:id", (req, res) => {
  livro_controller.destroy(req.params.id);
  res.json();
});