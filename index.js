const express = require("express");
const app = express();

const port = 8080;

app.get("/", function (request, response) {
  //   console.log(request.IncomingMessage);
  response.send("hello, world");
});

app.listen(port, function () {
  console.log(`${port}로 서버 연결됨`);
});
