const usuarioCtrl = {};

const Usuario = require("../models/Usuario");

usuarioCtrl.verUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

usuarioCtrl.crearUsuario = async (req, res) => {
  const { nombre, apellido, edad, telefono, correo } = req.body;
  const newUsu = new Usuario({
    nombre,
    apellido,
    edad,
    telefono,
    correo,
  });
  await newUsu.save();
  res.json({ msg: "Nuevo usuario almacenado" });
};

usuarioCtrl.verUser = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
};

usuarioCtrl.editarUsuario = async (req, res) => {
  await Usuario.findById(req.params.id);
  const { nombre, apellido, edad, telefono, correo } = req.body;
};

usuarioCtrl.eliminarUser = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ msg: `Usuario eliminado` });
};

usuarioCtrl.updateUser = async (req, res) => {
  const { nombre, apellido, edad, telefono, correo } = req.body;
  await Usuario.findByIdAndUpdate(req.params.id, {
    nombre,
    apellido,
    edad,
    telefono,
    correo,
  });
  res.json({ msg: `El usuario ha sido actualizado` });
};

module.exports = usuarioCtrl;
