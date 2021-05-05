const express = require("express");
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const EnderecoController = require("../src/controllers/EnderecoController");

//Usuario
routes.get("/usuario/:usuario_id", UsuarioController.getByID);
routes.post("/usuario", UsuarioController.create);
routes.put("/usuario/:usuario_id", UsuarioController.updateByID);
routes.delete("/usuario/:usuario_id", UsuarioController.deleteByID);

//Endereco
routes.get("/endereco/:endereco_id", EnderecoController.getByID);
routes.post("/endereco/:usuario_id", EnderecoController.create);
routes.put("/endereco/:endereco_id", EnderecoController.updateByID);
routes.delete("/endereco/:endereco_id", EnderecoController.delete);

module.exports = routes