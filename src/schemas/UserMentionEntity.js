import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "UserMentionEntity",

  fields: {
    id: {
      type: GraphQLInt,
    },
    id_str: {
      type: GraphQLString,
    },
    screen_name: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    indices: {
      type: new GraphQLList(GraphQLInt),
    },
  },
});
