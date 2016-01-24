import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "SymbolEntity",

  fields: {
    text: {
      type: GraphQLString,
    },
    indices: {
      type: new GraphQLList(GraphQLInt),
    },
  },
});
