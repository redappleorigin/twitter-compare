import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
} from "graphql";
import Promise from "bluebird";
import Twitter from "twitter";

import credentials from "../../config/twitter";
import User from "./User";

const twitter = new Twitter(credentials);

const getUserByScreenName = (screen_name) => {
  return new Promise((resolve,reject) => {
    twitter.get( "users/show", {screen_name}, (error, user, raw) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }

      resolve(user);
    });
  });
};

const getUsers = (resource, params, max_possible_users, requests_count=0, list=[]) => {
  const get_all_users = !params.count;

  // If the count requested is greater than the max_possible_users,
  // that can be returned, and if there are less than 200 users,
  // set params.count to max_possible_users
  if (
    (get_all_users && max_possible_users < 200) ||
    (params.count > max_possible_users && max_possible_users < 200)
  ) {
    params.count = max_possible_users;
    requests_count = 0;
  }

  if (params.count > 200 && params.count < max_possible_users) {
    requests_count = Math.ceil(params.count/200) - 1;
    params.count = 200;
  }

  // If no specific count is given, I want all the users
  if (get_all_users || params.count > 200) {
    params.count = 200;
    requests_count = Math.ceil(max_possible_users/params.count) - 1;
  }

  return new Promise((resolve,reject) => {
    twitter.get( resource, params, (error, data, raw) => {
      if (error) {
        console.error(error.message);
        reject(error);
      }

      resolve(data);
    });
  })
  .then((data) => {
    const { users, next_cursor } = data;
    params.cursor = next_cursor;
    list.push(...users);

    if (next_cursor === 0 || requests_count === 0) {
      return list;
    }

    return getUsers(resource, params, max_possible_users, requests_count - 1, list);
  });
};

export default new GraphQLObjectType({
  name: "APIQuery",
  description: "Twitter Compare Query API",

  fields: {
    friends: {
      type: new GraphQLList(User),
      args: {
        count: {
          type: GraphQLInt,
          defaultValue: null,
        },
        cursor: {
          type: GraphQLInt,
          defaultValue: -1,
        },
        include_user_entities: {
          type: GraphQLBoolean,
          defaultValue: false,
        },
        screen_name: {
          type: GraphQLString,
        },
        skip_status: {
          type: GraphQLBoolean,
          defaultValue: true,
        },
        user_id: {
          type: GraphQLInt,
          defaultValue: null,
        },
      },
      resolve(parent, args, root){
        const resource = "friends/list";
        const { screen_name } = args;
        
        return getUserByScreenName(screen_name)
          .then(({friends_count}) => {
            return getUsers(resource, args, friends_count)
              .then((friends) => {
                return friends;
              })
            ;
          })
          .catch((error) => {
            console.error(error);
          })
        ;
      },
    },
    followers: {
      type: new GraphQLList(User),
      args: {
        count: {
          type: GraphQLInt,
          defaultValue: null,
        },
        cursor: {
          type: GraphQLInt,
          defaultValue: -1,
        },
        include_user_entities: {
          type: GraphQLBoolean,
          defaultValue: false,
        },
        screen_name: {
          type: GraphQLString,
        },
        skip_status: {
          type: GraphQLBoolean,
          defaultValue: true,
        },
        user_id: {
          type: GraphQLInt,
          defaultValue: null,
        },
      },
      resolve(parent, args, root){
        const resource = "followers/list";
        const { screen_name } = args;
        
        return getUserByScreenName(screen_name)
          .then(({followers_count}) => {
            return getUsers(resource, args, followers_count)
              .then((followers) => {
                return followers;
              })
            ;
          })
          .catch((error) => {
            console.error(error);
          })
        ;
      },
    },
  },
});
