import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

const Variant = new GraphQLObjectType({
  name: "Variant",

  fields: {
    bitrate: {
      type: GraphQLInt,
    },
    content_type: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  },
});

export default new GraphQLObjectType({
  name: "VideoInfo",

  fields: {
    aspect_ratio: {
      type: new GraphQLList(GraphQLInt),
    },
    duration_millis: {
      type: GraphQLInt,
    },
    variants: {
      type: new GraphQLList(Variant),
    },
  },
});
