import {
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const Size = new GraphQLObjectType({
  name: "Size",

  fields: {
    h: {
      type: GraphQLInt,
    },
    resize: {
      type: GraphQLString,
    },
    w: {
      type: GraphQLInt,
    },
  },
});

export default new GraphQLObjectType({
  name: "Sizes",

  fields: {
    large: {
      type: Size,
    },
    medium: {
      type: Size,
    },
    small: {
      type: Size,
    },
    thumb: {
      type: Size,
    },
  },
});
