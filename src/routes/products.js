const express = require("express");
const router = express.Router();
const fs = require("fs");
const Container = require("../container/Container.js");

const userService = new Container();

//la ruta ./productos nos muesta un array con todos los productos del json
router.get("/", (req, res) => {
  userService.getAll().then((result) => res.send(result));
});

//la ruta ./productos/:id nos muestra el producto con el id que le pasamos
router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  userService.getById(id).then((result) => res.send(result));
});

// la ruta ./productosRandom nos muestra un producto al azar del listado de productos.
// router.get("/productoRandom", (req, res) => {
//   userService.getByRandomId().then((result) => res.send(result));
// });

router.post("/", (req, res) => {
  let product = req.body;
  userService.saveProduct(product).then((result) => res.send(result));
});

router.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let product = req.body;
  userService.updateById(id, product).then((result) => res.send(result));
});

router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  userService.deletebyId(id).then((result) => res.send(result));
});

module.exports = router;
