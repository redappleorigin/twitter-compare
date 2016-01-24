import {
  GraphQLList,
  GraphQLObjectType,
} from "graphql";

import ExtendedEntity from "./ExtendedEntity";
import HashtagEntity from "./HashtagEntity";
import MediaEntity from "./MediaEntity";
import SymbolEntity from "./SymbolEntity";
import UrlEntity from "./UrlEntity";
import UrlsEntity from "./UrlsEntity";
import UserMentionEntity from "./UserMentionEntity";

export default new GraphQLObjectType({
  name: "Entities",

  fields: {
    url: {
      type: UrlsEntity,
    },
    description: {
      type: UrlsEntity,
    },
    hashtags: {
      type: new GraphQLList(HashtagEntity),
    },
    extended_entities: {
      type: ExtendedEntity,
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
