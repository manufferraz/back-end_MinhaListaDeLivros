const express = require('express');
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");
const EnderecoController = require("./controllers/EnderecoController");

const UsuarioValidator = require("./validators/UsuarioValidator");
const EnderecoValidator = require("./validators/UsuarioValidator");

//Usuario
routes.get("/usuario/:usuario_id", UsuarioValidator.getByID, UsuarioController.getByID);
routes.post("/usuario", UsuarioValidator.create, UsuarioController.create);
routes.put("/usuario/:usuario_id", UsuarioValidator.updateByID, UsuarioController.updateByID);
routes.delete("/usuario/:usuario_id", UsuarioValidator.deleteByID, UsuarioController.deleteByID);

//Endereco
routes.get("/endereco/:endereco_id", EnderecoValidator.getByID, EnderecoController.getByID);
routes.post("/endereco/:usuario_id", EnderecoValidator.create, EnderecoController.create);
routes.put("/endereco/:endereco_id", EnderecoValidator.updateByID, EnderecoController.updateByID);
routes.delete("/endereco/:endereco_id", EnderecoValidator.deleteByID, EnderecoController.deleteByID);


module.exports = routes;