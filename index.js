require("dotenv").config();
const path = require("path");

const app = require("./app");
require("./database");

// esta lógica es para ejecutar el servidor
const main = (async () => {
  await app.listen(app.get("port"));
  console.log("Servidor en línea en el puerto " + app.get("port"));
})();

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
