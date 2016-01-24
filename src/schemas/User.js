import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import Entities from "./Entities";
import Status from "./Status";

export default new GraphQLObjectType({
  name: "User",
  description: "Twitter User",

  fields: {
    blocked_by: {
      type: GraphQLBoolean,
    },
    blocking: {
      type: GraphQLBoolean,
    },
    contributors_enabled: {
      type: GraphQLBoolean,
    },
    created_at: {
      type: GraphQLString,
    },
    default_profile: {
      type: GraphQLBoolean,
    },
    default_profile_image: {
      type: GraphQLBoolean,
    },
    description: {
      type: GraphQLString,
    },
    entities: {
      type: Entities,
    },
    favourites_count: {
      type: GraphQLInt,
    },
    follow_request_sent: {
      type: GraphQLBoolean,
    },
    followers_count: {
      type: GraphQLInt,
    },
    following: {
      type: GraphQLBoolean,
    },
    friends_count: {
      type: GraphQLInt,
    },
    geo_enabled: {
      type: GraphQLBoolean,
    },
    has_extended_profile: {
      type: GraphQLBoolean,
    },
    id: {
      type: GraphQLInt,
    },
    id_str: {
      type: GraphQLString,
    },
    is_translation_enabled: {
      type: GraphQLBoolean,
    },
    is_translator: {
      type: GraphQLBoolean,
    },
    lang: {
      type: GraphQLString,
    },
    listed_count: {
      type: GraphQLInt,
    },
    location: {
      type: GraphQLString,
    },
    muting: {
      type: GraphQLBoolean,
    },
    name: {
      type: GraphQLString,
    },
    notifications: {
      type: GraphQLBoolean,
    },
    profile_background_color: {
      type: GraphQLString,
    },
    profile_background_image_url: {
      type: GraphQLString,
    },
    profile_background_image_url_https: {
      type: GraphQLString,
    },
    profile_background_tile: {
      type: GraphQLBoolean,
    },
    profile_banner_url: {
      type: GraphQLString,
    },
    profile_image_url: {
      type: GraphQLString,
    },
    profile_image_url_https: {
      type: GraphQLString,
    },
    profile_link_color: {
      type: GraphQLString,
    },
    profile_sidebar_border_color: {
      type: GraphQLString,
    },
    profile_sidebar_fill_color: {
      type: GraphQLString,
    },
    profile_text_color: {
      type: GraphQLString,
    },
    profile_use_background_image: {
      type: GraphQLBoolean,
    },
    protected: {
      type: GraphQLBoolean,
    },
    screen_name: {
      type: GraphQLString,
    },
    status: {
      type: Status,
    },
    statuses_count: {
      type: GraphQLInt,
    },
    time_zone: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
    utc_offset: {
      type: GraphQLInt,
    },
    verified: {
      type: GraphQLBoolean,
    },
  },
});
