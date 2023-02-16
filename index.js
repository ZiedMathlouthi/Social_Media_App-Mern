const express = require("express");

require("dotenv").config();

const app = express();

const mongoose = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello social media app");
});

const userRoutes = require("./routes/user.router");

app.use("/users", userRoutes);

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection eroor :"));
db.once("open", function () {
  console.log("base de données connectée avec succès yé zied ..!!");
});

app.listen(process.env.PORT, () => {
  console.log(`app listing on port ${process.env.PORT}`);
});
