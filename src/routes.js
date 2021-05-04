const express = require('express');
const routes = express.Router();

const UsuarioController = require("./controllers/UsuarioController");

//Usuario
routes.get("/usuario/:usuario_id", UsuarioController.getById);
routes.post("/usuario", UsuarioController.create);
routes.put("/usuario/usuario_id", UsuarioController.update);
routes.delete("/usuario/usuario_id", UsuarioController.delete);

module.exports = routes;