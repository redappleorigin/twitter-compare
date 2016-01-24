import { Router as router } from "express";
import graphql from "express-graphql";

import schema from "../schemas";

export default router()
  .all("/api", graphql((request) => ({
    graphiql: true,
    pretty: true,
    rootValue: {
      url: request.url,
    },
    schema,
  })))
;
