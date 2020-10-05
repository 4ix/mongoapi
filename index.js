require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRouter = require("./routers/routes");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URL;

app.set("views", path.resolve(__dirname + "/views"));
// console.log(path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, function () {
  console.log(`${port}로 서버 연결됨`);
});
