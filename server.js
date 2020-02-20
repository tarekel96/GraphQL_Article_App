require("dotenv").config();

// init vars
const express = require("express");
const app = express();
const PORT = 4000 || process.env.PORT;
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
// schema - graphql api section
const schema = require("./Schema/schema.js");

// prevents CORS Error
app.use(cors());

// invoke schema with use method
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Express Server running on PORT: ${PORT}`);
});

/*
"proxy": "http://localhost:3001",
put before repo in package json
*/
