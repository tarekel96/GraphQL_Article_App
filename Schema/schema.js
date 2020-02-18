const express = require("express");
const app = express();
const graphqlHTTP = require("express-graphql");

app.get("/test", (req, res) => {
  res.send("TEST");
});

module.exports = app;
