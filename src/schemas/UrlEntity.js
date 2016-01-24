import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "UrlEntity",

  fields: {
    url: {
      type: GraphQLString,
    },
    display_url: {
      type: GraphQLString,
    },
    expanded_url: {
      type: GraphQLString,
    },
    indices: {
      type: new GraphQLList(GraphQLInt),
    },
  },
});
