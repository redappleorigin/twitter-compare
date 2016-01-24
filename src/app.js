import compression from "compression";
import express from "express";
import { json, urlencoded } from "body-parser";

import api from "./middleware/api";
import statics from "./middleware/statics";
import view from "./middleware/view";

// Default server configuraiton
const app = express()
  // gzip/deflate
  .use(compression())
  // application/x-www-form-urlencoded
  .use(urlencoded({ extended: true, inflate: true }))
  // application/json
  .use(json({ inflate: true }))
;

if (__STAGE__ === "development") {
  app.use(require("./middleware/webpack"));
}

app
  .use(statics)
  .use(api)
  .use(view)
;

export default app;
