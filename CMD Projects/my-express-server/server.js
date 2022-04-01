const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>HELLO</h1>");
});

app.get("/about", function(req, res) {
  res.send("My name is İdris Uslu. I am 23 years old. I am study at Düzce University.");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
