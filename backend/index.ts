import express from "express";
import router from "./index.routes";

// using Express because it is lightweight and customizable, does not lock you in to an opinionated framework like NestJs, and is a little more structured than Fastify
const app = express();
const port = 3000;

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
