const { Router } = require("express");
const routes = Router();
var userController = require("../controllers/user.controller");
const tokenMiddleware = require('../middlewares/token.middleware');

routes.get("/", tokenMiddleware, userController.readAllUser);
routes.get("/:id", tokenMiddleware, userController.getOneUser);
routes.post("/", tokenMiddleware, userController.createUser);
routes.delete("/:id", tokenMiddleware, userController.deleteUser);
routes.put("/:id", tokenMiddleware, userController.updateUser);
routes.post("/login", userController.obtenerToken);

module.exports = routes;
