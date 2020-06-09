import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Hello ExpressJS!",
  });
});

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
