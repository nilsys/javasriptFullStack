const { response } = require("express");
const express = require("express");
const { request } = require("http");

const app = express();

app.get('/', (req, res) => {
 res.send(`
  <form action="/addContato" method="POST">
    CONTATO: <input type="text" name="contato" />
    <button>Adicionar Contato</button>
  </form>
 `);
 
})

app.listen(3000, () => {
  console.log("Starting Server...")
  console.log("Server Starter");
});