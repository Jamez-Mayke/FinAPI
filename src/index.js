const { v4: uuidv4 } = require("uuid");
const express = require('express');
const app = express();

app.use(express.json());

const customers = [];

app.get("/", (request, response) => {
  return response.json({
    "idName": "James"
  })
})

/**
 * dados para criar:
 * name - string
 * cpf - string
 * id - uuid
 * statement - []
 */
app.post("/account", (request, response) => {
  const { name, cpf } = request.body;
  const id = uuidv4();

  customers.push({ name, cpf, id, statement: []});

  return response.status(201).send();
})

app.listen(1995, () => {
  console.log("Server Running!");
})