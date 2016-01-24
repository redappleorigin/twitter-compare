import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import Entities from "./Entities";
import ExtendedEntity from "./ExtendedEntity";

export default new GraphQLObjectType({
  name: "Status",
  description: "Status of Twitter User",

  fields: {
    created_at: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLFloat,
    },
    id_str: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    source: {
      type: GraphQLString,
    },
    truncated: {
      type: GraphQLBoolean,
    },
    /*
    in_reply_to_status_id: {
      type: GraphQLString,
    },
    in_reply_to_status_id_str: {
      type: GraphQLString,
    },
    in_reply_to_user_id: {
      type: GraphQLString,
    },
    in_reply_to_user_id_str: {
      type: GraphQLString,
    },
    in_reply_to_screen_name: {
      type: GraphQLString,
    },
    geo: {
      type: GraphQLString,
    },
    coordinates: {
      type: GraphQLString,
    },
    place: {
      type: GraphQLString,
    },
    contributors: {
      type: GraphQLString,
    },
    */
    is_quote_status: {
      type: GraphQLBoolean,
    },
    retweet_count: {
      type: GraphQLInt,
    },
    favorite_count: {
      type: GraphQLInt,
    },
    entities: {
      type: Entities,
    },
    extended_entities: {
      type: ExtendedEntity,
    },
    favorited: {
      type: GraphQLBoolean,
    },
    retweeted: {
      type: GraphQLBoolean,
    },
    possibly_sensitive: {
      type: GraphQLBoolean,
    },
    lang: {
      type: GraphQLString,
    },
  },
});
