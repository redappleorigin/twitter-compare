import {
  GraphQLList,
  GraphQLObjectType,
} from "graphql";

import UrlEntity from "./UrlEntity";

export default new GraphQLObjectType({
  name: "UrlsEntity",

  fields: {
    urls: {
      type: new GraphQLList(UrlEntity),
    },
  },
});
