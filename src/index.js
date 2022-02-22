const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());


app.get("/", (request, response) => {
  return response.json({
    "idName": "James"
  })
})

app.listen(1995, () => {
  console.log("Server Running!");
})