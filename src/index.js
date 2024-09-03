const express = require("express");
const aluguel_router = require("./routes/aluguel.js");
const estudante_router = require("./routes/estudante.js");
const livro_router = require("./routes/livro.js");

const porta = 2500;
const app = express();
app.use(express.json());

app.use("/livro", livro_router);
app.use("/estudante", estudante_router);
app.use("/aluguel", aluguel_router);
app.listen(porta, () => {
  console.log(`Server running in ${porta} port.`);
});
