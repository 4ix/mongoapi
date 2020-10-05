const { request } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 8080;

app.use(
  express.urlencoded({
    extended: false,
  })
);
mongoose.connect(
  "mongodb+srv://root:1234@cluster0.gzelk.mongodb.net/mydb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get("/", function (request, response) {
  //   console.log(request.IncomingMessage);
  response.send("hello, world!");
});

app.listen(port, function () {
  console.log(`${port}로 서버 연결됨`);
});
