const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/toolapi", {
  useNewUrlParser: true
});
requireDir("./src/models");

//const Tool = mongoose.model("Tool");

//Rotas
app.use("/", require("./src/routes"));
// app.get("/", (req, res) => {
//   Tool.create({
//     title: "Notion",
//     link: "https://notion.so",
//     description:
//       "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
//     tags: ["organization", "planning", "collaboration", "writing", "calendar"]
//   });
// });
app.listen(3001);
