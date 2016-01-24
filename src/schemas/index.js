import { GraphQLSchema } from "graphql";

import APIQueryType from "./APIQueryType";

export default new GraphQLSchema({
  query: APIQueryType,
});
