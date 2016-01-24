import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import Sizes from "./Sizes";

export default new GraphQLObjectType({
  name: "MediaEntity",

  fields: {
    id: {
      type: GraphQLInt,
    },
    id_str: {
      type: GraphQLString,
    },
    media_url: {
      type: GraphQLString,
    },
    media_url_https: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    display_url: {
      type: GraphQLString,
    },
    expanded_url: {
      type: GraphQLString,
    },
    sizes: {
      type: Sizes,
    },
    type: {
      type: GraphQLString,
    },
    indices: {
      type: new GraphQLList(GraphQLInt),
    },
  },
});
