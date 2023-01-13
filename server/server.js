const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

const mongoURI =
  "mongodb+srv://modest:password123456@cluster0.ljojbnu.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "UserInfo",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.resolve(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../src/index.html"));
});

app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ Error: err });
});

app.listen(3000);
