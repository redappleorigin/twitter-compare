import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import HashtagEntity from "./HashtagEntity";
import MediaEntity from "./MediaEntity";
import Sizes from "./Sizes";
import SymbolEntity from "./SymbolEntity";
import UrlEntity from "./UrlEntity";
import UserMentionEntity from "./UserMentionEntity";
import VideoInfo from "./VideoInfo";

export default new GraphQLObjectType({
  name: "ExtendedEntity",

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
    // features: {
    //   type: new GraphQLList(),
    // },
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
    video_info: {
      type: VideoInfo,
    },
    hashtags: {
      type: new GraphQLList(HashtagEntity),
    },
    media: {
      type: new GraphQLList(MediaEntity),
    },
    symbols: {
      type: new GraphQLList(SymbolEntity),
    },
    urls: {
      type: new GraphQLList(UrlEntity),
    },
    user_mentions: {
      type: new GraphQLList(UserMentionEntity),
    },
  },
});
