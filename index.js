const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URL;

app.use(
  express.urlencoded({
    extended: false,
  })
);
mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (request, response) {
  //   console.log(request.IncomingMessage);
  response.send("hello, world!");
});

app.listen(port, function () {
  console.log(`${port}로 서버 연결됨`);
});
