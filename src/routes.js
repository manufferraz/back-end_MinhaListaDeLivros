const express = require("express");
const routes = express.Router();

const SessionController = require("./controllers/SessionController");
const UsuarioController = require("./controllers/UsuarioController");
const EnderecoController = require("../src/controllers/EnderecoController");

const UsuarioValidator = require("./validators/UsuarioValidator");
const EnderecoValidator = require("./validators/EnderecoValidator");

const UsuarioModel = require("./models/UsuarioModel");
const EnderecoModel = require("./models/EnderecoModel");

const Auth = require("./middlewares/authentication");

//Session
routes.post("/login", SessionController.signIn);
routes.delete("/logout", SessionController.signOut);

//Usuario
routes.get("/usuario/:usuario_id", UsuarioValidator.getByID ,Auth.authenticateToken ,UsuarioController.getByID);
routes.post("/usuario", UsuarioValidator.create, UsuarioController.create);
routes.put("/usuario/:usuario_id", UsuarioValidator.updateByID ,Auth.authenticateToken ,UsuarioController.updateByID);
routes.get("/getusuarios", UsuarioModel.getAll);
routes.delete("/usuario/:usuario_id", UsuarioValidator.deleteByID ,Auth.authenticateToken ,UsuarioController.deleteByID);

//Endereco
routes.get("/endereco/:endereco_id", EnderecoValidator.getByID ,Auth.authenticateToken ,EnderecoController.getByID);
routes.post("/endereco/:usuario_id", EnderecoValidator.create ,EnderecoController.create);
routes.get("/getenderecos", EnderecoController.getAll);
routes.put("/endereco/:endereco_id", EnderecoValidator.updateByID ,Auth.authenticateToken ,EnderecoController.updateByID);
routes.delete("/endereco/:endereco_id", EnderecoValidator.deleteByID ,Auth.authenticateToken ,EnderecoController.deleteByID);

module.exports = routes
