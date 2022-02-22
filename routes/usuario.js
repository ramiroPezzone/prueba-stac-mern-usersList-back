const { Router } = require("express");
const router = Router();

const {
  crearUsuario,
  verUsuarios,
  verUser,
  eliminarUser,
  updateUser,
  editarUsuario
} = require("../controller/usuario.controller");

router.route("/")
.get(verUsuarios)
.post(crearUsuario);

router.route("/editarUsuario/:id")
.get(editarUsuario);

router.route("/:id")
.get(verUser)
.delete(eliminarUser)
.put(updateUser);

module.exports = router;
