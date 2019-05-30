const express = require("express");
const app = express();
const path = require("path");
const bp = require("body-parser");

const db = require("./utils/db");
const parido = require("./model/gallo");
// new parido({
//   anillo: 1111,
//   nombre: "lllll",
//   peso: 2000,
//   categoria: "Gallo",
//   equipo:"5cee0bfffacfc42e9773d79f"
// }).save();

const indexRouter = require("./routes/index");
const eliminarRouter = require("./routes/eliminar");
const agregarRouter = require("./routes/agregar");
const editarRouter = require("./routes/editar");
const matcheRouter = require("./routes/match");
const boletosRouter = require("./routes/boletos");

const PORT = process.env.PORT || 3000;
app.use(bp.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(indexRouter);
app.use(boletosRouter);
app.use("/eliminar", eliminarRouter);
app.use("/agregar", agregarRouter);
app.use("/editar", editarRouter);
app.use("/match", matcheRouter);

db()
  .then(result => {
    app.listen(PORT, () => {
      console.log(`localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
