const express = require("express");
const productsRouter = require("./routes/products.js");

const app = express();
app.use(express.static(__dirname + "/public"));

//server en puerto 8080
const server = app.listen(8080, () => {
  console.log("listening on port 8080");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/productos", productsRouter);
