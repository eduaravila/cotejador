const express = require("express");
const app = express();
const path = require("path");

const db = require("./utils/db");
const parido = require("./model/gallo");

const indexRouter = require("./routes/index");
const eliminarRouter = require("./routes/eliminar");

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(indexRouter);
app.use("/eliminar", eliminarRouter);
db()
  .then(result => {
    app.listen(PORT, () => {
      console.log(`localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
