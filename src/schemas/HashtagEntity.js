import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "HashtagEntity",

  fields: {
    text: {
      type: GraphQLString,
    },
    indices: {
      type: new GraphQLList(GraphQLInt),
    },
  },
});
