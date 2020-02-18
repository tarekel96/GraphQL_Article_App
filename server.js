require("dotenv").config();

// init vars
const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;
// schema - graphql api section
const schema = require("./Schema/schema.js");

// invoke schema with use method
app.use("/graphql", schema);

app.listen(PORT, () => {
  console.log(`Express Server running on PORT: ${PORT}`);
});
