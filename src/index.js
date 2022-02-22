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

app.post("/account", (request, response) => {
  const { name, cpf } = request.body;

  const customerAlreadyExist = customers
    .some(
      (customer) => customer.cpf === cpf
    );

  if(customerAlreadyExist) {
    return response.status(400).json({error: "Customer already exists!"});
  }

  customers.push({
      name,
      cpf,
      id: uuidv4(),
      statement: [],
    });

  // OK console.log(customers);
  return response.status(201).send();
})

app.listen(1995, () => {
  console.log("Server Running!");
})